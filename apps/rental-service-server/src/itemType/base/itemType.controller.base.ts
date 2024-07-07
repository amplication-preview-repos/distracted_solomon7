/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ItemTypeService } from "../itemType.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ItemTypeCreateInput } from "./ItemTypeCreateInput";
import { ItemType } from "./ItemType";
import { ItemTypeFindManyArgs } from "./ItemTypeFindManyArgs";
import { ItemTypeWhereUniqueInput } from "./ItemTypeWhereUniqueInput";
import { ItemTypeUpdateInput } from "./ItemTypeUpdateInput";
import { ItemFindManyArgs } from "../../item/base/ItemFindManyArgs";
import { Item } from "../../item/base/Item";
import { ItemWhereUniqueInput } from "../../item/base/ItemWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ItemTypeControllerBase {
  constructor(
    protected readonly service: ItemTypeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ItemType })
  @nestAccessControl.UseRoles({
    resource: "ItemType",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createItemType(
    @common.Body() data: ItemTypeCreateInput
  ): Promise<ItemType> {
    return await this.service.createItemType({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [ItemType] })
  @ApiNestedQuery(ItemTypeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ItemType",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async itemTypes(@common.Req() request: Request): Promise<ItemType[]> {
    const args = plainToClass(ItemTypeFindManyArgs, request.query);
    return this.service.itemTypes({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ItemType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ItemType",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async itemType(
    @common.Param() params: ItemTypeWhereUniqueInput
  ): Promise<ItemType | null> {
    const result = await this.service.itemType({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ItemType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ItemType",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateItemType(
    @common.Param() params: ItemTypeWhereUniqueInput,
    @common.Body() data: ItemTypeUpdateInput
  ): Promise<ItemType | null> {
    try {
      return await this.service.updateItemType({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ItemType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ItemType",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteItemType(
    @common.Param() params: ItemTypeWhereUniqueInput
  ): Promise<ItemType | null> {
    try {
      return await this.service.deleteItemType({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/items")
  @ApiNestedQuery(ItemFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Item",
    action: "read",
    possession: "any",
  })
  async findItems(
    @common.Req() request: Request,
    @common.Param() params: ItemTypeWhereUniqueInput
  ): Promise<Item[]> {
    const query = plainToClass(ItemFindManyArgs, request.query);
    const results = await this.service.findItems(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        available: true,
        name: true,

        location: {
          select: {
            id: true,
          },
        },

        itemType: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/items")
  @nestAccessControl.UseRoles({
    resource: "ItemType",
    action: "update",
    possession: "any",
  })
  async connectItems(
    @common.Param() params: ItemTypeWhereUniqueInput,
    @common.Body() body: ItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      items: {
        connect: body,
      },
    };
    await this.service.updateItemType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/items")
  @nestAccessControl.UseRoles({
    resource: "ItemType",
    action: "update",
    possession: "any",
  })
  async updateItems(
    @common.Param() params: ItemTypeWhereUniqueInput,
    @common.Body() body: ItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      items: {
        set: body,
      },
    };
    await this.service.updateItemType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/items")
  @nestAccessControl.UseRoles({
    resource: "ItemType",
    action: "update",
    possession: "any",
  })
  async disconnectItems(
    @common.Param() params: ItemTypeWhereUniqueInput,
    @common.Body() body: ItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      items: {
        disconnect: body,
      },
    };
    await this.service.updateItemType({
      where: params,
      data,
      select: { id: true },
    });
  }
}