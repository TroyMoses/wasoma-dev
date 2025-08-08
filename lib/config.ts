export const APP_NAME = "Wasoma Engineering Company Limited"

export const API_BASE_URL =
  (typeof process !== "undefined" &&
    (process.env.NEXT_PUBLIC_API_BASE_URL || process.env.API_BASE_URL)) ||
  "http://localhost:8000"

export const COMPANY_CONTACT = {
  phone: "+255 700 000 000",
  email: "info@wasoma.co.tz",
  address: "P.O. Box 123, Dar es Salaam, Tanzania",
}
