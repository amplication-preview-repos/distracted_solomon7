import { SortOrder } from "../../util/SortOrder";

export type ReviewOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  rating?: SortOrder;
  comment?: SortOrder;
  userId?: SortOrder;
  itemId?: SortOrder;
};
