import { JsonValue } from "type-fest";
import { Rental } from "../rental/Rental";
import { Order } from "../order/Order";
import { Review } from "../review/Review";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  userType: string | null;
  name: string | null;
  rentals?: Array<Rental>;
  orders?: Array<Order>;
  reviews?: Array<Review>;
};
