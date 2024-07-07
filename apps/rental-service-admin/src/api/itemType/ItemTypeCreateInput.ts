import { ItemCreateNestedManyWithoutItemTypesInput } from "./ItemCreateNestedManyWithoutItemTypesInput";

export type ItemTypeCreateInput = {
  name?: string | null;
  items?: ItemCreateNestedManyWithoutItemTypesInput;
};
