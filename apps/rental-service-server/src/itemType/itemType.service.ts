import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ItemTypeServiceBase } from "./base/itemType.service.base";

@Injectable()
export class ItemTypeService extends ItemTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
