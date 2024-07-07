import { User } from "../user/User";
import { Item } from "../item/Item";

export type Review = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  rating: number | null;
  comment: string | null;
  user?: User | null;
  item?: Item | null;
};
