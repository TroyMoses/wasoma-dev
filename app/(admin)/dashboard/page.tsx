import { KpiCard } from "@/components/kpi-card";
import { listContacts, listOrders, listInvoices } from "@/app/actions";
import {
  BadgeDollarSign,
  ClipboardList,
  Inbox,
  ShoppingCart,
} from "lucide-react";

export default async function DashboardPage() {
  const [contacts, orders, invoices] = await Promise.all([
    listContacts(),
    listOrders(),
    listInvoices(),
  ]);

  const paidInvoices = invoices
    .filter((i) => i.status === "paid")
    .reduce((s, i) => s + (i.amount || 0), 0);
  const pendingOrders = orders.filter((o) => o.status !== "completed").length;

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <KpiCard
          title="New Contacts"
          value={contacts.length}
          icon={<Inbox className="text-blue-600" />}
        />
        <KpiCard
          title="Orders"
          value={orders.length}
          icon={<ShoppingCart className="text-blue-600" />}
        />
        <KpiCard
          title="Pending Orders"
          value={pendingOrders}
          icon={<ClipboardList className="text-blue-600" />}
        />
        <KpiCard
          title="Paid Invoices (sum)"
          value={`$${paidInvoices.toFixed(2)}`}
          icon={<BadgeDollarSign className="text-blue-600" />}
        />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border bg-card p-4">
          <div className="font-semibold">Recent Contacts</div>
          <ul className="mt-3 space-y-2 text-sm">
            {contacts.slice(0, 6).map((c) => (
              <li
                key={c.id}
                className="flex justify-between border-b last:border-0 py-2"
              >
                <span className="font-medium">{c.name}</span>
                <span className="text-muted-foreground">
                  {new Date(c.created_at).toLocaleString()}
                </span>
              </li>
            ))}
            {contacts.length === 0 && (
              <div className="text-muted-foreground text-sm">
                No messages yet.
              </div>
            )}
          </ul>
        </div>
        <div className="rounded-xl border bg-card p-4">
          <div className="font-semibold">Orders Snapshot</div>
          <ul className="mt-3 space-y-2 text-sm">
            {orders.slice(0, 6).map((o) => (
              <li
                key={o.id}
                className="flex justify-between border-b last:border-0 py-2"
              >
                <span className="font-medium">{o.customer_name}</span>
                <span className="text-muted-foreground">{o.status}</span>
              </li>
            ))}
            {orders.length === 0 && (
              <div className="text-muted-foreground text-sm">
                No orders yet.
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
