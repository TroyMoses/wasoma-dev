"use server";

import { revalidatePath } from "next/cache";
import { apiFetch } from "@/lib/api";
import type {
  ContactMessage,
  StockItem,
  Worker,
  User,
  Order,
  Invoice,
  Receipt,
  ID,
} from "@/lib/types";

// CONTACTS
export async function listContacts(): Promise<ContactMessage[]> {
  const res = await apiFetch<ContactMessage[]>("/api/contacts");
  return res.ok && res.data ? res.data : [];
}

export async function createContactAction(_: unknown, formData: FormData) {
  const payload = {
    name: String(formData.get("name") || ""),
    email: String(formData.get("email") || ""),
    phone: String(formData.get("phone") || ""),
    subject: String(formData.get("subject") || ""),
    message: String(formData.get("message") || ""),
  };
  const res = await apiFetch<ContactMessage>("/api/contacts", {
    method: "POST",
    body: payload,
  });
  if (!res.ok) return { error: res.error };
  revalidatePath("/admin/contacts");
  return { ok: true };
}

export async function updateContactAction(_: unknown, formData: FormData) {
  const id = String(formData.get("id") || "");
  const payload = {
    status: String(formData.get("status") || ""),
  };
  const res = await apiFetch<ContactMessage>(`/api/contacts/${id}`, {
    method: "PATCH",
    body: payload,
  });
  if (!res.ok) return { error: res.error };
  revalidatePath("/admin/contacts");
  return { ok: true };
}

export async function deleteContactAction(id: ID) {
  const res = await apiFetch<void>(`/api/contacts/${id}`, { method: "DELETE" });
  if (!res.ok) return { ok: false, error: res.error };
  revalidatePath("/admin/contacts");
  return { ok: true };
}

// STOCK
export async function listStock(): Promise<StockItem[]> {
  const res = await apiFetch<StockItem[]>("/api/stock");
  return res.ok && res.data ? res.data : [];
}

export async function createStockAction(_: unknown, formData: FormData) {
  const payload = {
    name: String(formData.get("name") || ""),
    sku: String(formData.get("sku") || ""),
    quantity: Number(formData.get("quantity") || 0),
    unit: String(formData.get("unit") || ""),
    cost_price: Number(formData.get("cost_price") || 0),
    selling_price: Number(formData.get("selling_price") || 0),
  };
  const res = await apiFetch<StockItem>("/api/stock", {
    method: "POST",
    body: payload,
  });
  if (!res.ok) return { error: res.error };
  revalidatePath("/admin/stock");
  return { ok: true };
}

export async function deleteStockAction(id: ID) {
  const res = await apiFetch<void>(`/api/stock/${id}`, { method: "DELETE" });
  if (!res.ok) return { ok: false, error: res.error };
  revalidatePath("/admin/stock");
  return { ok: true };
}

// WORKERS
export async function listWorkers(): Promise<Worker[]> {
  const res = await apiFetch<Worker[]>("/api/workers");
  return res.ok && res.data ? res.data : [];
}

export async function createWorkerAction(_: unknown, formData: FormData) {
  const payload = {
    name: String(formData.get("name") || ""),
    role: String(formData.get("role") || ""),
    email: String(formData.get("email") || ""),
    phone: String(formData.get("phone") || ""),
    status: String(formData.get("status") || "active"),
  };
  const res = await apiFetch<Worker>("/api/workers", {
    method: "POST",
    body: payload,
  });
  if (!res.ok) return { error: res.error };
  revalidatePath("/admin/workers");
  return { ok: true };
}

export async function deleteWorkerAction(id: ID) {
  const res = await apiFetch<void>(`/api/workers/${id}`, { method: "DELETE" });
  if (!res.ok) return { ok: false, error: res.error };
  revalidatePath("/admin/workers");
  return { ok: true };
}

// USERS
export async function listUsers(): Promise<User[]> {
  const res = await apiFetch<User[]>("/api/users");
  return res.ok && res.data ? res.data : [];
}

export async function createUserAction(_: unknown, formData: FormData) {
  const payload = {
    name: String(formData.get("name") || ""),
    email: String(formData.get("email") || ""),
    role: String(formData.get("role") || "staff"),
    status: String(formData.get("status") || "active"),
  };
  const res = await apiFetch<User>("/api/users", {
    method: "POST",
    body: payload,
  });
  if (!res.ok) return { error: res.error };
  revalidatePath("/admin/users");
  return { ok: true };
}

export async function deleteUserAction(id: ID) {
  const res = await apiFetch<void>(`/api/users/${id}`, { method: "DELETE" });
  if (!res.ok) return { ok: false, error: res.error };
  revalidatePath("/admin/users");
  return { ok: true };
}

// ORDERS
export async function listOrders(): Promise<Order[]> {
  const res = await apiFetch<Order[]>("/api/orders");
  return res.ok && res.data ? res.data : [];
}

export async function createOrderAction(_: unknown, formData: FormData) {
  const payload = {
    customer_name: String(formData.get("customer_name") || ""),
    description: String(formData.get("description") || ""),
    total_amount: Number(formData.get("total_amount") || 0),
    status: String(formData.get("status") || "pending"),
  };
  const res = await apiFetch<Order>("/api/orders", {
    method: "POST",
    body: payload,
  });
  if (!res.ok) return { error: res.error };
  revalidatePath("/admin/orders");
  return { ok: true };
}

export async function deleteOrderAction(id: ID) {
  const res = await apiFetch<void>(`/api/orders/${id}`, { method: "DELETE" });
  if (!res.ok) return { ok: false, error: res.error };
  revalidatePath("/admin/orders");
  return { ok: true };
}

// INVOICES
export async function listInvoices(): Promise<Invoice[]> {
  const res = await apiFetch<Invoice[]>("/api/invoices");
  return res.ok && res.data ? res.data : [];
}

export async function createInvoiceAction(_: unknown, formData: FormData) {
  const payload = {
    order_id: String(formData.get("order_id") || ""),
    customer_name: String(formData.get("customer_name") || ""),
    amount: Number(formData.get("amount") || 0),
    status: String(formData.get("status") || "unpaid"),
    due_at: String(formData.get("due_at") || ""),
  };
  const res = await apiFetch<Invoice>("/api/invoices", {
    method: "POST",
    body: payload,
  });
  if (!res.ok) return { error: res.error };
  revalidatePath("/admin/invoices");
  return { ok: true };
}

export async function deleteInvoiceAction(id: ID) {
  const res = await apiFetch<void>(`/api/invoices/${id}`, { method: "DELETE" });
  if (!res.ok) return { ok: false, error: res.error };
  revalidatePath("/admin/invoices");
  return { ok: true };
}

// RECEIPTS
export async function listReceipts(): Promise<Receipt[]> {
  const res = await apiFetch<Receipt[]>("/api/receipts");
  return res.ok && res.data ? res.data : [];
}

export async function createReceiptAction(_: unknown, formData: FormData) {
  const payload = {
    invoice_id: String(formData.get("invoice_id") || ""),
    customer_name: String(formData.get("customer_name") || ""),
    amount: Number(formData.get("amount") || 0),
    received_at: String(formData.get("received_at") || ""),
  };
  const res = await apiFetch<Receipt>("/api/receipts", {
    method: "POST",
    body: payload,
  });
  if (!res.ok) return { error: res.error };
  revalidatePath("/admin/receipts");
  return { ok: true };
}

export async function deleteReceiptAction(id: ID) {
  const res = await apiFetch<void>(`/api/receipts/${id}`, { method: "DELETE" });
  if (!res.ok) return { ok: false, error: res.error };
  revalidatePath("/admin/receipts");
  return { ok: true };
}
