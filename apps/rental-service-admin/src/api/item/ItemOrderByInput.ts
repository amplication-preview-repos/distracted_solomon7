import { SortOrder } from "../../util/SortOrder";

export type ItemOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  available?: SortOrder;
  name?: SortOrder;
  locationId?: SortOrder;
  itemTypeId?: SortOrder;
};
