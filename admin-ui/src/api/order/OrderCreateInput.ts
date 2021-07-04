import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type OrderCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  price?: number | null;
};
