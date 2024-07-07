import { Payment as TPayment } from "../api/payment/Payment";

export const PAYMENT_TITLE_FIELD = "paymentStatus";

export const PaymentTitle = (record: TPayment): string => {
  return record.paymentStatus?.toString() || String(record.id);
};
