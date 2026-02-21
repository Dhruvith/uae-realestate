import { Download, FileText, Phone, Mail, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function ClientPortalMockup({ className }: { className?: string }) {
    return (
        <div className={cn("w-full bg-bg-primary rounded-xl overflow-hidden border border-border-default shadow-card text-sm font-body flex flex-col", className)}>
            {/* Client Header */}
            <div className="bg-bg-card p-6 border-b border-border-default flex justify-between items-center bg-black/40">
                <div>
                    <h2 className="font-display text-2xl text-text-primary mb-1">Welcome, Sarah Johnson</h2>
                    <p className="text-text-muted">Your property portfolio is up to date.</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-gold-primary text-bg-primary flex items-center justify-center font-bold text-lg shadow-gold">SJ</div>
            </div>

            <div className="flex-1 p-6 grid grid-cols-[2fr_1fr] gap-6">

                {/* Left Column */}
                <div className="flex flex-col gap-6">
                    {/* Property Card */}
                    <div className="bg-bg-card border border-border-subtle rounded-lg overflow-hidden flex relative shadow-sm">
                        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-gold-primary tracking-widest uppercase">Off-plan</div>
                        <div className="w-[140px] h-full relative shrink-0">
                            <Image
                                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80"
                                alt="Marina Gate"
                                fill
                                className="object-cover grayscale-[50%] opacity-80"
                            />
                        </div>
                        <div className="p-4 flex-1">
                            <h3 className="font-display text-xl text-text-primary mb-1">Marina Gate II</h3>
                            <p className="text-text-secondary text-xs mb-3">Unit 2304 • 2 Bedroom • Select Group</p>
                            <div className="flex gap-4 mb-4">
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-text-muted uppercase">Purchase Price</span>
                                    <span className="font-mono text-gold-light">AED 1,850,000</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-text-muted uppercase">Handover</span>
                                    <span className="text-text-primary">Q4 2025</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Payment Timeline */}
                    <div className="bg-bg-card border border-border-subtle rounded-lg p-5">
                        <h4 className="font-medium text-text-primary mb-4 flex items-center justify-between">
                            Payment Schedule
                            <span className="text-xs bg-gold-primary/10 text-gold-primary px-2 py-1 rounded-full">Next: Mar 15, 2025</span>
                        </h4>

                        <div className="relative pt-2 pb-6 px-2">
                            <div className="absolute top-3.5 left-2 right-2 h-0.5 bg-border-subtle" />

                            <div className="relative flex justify-between z-10 w-full">
                                {/* Paid */}
                                {[...Array(3)].map((_, i) => (
                                    <div key={`paid-${i}`} className="flex flex-col flex-1 items-center gap-2 group relative">
                                        <div className="w-4 h-4 rounded-full bg-success flex items-center justify-center ring-4 ring-bg-card">
                                            <CheckCircle2 className="w-3 h-3 text-bg-card" />
                                        </div>
                                        {i === 1 && <div className="absolute top-8 w-24 text-center text-[10px] text-text-muted opacity-0 group-hover:opacity-100 transition-opacity">1st Installment</div>}
                                    </div>
                                ))}

                                {/* Upcoming */}
                                <div className="flex flex-col flex-1 items-center gap-2 relative">
                                    <div className="w-4 h-4 rounded-full bg-warning ring-4 ring-bg-card ring-offset-1 ring-offset-warning/50 animate-pulse" />
                                    <div className="absolute top-8 w-32 -ml-10 text-center text-xs text-warning font-medium">AED 185,000 Due</div>
                                </div>

                                {/* Future */}
                                {[...Array(4)].map((_, i) => (
                                    <div key={`future-${i}`} className="flex flex-col flex-1 items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-border-active ring-4 ring-bg-card mt-0.5" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-6">

                    {/* Documents */}
                    <div className="bg-bg-card border border-border-subtle rounded-lg p-5">
                        <h4 className="font-medium text-text-primary mb-4">Your Documents</h4>
                        <div className="flex flex-col gap-3">
                            {[
                                { name: "Sales & Purchase Ag...", date: "Jan 12, 2025", size: "2.4 MB" },
                                { name: "Reservation Receipt", date: "Jan 10, 2025", size: "840 KB" },
                                { name: "Developer NOC", date: "Jan 14, 2025", size: "1.1 MB" },
                            ].map((doc, i) => (
                                <div key={i} className="flex items-center justify-between p-3 border border-white/5 rounded bg-black/20 hover:bg-gold-primary/5 transition-colors group cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-white/5 rounded text-gold-primary group-hover:bg-gold-primary/20"><FileText className="w-4 h-4" /></div>
                                        <div>
                                            <div className="text-xs text-text-primary font-medium">{doc.name}</div>
                                            <div className="text-[10px] text-text-muted">{doc.date} • {doc.size}</div>
                                        </div>
                                    </div>
                                    <Download className="w-4 h-4 text-text-muted group-hover:text-gold-primary" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Broker Contact */}
                    <div className="bg-[#1A2030] border border-gold-primary/20 rounded-lg p-5 text-center flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-bg-card border-2 border-gold-primary flex items-center justify-center font-display text-lg text-gold-light mb-2 relative shadow-gold">
                            AQ
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-success rounded-full border-2 border-[#1A2030]" />
                        </div>
                        <div className="text-sm font-medium text-text-primary">Ahmed Qureshi</div>
                        <div className="text-xs text-text-muted mb-4">Your Dedicated Broker</div>

                        <div className="flex gap-2 w-full">
                            <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-white/5 hover:bg-white/10 rounded border border-white/10 transition-colors text-text-primary text-xs">
                                <Phone className="w-3 h-3" /> Call
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-white/5 hover:bg-white/10 rounded border border-white/10 transition-colors text-text-primary text-xs">
                                <Mail className="w-3 h-3" /> Email
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
