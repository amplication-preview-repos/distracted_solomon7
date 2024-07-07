import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";

export type LocationWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  address?: StringNullableFilter;
  items?: ItemListRelationFilter;
};
