import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { OrderUpdateManyWithoutRentalsInput } from "./OrderUpdateManyWithoutRentalsInput";

export type RentalUpdateInput = {
  rentDate?: Date | null;
  returnDate?: Date | null;
  user?: UserWhereUniqueInput | null;
  item?: ItemWhereUniqueInput | null;
  orders?: OrderUpdateManyWithoutRentalsInput;
};
