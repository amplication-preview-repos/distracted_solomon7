import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { RentalListRelationFilter } from "../rental/RentalListRelationFilter";
import { ItemTypeWhereUniqueInput } from "../itemType/ItemTypeWhereUniqueInput";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type ItemWhereInput = {
  id?: StringFilter;
  available?: BooleanNullableFilter;
  name?: StringNullableFilter;
  location?: LocationWhereUniqueInput;
  rentals?: RentalListRelationFilter;
  itemType?: ItemTypeWhereUniqueInput;
  reviews?: ReviewListRelationFilter;
};
