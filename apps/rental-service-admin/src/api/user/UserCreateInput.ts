import { InputJsonValue } from "../../types";
import { RentalCreateNestedManyWithoutUsersInput } from "./RentalCreateNestedManyWithoutUsersInput";
import { OrderCreateNestedManyWithoutUsersInput } from "./OrderCreateNestedManyWithoutUsersInput";
import { ReviewCreateNestedManyWithoutUsersInput } from "./ReviewCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  userType?: string | null;
  name?: string | null;
  rentals?: RentalCreateNestedManyWithoutUsersInput;
  orders?: OrderCreateNestedManyWithoutUsersInput;
  reviews?: ReviewCreateNestedManyWithoutUsersInput;
};
