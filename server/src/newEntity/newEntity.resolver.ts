import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlBasicAuthGuard from "../auth/gqlBasicAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { NewEntityResolverBase } from "./base/newEntity.resolver.base";
import { NewEntity } from "./base/NewEntity";
import { NewEntityService } from "./newEntity.service";

@graphql.Resolver(() => NewEntity)
@common.UseGuards(gqlBasicAuthGuard.GqlBasicAuthGuard, gqlACGuard.GqlACGuard)
export class NewEntityResolver extends NewEntityResolverBase {
  constructor(
    protected readonly service: NewEntityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
