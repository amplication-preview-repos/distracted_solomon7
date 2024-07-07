import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RentalService } from "./rental.service";
import { RentalControllerBase } from "./base/rental.controller.base";

@swagger.ApiTags("rentals")
@common.Controller("rentals")
export class RentalController extends RentalControllerBase {
  constructor(
    protected readonly service: RentalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
