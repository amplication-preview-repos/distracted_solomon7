import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { RentalWhereUniqueInput } from "../rental/RentalWhereUniqueInput";
import { PaymentCreateNestedManyWithoutOrdersInput } from "./PaymentCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  orderDate?: Date | null;
  status?: string | null;
  user?: UserWhereUniqueInput | null;
  rental?: RentalWhereUniqueInput | null;
  payments?: PaymentCreateNestedManyWithoutOrdersInput;
};
