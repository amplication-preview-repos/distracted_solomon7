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
import { RentalService } from "../rental.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { RentalCreateInput } from "./RentalCreateInput";
import { Rental } from "./Rental";
import { RentalFindManyArgs } from "./RentalFindManyArgs";
import { RentalWhereUniqueInput } from "./RentalWhereUniqueInput";
import { RentalUpdateInput } from "./RentalUpdateInput";
import { OrderFindManyArgs } from "../../order/base/OrderFindManyArgs";
import { Order } from "../../order/base/Order";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class RentalControllerBase {
  constructor(
    protected readonly service: RentalService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Rental })
  @nestAccessControl.UseRoles({
    resource: "Rental",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createRental(@common.Body() data: RentalCreateInput): Promise<Rental> {
    return await this.service.createRental({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,

        item: data.item
          ? {
              connect: data.item,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        rentDate: true,
        returnDate: true,

        user: {
          select: {
            id: true,
          },
        },

        item: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Rental] })
  @ApiNestedQuery(RentalFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Rental",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async rentals(@common.Req() request: Request): Promise<Rental[]> {
    const args = plainToClass(RentalFindManyArgs, request.query);
    return this.service.rentals({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        rentDate: true,
        returnDate: true,

        user: {
          select: {
            id: true,
          },
        },

        item: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Rental })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Rental",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async rental(
    @common.Param() params: RentalWhereUniqueInput
  ): Promise<Rental | null> {
    const result = await this.service.rental({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        rentDate: true,
        returnDate: true,

        user: {
          select: {
            id: true,
          },
        },

        item: {
          select: {
            id: true,
          },
        },
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
  @swagger.ApiOkResponse({ type: Rental })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Rental",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateRental(
    @common.Param() params: RentalWhereUniqueInput,
    @common.Body() data: RentalUpdateInput
  ): Promise<Rental | null> {
    try {
      return await this.service.updateRental({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,

          item: data.item
            ? {
                connect: data.item,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          rentDate: true,
          returnDate: true,

          user: {
            select: {
              id: true,
            },
          },

          item: {
            select: {
              id: true,
            },
          },
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
  @swagger.ApiOkResponse({ type: Rental })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Rental",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteRental(
    @common.Param() params: RentalWhereUniqueInput
  ): Promise<Rental | null> {
    try {
      return await this.service.deleteRental({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          rentDate: true,
          returnDate: true,

          user: {
            select: {
              id: true,
            },
          },

          item: {
            select: {
              id: true,
            },
          },
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
  @common.Get("/:id/orders")
  @ApiNestedQuery(OrderFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "any",
  })
  async findOrders(
    @common.Req() request: Request,
    @common.Param() params: RentalWhereUniqueInput
  ): Promise<Order[]> {
    const query = plainToClass(OrderFindManyArgs, request.query);
    const results = await this.service.findOrders(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        orderDate: true,
        status: true,

        user: {
          select: {
            id: true,
          },
        },

        rental: {
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

  @common.Post("/:id/orders")
  @nestAccessControl.UseRoles({
    resource: "Rental",
    action: "update",
    possession: "any",
  })
  async connectOrders(
    @common.Param() params: RentalWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
        connect: body,
      },
    };
    await this.service.updateRental({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/orders")
  @nestAccessControl.UseRoles({
    resource: "Rental",
    action: "update",
    possession: "any",
  })
  async updateOrders(
    @common.Param() params: RentalWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
        set: body,
      },
    };
    await this.service.updateRental({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/orders")
  @nestAccessControl.UseRoles({
    resource: "Rental",
    action: "update",
    possession: "any",
  })
  async disconnectOrders(
    @common.Param() params: RentalWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
        disconnect: body,
      },
    };
    await this.service.updateRental({
      where: params,
      data,
      select: { id: true },
    });
  }
}