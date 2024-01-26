import { Controller, Get, Logger } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from 'src/services/user/user.service';
import { UserControllerVO } from 'src/controllers/user/vo/user-controoler.VO';


@ApiTags('user')
@Controller('user')
export class UserController {
  private readonly logger = new Logger('UserController');
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ description: 'Get some resource' })
  @ApiResponse({
    status: 200,
    description: 'Return some resource',
    type: UserControllerVO,
  })
  @Get()
  getUser(): UserControllerVO {
    this.logger.warn('hello#######');
    this.userService.getUser();
    return { id: 1, name: 'haha', active: true };
  }
}
