import { SortOrder } from "../../util/SortOrder";

export type NewEntityOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
