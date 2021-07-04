import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomerWhereInput = {
  address?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
