import { Order } from "../order/Order";

export type Payment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  paymentDate: Date | null;
  amount: number | null;
  paymentStatus: string | null;
  order?: Order | null;
};
