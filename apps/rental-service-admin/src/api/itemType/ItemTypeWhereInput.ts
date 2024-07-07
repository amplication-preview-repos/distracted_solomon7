import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";

export type ItemTypeWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  items?: ItemListRelationFilter;
};
