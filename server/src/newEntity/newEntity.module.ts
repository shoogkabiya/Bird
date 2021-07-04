import { Module } from "@nestjs/common";
import { NewEntityModuleBase } from "./base/newEntity.module.base";
import { NewEntityService } from "./newEntity.service";
import { NewEntityController } from "./newEntity.controller";
import { NewEntityResolver } from "./newEntity.resolver";

@Module({
  imports: [NewEntityModuleBase],
  controllers: [NewEntityController],
  providers: [NewEntityService, NewEntityResolver],
  exports: [NewEntityService],
})
export class NewEntityModule {}
