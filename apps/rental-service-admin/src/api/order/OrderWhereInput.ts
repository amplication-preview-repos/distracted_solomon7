import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { RentalWhereUniqueInput } from "../rental/RentalWhereUniqueInput";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";

export type OrderWhereInput = {
  id?: StringFilter;
  orderDate?: DateTimeNullableFilter;
  status?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  rental?: RentalWhereUniqueInput;
  payments?: PaymentListRelationFilter;
};
