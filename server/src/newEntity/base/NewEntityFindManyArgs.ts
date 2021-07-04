import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NewEntityWhereInput } from "./NewEntityWhereInput";
import { Type } from "class-transformer";
import { NewEntityOrderByInput } from "./NewEntityOrderByInput";

@ArgsType()
class NewEntityFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => NewEntityWhereInput,
  })
  @Field(() => NewEntityWhereInput, { nullable: true })
  @Type(() => NewEntityWhereInput)
  where?: NewEntityWhereInput;

  @ApiProperty({
    required: false,
    type: NewEntityOrderByInput,
  })
  @Field(() => NewEntityOrderByInput, { nullable: true })
  @Type(() => NewEntityOrderByInput)
  orderBy?: NewEntityOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { NewEntityFindManyArgs };
