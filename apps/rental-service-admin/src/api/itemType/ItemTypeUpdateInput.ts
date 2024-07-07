import { ItemUpdateManyWithoutItemTypesInput } from "./ItemUpdateManyWithoutItemTypesInput";

export type ItemTypeUpdateInput = {
  name?: string | null;
  items?: ItemUpdateManyWithoutItemTypesInput;
};
