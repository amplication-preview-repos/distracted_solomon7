import { InputJsonValue } from "../../types";
import { RentalUpdateManyWithoutUsersInput } from "./RentalUpdateManyWithoutUsersInput";
import { OrderUpdateManyWithoutUsersInput } from "./OrderUpdateManyWithoutUsersInput";
import { ReviewUpdateManyWithoutUsersInput } from "./ReviewUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  userType?: string | null;
  name?: string | null;
  rentals?: RentalUpdateManyWithoutUsersInput;
  orders?: OrderUpdateManyWithoutUsersInput;
  reviews?: ReviewUpdateManyWithoutUsersInput;
};
