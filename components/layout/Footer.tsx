import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-border-subtle bg-bg-primary pt-16 pb-8 text-sm">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8 mb-16">
                    <div className="md:col-span-1">
                        <Link href="/" className="font-display font-bold text-2xl flex items-baseline gap-1 mb-4">
                            MyProperty<span className="font-mono text-[11px] text-gold-primary tracking-widest relative -top-3">UAE</span>
                        </Link>
                        <p className="text-text-secondary leading-relaxed mb-4">
                            The UAE broker's deal management platform.
                        </p>
                        <p className="text-text-muted text-xs">
                            🇦🇪 Built for UAE real estate professionals
                        </p>
                    </div>

                    <div>
                        <h4 className="font-display text-text-primary text-lg mb-6">Platform</h4>
                        <ul className="flex flex-col gap-4">
                            <li><Link href="/#how-it-works" className="text-text-secondary hover:text-gold-primary transition-colors">How it works</Link></li>
                            <li><Link href="/#features" className="text-text-secondary hover:text-gold-primary transition-colors">Features</Link></li>
                            <li><Link href="/pricing" className="text-text-secondary hover:text-gold-primary transition-colors">Pricing</Link></li>
                            <li><Link href="/demo" className="text-text-secondary hover:text-gold-primary transition-colors">Request Demo</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display text-text-primary text-lg mb-6">Company</h4>
                        <ul className="flex flex-col gap-4">
                            <li><Link href="#" className="text-text-secondary hover:text-gold-primary transition-colors">About</Link></li>
                            <li><Link href="#" className="text-text-secondary hover:text-gold-primary transition-colors">Blog</Link></li>
                            <li><Link href="#" className="text-text-secondary hover:text-gold-primary transition-colors">Careers</Link></li>
                            <li><Link href="#" className="text-text-secondary hover:text-gold-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display text-text-primary text-lg mb-6">Legal</h4>
                        <ul className="flex flex-col gap-4">
                            <li><Link href="#" className="text-text-secondary hover:text-gold-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-text-secondary hover:text-gold-primary transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="text-text-secondary hover:text-gold-primary transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-text-muted text-xs">
                    <p>© {new Date().getFullYear()} MyPropertyUAE. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
