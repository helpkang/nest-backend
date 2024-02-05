// user.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  LoggerService,
} from '@nestjs/common';

import { ApiTags, ApiParam, ApiBody } from '@nestjs/swagger';
import { ApiName } from 'src/common/decorate/api-name';
import { CJSLogger } from 'src/common/logger/cjs-logger';
import { winstonLogger } from 'src/common/logger/winston.config';
import { User } from 'src/entitys/user/user.entity';
import { UserService } from 'src/services/user/user.service';
import winston from 'winston/lib/winston/config';

@ApiTags('member/user')
@Controller('member/user')
export class UserController {
  num = 3;
  constructor(
    private readonly userService: UserService,
    private readonly logger: CJSLogger,
  ) {}

  @Get()
  @ApiName({ summary: 'Get all users' })
  async findAll(): Promise<User[]> {
    this.logger.log('findAll contoller');
    // console.log('num', this.num);
    // this.num--;
    // await new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(0);
    //   }, this.num * 5000);
    // });
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiName({ summary: 'Get user by ID' })
  @ApiParam({ name: 'id', description: 'User ID' })
  async findOne(@Param('id') id: string): Promise<User | undefined> {
    this.logger.debug('get contoller:' + id);
    return this.userService.findOne(Number(id));
  }

  @Post()
  @ApiName({ summary: 'Create a new user' })
  @ApiBody({ type: User, description: 'User data to create' })
  async create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  @Put(':id')
  @ApiName({ summary: 'Update user by ID' })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiBody({ type: User, description: 'User data to update' })
  async update(
    @Param('id') id: string,
    @Body() user: User,
  ): Promise<User | undefined> {
    return this.userService.update(Number(id), user);
  }

  @Delete(':id')
  @ApiName({ summary: 'Delete user by ID' })
  @ApiParam({ name: 'id', description: 'User ID' })
  async remove(@Param('id') id: string): Promise<void> {
    return this.userService.remove(Number(id));
  }
}
