import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ItemTypeService } from "./itemType.service";
import { ItemTypeControllerBase } from "./base/itemType.controller.base";

@swagger.ApiTags("itemTypes")
@common.Controller("itemTypes")
export class ItemTypeController extends ItemTypeControllerBase {
  constructor(
    protected readonly service: ItemTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
