import { GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";

export function PipelineMockup({ className }: { className?: string }) {
    const columns = [
        { name: "Lead", count: 12, color: "text-text-muted", borderColor: "border-border-subtle" },
        { name: "Reserved", count: 4, color: "text-gold-primary", borderColor: "border-gold-primary/30" },
        { name: "Docs", count: 3, color: "text-text-primary", borderColor: "border-white/20" },
        { name: "Payment", count: 2, color: "text-warning", borderColor: "border-warning/30" },
        { name: "Closed", count: 8, color: "text-success", borderColor: "border-success/30" },
    ];

    const cards = [
        { col: 1, name: "Mohammed Al Rashid", prop: "Creek Vista, 2BR", price: "AED 1,850,000", days: "14 days", status: "bg-gold-primary" },
        { col: 1, name: "Sarah Johnson", prop: "Marina Gate II, 1BR", price: "AED 950,000", days: "2 days", status: "bg-text-muted" },
        { col: 2, name: "Oliver Smith", prop: "Emaar Beachfront", price: "AED 3,200,000", days: "1 day", status: "bg-text-primary" },
        { col: 3, name: "Fatima Al Maktoum", prop: "Downtown Views, 3BR", price: "AED 4,500,000", days: "5 days", status: "bg-warning" },
        { col: 4, name: "James Wilson", prop: "JVC Signature, Studio", price: "AED 650,000", days: "10 days", status: "bg-success" },
    ];

    return (
        <div className={cn("w-full h-[500px] bg-bg-card rounded-xl border border-border-default shadow-card flex flex-col overflow-hidden text-sm", className)}>
            <div className="flex items-center justify-between p-4 border-b border-border-subtle bg-black/20">
                <h3 className="font-display font-medium text-lg text-text-primary">Deal Pipeline</h3>
                <div className="flex gap-2">
                    <div className="w-6 h-6 rounded bg-white/5" />
                    <div className="w-6 h-6 rounded bg-white/5" />
                    <div className="w-6 h-6 rounded bg-gold-primary/20" />
                </div>
            </div>

            <div className="flex-1 flex gap-4 p-4 overflow-x-auto mockup-scroll bg-bg-primary">
                {columns.map((col, i) => (
                    <div key={i} className={cn("min-w-[240px] flex-1 flex flex-col gap-3 rounded-lg border-t-[3px] p-3 bg-black/20", col.borderColor)}>
                        <div className="flex items-center justify-between font-medium">
                            <h4 className={col.color}>{col.name}</h4>
                            <span className="text-text-muted text-xs bg-bg-card px-2 py-0.5 rounded-full">{col.count}</span>
                        </div>

                        <div className="flex flex-col gap-3">
                            {cards.filter(c => c.col === i).map((card, j) => (
                                <div key={j} className="bg-bg-card border border-border-subtle p-3 rounded-md shadow-sm flex items-start gap-2 hover:border-gold-primary/50 transition-colors group cursor-pointer relative overflow-hidden">
                                    <GripVertical className="w-4 h-4 text-text-muted opacity-0 group-hover:opacity-100 transition-opacity absolute left-1 top-3" />
                                    <div className="pl-4 flex-1">
                                        <div className="flex items-start justify-between mb-2">
                                            <div className="font-medium text-text-primary tracking-tight">{card.name}</div>
                                            <div className={cn("w-2 h-2 rounded-full", card.status)} />
                                        </div>
                                        <div className="text-text-secondary text-xs mb-1">{card.prop}</div>
                                        <div className="text-gold-light text-xs font-mono">{card.price}</div>
                                        <div className="mt-3 flex items-center justify-between text-[10px] text-text-muted">
                                            <span>{card.days} in stage</span>
                                            <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center font-bold">{card.name.charAt(0)}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="border border-dashed border-border-subtle rounded-md h-[40px] flex items-center justify-center text-text-muted text-xs opacity-50">+ Add Deal</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
