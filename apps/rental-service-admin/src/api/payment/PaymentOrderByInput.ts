import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  paymentDate?: SortOrder;
  amount?: SortOrder;
  paymentStatus?: SortOrder;
  orderId?: SortOrder;
};
