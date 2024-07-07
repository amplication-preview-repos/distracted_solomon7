import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type RentalWhereInput = {
  id?: StringFilter;
  rentDate?: DateTimeNullableFilter;
  returnDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
  item?: ItemWhereUniqueInput;
  orders?: OrderListRelationFilter;
};
