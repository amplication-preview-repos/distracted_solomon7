import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RentalListRelationFilter } from "../rental/RentalListRelationFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  userType?: StringNullableFilter;
  name?: StringNullableFilter;
  rentals?: RentalListRelationFilter;
  orders?: OrderListRelationFilter;
  reviews?: ReviewListRelationFilter;
};
