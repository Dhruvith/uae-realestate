import { Bell, Search, LayoutDashboard, Users, Folders, Settings, ListPlus, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

export function BrokerDashboardMockup({ className }: { className?: string }) {
    return (
        <div className={cn("flex flex-col w-full h-full bg-bg-card rounded-xl overflow-hidden border border-border-default shadow-card text-[12px]", className)}>
            {/* Browser Chrome */}
            <div className="h-8 border-b border-white/5 bg-black/40 flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-error" />
                <div className="w-2.5 h-2.5 rounded-full bg-warning" />
                <div className="w-2.5 h-2.5 rounded-full bg-success" />
                <div className="mx-auto w-1/2 h-4 rounded bg-white/5" />
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <div className="w-48 border-r border-white/5 bg-black/20 p-4 flex flex-col gap-6">
                    <div className="font-display font-medium text-lg flex items-baseline gap-1">
                        MyProp<span className="text-[9px] text-gold-primary tracking-wider">UAE</span>
                    </div>

                    <div className="flex flex-col gap-2">
                        {[
                            { icon: LayoutDashboard, label: "Dashboard", active: true },
                            { icon: Users, label: "Clients" },
                            { icon: Activity, label: "Pipeline" },
                            { icon: Folders, label: "Documents" },
                        ].map((item, i) => (
                            <div key={i} className={cn("flex items-center gap-3 px-3 py-2 rounded-md transition-colors", item.active ? "bg-gold-primary/10 text-gold-primary" : "text-text-muted hover:text-text-primary")}>
                                <item.icon strokeWidth={2.5} className="w-4 h-4" />
                                <span className="font-medium">{item.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-auto flex items-center gap-3 text-text-muted px-3 py-2">
                        <Settings className="w-4 h-4" />
                        <span className="font-medium">Settings</span>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6 flex flex-col gap-6 bg-bg-primary overflow-hidden">

                    {/* Topbar */}
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-display text-text-primary mb-1">Good morning, Ahmed</h2>
                            <p className="text-text-muted">Here's what's happening with your deals today.</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <Bell className="w-5 h-5 text-text-muted" />
                                <span className="absolute 0 top-0 right-0 w-2 h-2 rounded-full bg-error border border-bg-primary" />
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gold-primary/20 text-gold-primary flex items-center justify-center font-bold">AQ</div>
                        </div>
                    </div>

                    {/* Stat Cards */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-bg-card p-4 rounded-lg border border-border-subtle">
                            <div className="text-text-muted mb-2">Active Deals</div>
                            <div className="text-2xl font-mono text-text-primary mb-1">24</div>
                            <div className="text-success text-[10px]">+3 this week</div>
                        </div>
                        <div className="bg-bg-card p-4 rounded-lg border border-border-subtle">
                            <div className="text-text-muted mb-2">Pending Payments</div>
                            <div className="text-2xl font-mono text-warning mb-1">7</div>
                            <div className="text-text-muted text-[10px]">Due next 14 days</div>
                        </div>
                        <div className="bg-bg-card p-4 rounded-lg border border-border-subtle">
                            <div className="text-text-muted mb-2">This Month</div>
                            <div className="text-2xl font-mono text-gold-primary mb-1">AED 340K</div>
                            <div className="text-text-muted text-[10px]">in commissions</div>
                        </div>
                        <div className="bg-bg-card p-4 rounded-lg border border-border-subtle">
                            <div className="text-text-muted mb-2">New Clients</div>
                            <div className="text-2xl font-mono text-text-primary mb-1">3</div>
                            <div className="text-success text-[10px]">Added recently</div>
                        </div>
                    </div>

                    {/* Activity Feed */}
                    <div className="flex-1 flex flex-col bg-bg-card border border-border-subtle rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-medium text-text-primary">Recent Activity</h3>
                            <ListPlus className="w-4 h-4 text-text-muted" />
                        </div>
                        <div className="flex flex-col gap-3">
                            {[
                                { time: "10:24 AM", action: "Payment Reminded", target: "Sarah Johnson", alert: true },
                                { time: "Yesterday", action: "Deal Moved to Reserve", target: "Mohammed Al Rashid" },
                                { time: "Yesterday", action: "Document Uploaded", target: "Oliver Smith" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-16 text-text-muted text-right shrink-0">{item.time}</div>
                                    <div className="w-2 h-2 mt-1.5 rounded-full bg-gold-primary/30 shrink-0 relative">
                                        {item.alert && <div className="absolute inset-[-4px] bg-warning/20 rounded-full animate-pulse" />}
                                    </div>
                                    <div>
                                        <span className="text-text-primary">{item.action}</span>
                                        <span className="text-text-muted ml-1">— {item.target}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
