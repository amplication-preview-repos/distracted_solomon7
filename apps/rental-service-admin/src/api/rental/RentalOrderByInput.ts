import { SortOrder } from "../../util/SortOrder";

export type RentalOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  rentDate?: SortOrder;
  returnDate?: SortOrder;
  userId?: SortOrder;
  itemId?: SortOrder;
};
