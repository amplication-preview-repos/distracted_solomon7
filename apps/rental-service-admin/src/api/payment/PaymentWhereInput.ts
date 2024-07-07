import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type PaymentWhereInput = {
  id?: StringFilter;
  paymentDate?: DateTimeNullableFilter;
  amount?: FloatNullableFilter;
  paymentStatus?: StringNullableFilter;
  order?: OrderWhereUniqueInput;
};
