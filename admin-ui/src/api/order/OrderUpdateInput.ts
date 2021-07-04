import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type OrderUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  price?: number | null;
};
