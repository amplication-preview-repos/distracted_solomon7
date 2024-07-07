import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { RentalCreateNestedManyWithoutItemsInput } from "./RentalCreateNestedManyWithoutItemsInput";
import { ItemTypeWhereUniqueInput } from "../itemType/ItemTypeWhereUniqueInput";
import { ReviewCreateNestedManyWithoutItemsInput } from "./ReviewCreateNestedManyWithoutItemsInput";

export type ItemCreateInput = {
  available?: boolean | null;
  name?: string | null;
  location?: LocationWhereUniqueInput | null;
  rentals?: RentalCreateNestedManyWithoutItemsInput;
  itemType?: ItemTypeWhereUniqueInput | null;
  reviews?: ReviewCreateNestedManyWithoutItemsInput;
};
