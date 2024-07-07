import { Location } from "../location/Location";
import { Rental } from "../rental/Rental";
import { ItemType } from "../itemType/ItemType";
import { Review } from "../review/Review";

export type Item = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  available: boolean | null;
  name: string | null;
  location?: Location | null;
  rentals?: Array<Rental>;
  itemType?: ItemType | null;
  reviews?: Array<Review>;
};
