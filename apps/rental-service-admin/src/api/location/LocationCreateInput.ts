import { ItemCreateNestedManyWithoutLocationsInput } from "./ItemCreateNestedManyWithoutLocationsInput";

export type LocationCreateInput = {
  name?: string | null;
  address?: string | null;
  items?: ItemCreateNestedManyWithoutLocationsInput;
};
