export type ID = string;

export type ContactMessage = {
  id: ID;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  created_at: string;
  status?: "new" | "read" | "archived";
};

export type StockItem = {
  id: ID;
  name: string;
  sku?: string;
  quantity: number;
  unit?: string;
  cost_price?: number;
  selling_price?: number;
  updated_at?: string;
  created_at?: string;
};

export type Worker = {
  id: ID;
  name: string;
  role: string;
  email?: string;
  phone?: string;
  status?: "active" | "inactive";
};

export type User = {
  id: ID;
  name: string;
  email: string;
  role: "admin" | "manager" | "staff";
  status?: "active" | "inactive";
};

export type Order = {
  id: ID;
  customer_name: string;
  description?: string;
  total_amount: number;
  status: "pending" | "processing" | "completed" | "cancelled";
  created_at?: string;
};

export type Invoice = {
  id: ID;
  order_id?: ID;
  customer_name: string;
  amount: number;
  status: "unpaid" | "paid" | "overdue";
  issued_at?: string;
  due_at?: string;
};

export type Receipt = {
  id: ID;
  invoice_id?: ID;
  customer_name: string;
  amount: number;
  received_at?: string;
};

export type ApiResult<T> = {
  ok: boolean;
  data?: T;
  error?: string;
};
