import { ItemUpdateManyWithoutLocationsInput } from "./ItemUpdateManyWithoutLocationsInput";

export type LocationUpdateInput = {
  name?: string | null;
  address?: string | null;
  items?: ItemUpdateManyWithoutLocationsInput;
};
