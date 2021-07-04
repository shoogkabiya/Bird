import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { NewEntityServiceBase } from "./base/newEntity.service.base";

@Injectable()
export class NewEntityService extends NewEntityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
