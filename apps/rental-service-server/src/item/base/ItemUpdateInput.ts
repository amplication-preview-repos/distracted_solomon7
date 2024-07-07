/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { LocationWhereUniqueInput } from "../../location/base/LocationWhereUniqueInput";
import { Type } from "class-transformer";
import { RentalUpdateManyWithoutItemsInput } from "./RentalUpdateManyWithoutItemsInput";
import { ItemTypeWhereUniqueInput } from "../../itemType/base/ItemTypeWhereUniqueInput";
import { ReviewUpdateManyWithoutItemsInput } from "./ReviewUpdateManyWithoutItemsInput";

@InputType()
class ItemUpdateInput {
  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  available?: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => LocationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LocationWhereUniqueInput)
  @IsOptional()
  @Field(() => LocationWhereUniqueInput, {
    nullable: true,
  })
  location?: LocationWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => RentalUpdateManyWithoutItemsInput,
  })
  @ValidateNested()
  @Type(() => RentalUpdateManyWithoutItemsInput)
  @IsOptional()
  @Field(() => RentalUpdateManyWithoutItemsInput, {
    nullable: true,
  })
  rentals?: RentalUpdateManyWithoutItemsInput;

  @ApiProperty({
    required: false,
    type: () => ItemTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ItemTypeWhereUniqueInput)
  @IsOptional()
  @Field(() => ItemTypeWhereUniqueInput, {
    nullable: true,
  })
  itemType?: ItemTypeWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ReviewUpdateManyWithoutItemsInput,
  })
  @ValidateNested()
  @Type(() => ReviewUpdateManyWithoutItemsInput)
  @IsOptional()
  @Field(() => ReviewUpdateManyWithoutItemsInput, {
    nullable: true,
  })
  reviews?: ReviewUpdateManyWithoutItemsInput;
}

export { ItemUpdateInput as ItemUpdateInput };
