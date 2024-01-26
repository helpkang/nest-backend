import { Optional } from '@nestjs/common';
import { IsBoolean, IsNumber, IsNumberString, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserControllerVO {
    @ApiProperty({required: false})
    @Optional()
    @IsNumber()
    id: number;
    @ApiProperty()
    @IsString()
    name: string;
    @ApiProperty({required: false})
    @Optional()
    @IsBoolean()
    active: boolean;
}