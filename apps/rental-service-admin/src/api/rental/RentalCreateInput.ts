import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { OrderCreateNestedManyWithoutRentalsInput } from "./OrderCreateNestedManyWithoutRentalsInput";

export type RentalCreateInput = {
  rentDate?: Date | null;
  returnDate?: Date | null;
  user?: UserWhereUniqueInput | null;
  item?: ItemWhereUniqueInput | null;
  orders?: OrderCreateNestedManyWithoutRentalsInput;
};
