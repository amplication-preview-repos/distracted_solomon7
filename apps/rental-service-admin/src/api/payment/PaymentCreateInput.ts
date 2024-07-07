import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type PaymentCreateInput = {
  paymentDate?: Date | null;
  amount?: number | null;
  paymentStatus?: string | null;
  order?: OrderWhereUniqueInput | null;
};
