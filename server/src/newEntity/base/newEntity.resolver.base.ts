import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import * as gqlBasicAuthGuard from "../../auth/gqlBasicAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { DeleteNewEntityArgs } from "./DeleteNewEntityArgs";
import { NewEntityFindManyArgs } from "./NewEntityFindManyArgs";
import { NewEntityFindUniqueArgs } from "./NewEntityFindUniqueArgs";
import { NewEntity } from "./NewEntity";
import { NewEntityService } from "../newEntity.service";

@graphql.Resolver(() => NewEntity)
@common.UseGuards(gqlBasicAuthGuard.GqlBasicAuthGuard, gqlACGuard.GqlACGuard)
export class NewEntityResolverBase {
  constructor(
    protected readonly service: NewEntityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "NewEntity",
    action: "read",
    possession: "any",
  })
  async _newEntitiesMeta(
    @graphql.Args() args: NewEntityFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [NewEntity])
  @nestAccessControl.UseRoles({
    resource: "NewEntity",
    action: "read",
    possession: "any",
  })
  async newEntities(
    @graphql.Args() args: NewEntityFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<NewEntity[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "NewEntity",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => NewEntity, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "NewEntity",
    action: "read",
    possession: "own",
  })
  async newEntity(
    @graphql.Args() args: NewEntityFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<NewEntity | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "NewEntity",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => NewEntity)
  @nestAccessControl.UseRoles({
    resource: "NewEntity",
    action: "delete",
    possession: "any",
  })
  async deleteNewEntity(
    @graphql.Args() args: DeleteNewEntityArgs
  ): Promise<NewEntity | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
