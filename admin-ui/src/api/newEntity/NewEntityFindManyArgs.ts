import { NewEntityWhereInput } from "./NewEntityWhereInput";
import { NewEntityOrderByInput } from "./NewEntityOrderByInput";

export type NewEntityFindManyArgs = {
  where?: NewEntityWhereInput;
  orderBy?: NewEntityOrderByInput;
  skip?: number;
  take?: number;
};
