import { ArgsType, Field } from "@nestjs/graphql";
import { NewEntityWhereUniqueInput } from "./NewEntityWhereUniqueInput";

@ArgsType()
class NewEntityFindUniqueArgs {
  @Field(() => NewEntityWhereUniqueInput, { nullable: false })
  where!: NewEntityWhereUniqueInput;
}

export { NewEntityFindUniqueArgs };
