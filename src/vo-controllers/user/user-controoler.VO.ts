import { Optional } from '@nestjs/common';
import { IsBoolean, IsNumber, IsNumberString, IsString } from 'class-validator';

export class UserControllerVO {
    @Optional()
    @IsNumber()
    id: number;
    @IsString()
    name: string;
    @Optional()
    @IsBoolean()
    active: boolean;
}