import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { RentalUpdateManyWithoutItemsInput } from "./RentalUpdateManyWithoutItemsInput";
import { ItemTypeWhereUniqueInput } from "../itemType/ItemTypeWhereUniqueInput";
import { ReviewUpdateManyWithoutItemsInput } from "./ReviewUpdateManyWithoutItemsInput";

export type ItemUpdateInput = {
  available?: boolean | null;
  name?: string | null;
  location?: LocationWhereUniqueInput | null;
  rentals?: RentalUpdateManyWithoutItemsInput;
  itemType?: ItemTypeWhereUniqueInput | null;
  reviews?: ReviewUpdateManyWithoutItemsInput;
};
