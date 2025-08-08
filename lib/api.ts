import "server-only"
import { API_BASE_URL } from "./config"
import type { ApiResult } from "./types"

type FetchOptions = {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE"
  body?: unknown
  headers?: Record<string, string>
  nextOptions?: RequestInit
}

export async function apiFetch<T>(
  path: string,
  { method = "GET", body, headers = {}, nextOptions }: FetchOptions = {}
): Promise<ApiResult<T>> {
  try {
    const res = await fetch(`${API_BASE_URL}${path}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
      // Non-cached by default in Next.js 15; customize if needed.
      ...nextOptions,
    })

    if (!res.ok) {
      const msg = await safeParseError(res)
      return { ok: false, error: msg || `Request failed: ${res.status}` }
    }
    const data = (await res.json()) as T
    return { ok: true, data }
  } catch (e: any) {
    return { ok: false, error: e?.message || "Network error" }
  }
}

async function safeParseError(res: Response) {
  try {
    const json = await res.json()
    return json?.error || json?.message
  } catch {
    return res.statusText
  }
}
