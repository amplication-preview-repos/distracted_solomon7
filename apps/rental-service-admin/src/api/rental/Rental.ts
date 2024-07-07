import { User } from "../user/User";
import { Item } from "../item/Item";
import { Order } from "../order/Order";

export type Rental = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  rentDate: Date | null;
  returnDate: Date | null;
  user?: User | null;
  item?: Item | null;
  orders?: Array<Order>;
};
