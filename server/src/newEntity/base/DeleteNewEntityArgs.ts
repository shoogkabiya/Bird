import { ArgsType, Field } from "@nestjs/graphql";
import { NewEntityWhereUniqueInput } from "./NewEntityWhereUniqueInput";

@ArgsType()
class DeleteNewEntityArgs {
  @Field(() => NewEntityWhereUniqueInput, { nullable: false })
  where!: NewEntityWhereUniqueInput;
}

export { DeleteNewEntityArgs };
