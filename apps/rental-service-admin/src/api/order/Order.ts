import { User } from "../user/User";
import { Rental } from "../rental/Rental";
import { Payment } from "../payment/Payment";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  orderDate: Date | null;
  status: string | null;
  user?: User | null;
  rental?: Rental | null;
  payments?: Array<Payment>;
};
