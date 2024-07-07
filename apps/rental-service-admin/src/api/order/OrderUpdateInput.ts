import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { RentalWhereUniqueInput } from "../rental/RentalWhereUniqueInput";
import { PaymentUpdateManyWithoutOrdersInput } from "./PaymentUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  orderDate?: Date | null;
  status?: string | null;
  user?: UserWhereUniqueInput | null;
  rental?: RentalWhereUniqueInput | null;
  payments?: PaymentUpdateManyWithoutOrdersInput;
};
