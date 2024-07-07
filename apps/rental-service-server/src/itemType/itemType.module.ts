import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ItemTypeModuleBase } from "./base/itemType.module.base";
import { ItemTypeService } from "./itemType.service";
import { ItemTypeController } from "./itemType.controller";
import { ItemTypeResolver } from "./itemType.resolver";

@Module({
  imports: [ItemTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [ItemTypeController],
  providers: [ItemTypeService, ItemTypeResolver],
  exports: [ItemTypeService],
})
export class ItemTypeModule {}
