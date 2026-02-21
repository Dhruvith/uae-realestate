import { Calendar, MoreVertical, Search, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export function PaymentTrackerMockup({ className }: { className?: string }) {
    const rows = [
        { client: "Sarah J.", prop: "Marina Gate II", inst: "1st Installment", amt: "AED 185,000", date: "Jan 15, 2025", status: "Paid" },
        { client: "Sarah J.", prop: "Marina Gate II", inst: "2nd Installment", amt: "AED 185,000", date: "Mar 15, 2025", status: "Pending" },
        { client: "Oliver S.", prop: "Emaar Beachfront", inst: "Handover", amt: "AED 1,600,000", date: "Feb 01, 2025", status: "Overdue" },
        { client: "Ahmed Q.", prop: "Downtown Views", inst: "Reservation", amt: "AED 225,000", date: "Today", status: "Pending" },
        { client: "Ahmed Q.", prop: "Downtown Views", inst: "DLD Fee (4%)", amt: "AED 180,000", date: "Today", status: "Pending" },
        { client: "Fatima A.", prop: "JVC Signature", inst: "3rd Installment", amt: "AED 65,000", date: "Apr 10, 2025", status: "Paid" },
    ];

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "Paid":
                return <span className="px-2 py-1 rounded bg-success/20 text-success text-[10px] font-bold uppercase tracking-wider">Paid</span>;
            case "Pending":
                return <span className="px-2 py-1 rounded bg-warning/20 text-warning text-[10px] font-bold uppercase tracking-wider">Pending</span>;
            case "Overdue":
                return <span className="px-2 py-1 rounded bg-error/20 text-error text-[10px] font-bold uppercase tracking-wider">Overdue</span>;
            default:
                return <span>{status}</span>;
        }
    };

    return (
        <div className={cn("w-full bg-bg-card rounded-xl border border-border-default shadow-card text-[12px] flex flex-col font-body overflow-hidden", className)}>
            <div className="p-5 border-b border-border-default bg-black/20 flex items-center justify-between">
                <div>
                    <h3 className="font-display font-medium text-text-primary text-xl mb-1">Payment Tracker</h3>
                    <p className="text-text-muted">AED 4.2M of AED 6.8M collected (62%)</p>
                </div>
                <div className="flex bg-black/40 rounded-lg p-1 border border-border-subtle h-9 w-[280px]">
                    <Search className="w-4 h-4 text-text-muted mt-1.5 ml-2" />
                    <div className="ml-2 mt-1.5 text-text-muted text-xs flex-1">Filter by client or property...</div>
                </div>
            </div>

            <div className="p-5">
                <div className="w-full h-3 rounded-full bg-bg-secondary border border-border-subtle overflow-hidden mb-6 flex">
                    <div className="h-full bg-success" style={{ width: "62%" }} />
                    <div className="h-full bg-warning/50" style={{ width: "15%" }} />
                </div>

                <div className="w-full text-left bg-black/40 rounded-lg overflow-hidden border border-border-subtle">
                    <div className="grid grid-cols-[1.5fr_1.5fr_1.5fr_1fr_1fr_0.8fr_0.5fr] gap-4 p-3 border-b border-border-subtle text-text-muted uppercase tracking-wider text-[10px] font-bold bg-bg-secondary/50">
                        <div>Client</div>
                        <div>Property</div>
                        <div>Installment</div>
                        <div>Amount</div>
                        <div>Due Date</div>
                        <div>Status</div>
                        <div className="text-center">Action</div>
                    </div>
                    <div className="flex flex-col">
                        {rows.map((row, i) => (
                            <div key={i} className="grid grid-cols-[1.5fr_1.5fr_1.5fr_1fr_1fr_0.8fr_0.5fr] gap-4 p-3 border-b border-white/5 items-center hover:bg-gold-primary/5 transition-colors group">
                                <div className="font-medium text-text-primary flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-full bg-gold-primary/10 text-gold-primary flex items-center justify-center font-bold text-[9px]">{row.client.charAt(0)}</div>
                                    {row.client}
                                </div>
                                <div className="text-text-secondary">{row.prop}</div>
                                <div className="text-text-muted">{row.inst}</div>
                                <div className="font-mono text-gold-light opacity-90">{row.amt}</div>
                                <div className="flex items-center gap-1.5 text-text-secondary">
                                    <Calendar className="w-3 h-3 text-text-muted" /> {row.date}
                                </div>
                                <div>{getStatusBadge(row.status)}</div>
                                <div className="flex justify-center">
                                    {(row.status === "Pending" || row.status === "Overdue") ? (
                                        <button className="flex items-center justify-center p-1.5 rounded hover:bg-bg-primary text-gold-primary opacity-0 group-hover:opacity-100 transition-opacity" title="Send Reminder">
                                            <Send className="w-3 h-3" />
                                        </button>
                                    ) : (
                                        <div className="w-6 h-6" /> // Placeholder to keep grid aligned
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
