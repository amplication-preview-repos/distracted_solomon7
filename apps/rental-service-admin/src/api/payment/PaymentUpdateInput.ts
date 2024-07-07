import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type PaymentUpdateInput = {
  paymentDate?: Date | null;
  amount?: number | null;
  paymentStatus?: string | null;
  order?: OrderWhereUniqueInput | null;
};
