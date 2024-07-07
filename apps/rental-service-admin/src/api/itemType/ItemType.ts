import { Item } from "../item/Item";

export type ItemType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  items?: Array<Item>;
};
