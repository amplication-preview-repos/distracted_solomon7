import { ItemTypeWhereInput } from "./ItemTypeWhereInput";
import { ItemTypeOrderByInput } from "./ItemTypeOrderByInput";

export type ItemTypeFindManyArgs = {
  where?: ItemTypeWhereInput;
  orderBy?: Array<ItemTypeOrderByInput>;
  skip?: number;
  take?: number;
};
