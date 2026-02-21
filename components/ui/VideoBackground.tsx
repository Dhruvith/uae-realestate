"use client";

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

type OverlayPreset = 'hero' | 'cta' | 'stats' | 'custom';

interface VideoBackgroundProps {
    src: string;
    preset: OverlayPreset;
    customOverlay?: string;
    videoFilter?: string;
    showNoise?: boolean;
    className?: string;
}

const OVERLAY_PRESETS = {
    hero: `linear-gradient(
    105deg,
    rgba(10,12,16,0.97) 0%,
    rgba(10,12,16,0.92) 35%,
    rgba(10,12,16,0.75) 65%,
    rgba(10,12,16,0.40) 100%
  )`,
    cta: `linear-gradient(
    to bottom,
    rgba(10,12,16,1.0) 0%,
    rgba(10,12,16,0.88) 30%,
    rgba(10,12,16,0.88) 70%,
    rgba(10,12,16,1.0) 100%
  )`,
    stats: `radial-gradient(
    ellipse at center,
    rgba(10,12,16,0.70) 0%,
    rgba(10,12,16,0.90) 60%,
    rgba(10,12,16,0.98) 100%
  )`,
    custom: '',
};

const VIDEO_FILTERS = {
    hero: 'brightness(0.35) saturate(0.8)',
    cta: 'brightness(0.20) saturate(0.6) sepia(0.2)',
    stats: 'brightness(0.25) saturate(0.7)',
    custom: 'brightness(0.3)',
};

const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`;

export function VideoBackground({
    src,
    preset,
    customOverlay,
    videoFilter,
    showNoise = true,
    className = '',
}: VideoBackgroundProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const prefersReduced = useReducedMotion();
    const [isLoaded, setIsLoaded] = useState(false);

    // Fade video in only after it loads — prevents flash
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        const handleCanPlay = () => setIsLoaded(true);
        video.addEventListener('canplaythrough', handleCanPlay);
        return () => video.removeEventListener('canplaythrough', handleCanPlay);
    }, []);

    const overlayGradient = customOverlay ?? OVERLAY_PRESETS[preset];
    const filter = videoFilter ?? (VIDEO_FILTERS as any)[preset] ?? VIDEO_FILTERS.custom;

    // If user prefers reduced motion, skip video entirely
    // Fall back to a static dark background
    if (prefersReduced) {
        return (
            <div
                className={`absolute inset-0 z-0 ${className}`}
                style={{ background: '#0A0C10' }}
            />
        );
    }

    return (
        <div className={`absolute inset-0 z-0 overflow-hidden ${className}`}>

            {/* Layer 1 — Video */}
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                style={{
                    filter,
                    opacity: isLoaded ? 1 : 0,
                    transition: 'opacity 1.2s ease',
                    zIndex: 0,
                }}
            >
                <source src={src} type="video/mp4" />
            </video>

            {/* Layer 2 — Gradient overlay */}
            <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: overlayGradient,
                    zIndex: 1,
                }}
            />

            {/* Layer 3 — Noise grain (optional, premium feel) */}
            {showNoise && (
                <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: NOISE_SVG,
                        opacity: 0.035,
                        mixBlendMode: 'overlay',
                        zIndex: 2,
                    }}
                />
            )}
        </div>
    );
}
