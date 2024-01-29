// user.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

import { ApiTags, ApiParam, ApiBody } from '@nestjs/swagger';
import { DecoratorName } from 'src/common/swagger/decorate-name';
import { User } from 'src/entitys/user/user.entity';
import { UserService } from 'src/services/user/user.service';

@ApiTags('member/user')
@Controller('member/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @DecoratorName({ summary: 'Get all users' })
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  @DecoratorName({ summary: 'Get user by ID' })
  @ApiParam({ name: 'id', description: 'User ID' })
  async findOne(@Param('id') id: string): Promise<User | undefined> {
    return this.userService.findOne(Number(id));
  }

  @Post()
  @DecoratorName({ summary: 'Create a new user' })
  @ApiBody({ type: User, description: 'User data to create' })
  async create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  @Put(':id')
  @DecoratorName({ summary: 'Update user by ID' })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiBody({ type: User, description: 'User data to update' })
  async update(
    @Param('id') id: string,
    @Body() user: User,
  ): Promise<User | undefined> {
    return this.userService.update(Number(id), user);
  }

  @Delete(':id')
  @DecoratorName({ summary: 'Delete user by ID' })
  @ApiParam({ name: 'id', description: 'User ID' })
  async remove(@Param('id') id: string): Promise<void> {
    return this.userService.remove(Number(id));
  }
}
