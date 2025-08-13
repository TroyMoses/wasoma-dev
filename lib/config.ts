export const APP_NAME = "Wasoma Engineering Company Ltd";

export const API_BASE_URL =
  (typeof process !== "undefined" &&
    (process.env.NEXT_PUBLIC_API_BASE_URL || process.env.API_BASE_URL)) ||
  "http://localhost:8000";

export const COMPANY_CONTACT = {
  name: "Wasoma Engineering Company Ltd",
  phone: "+256 705 785 716",
  email: "info@wasomaengineering.com",
  address: "P.O. Box 123, Kampala, Uganda",
};
