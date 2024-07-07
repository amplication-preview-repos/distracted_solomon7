import { ItemType as TItemType } from "../api/itemType/ItemType";

export const ITEMTYPE_TITLE_FIELD = "name";

export const ItemTypeTitle = (record: TItemType): string => {
  return record.name?.toString() || String(record.id);
};
