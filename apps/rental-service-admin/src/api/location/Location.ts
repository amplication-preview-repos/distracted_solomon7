import { Item } from "../item/Item";

export type Location = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  address: string | null;
  items?: Array<Item>;
};
