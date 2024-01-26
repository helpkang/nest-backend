import { Controller, Get } from '@nestjs/common';
import { UserControllerVO } from 'src/vo-controllers/user/user-controoler.VO';

@Controller('user')
export class UserControllerController {
    @Get()
    getUser(): UserControllerVO {
        return {id: 1, name: 'mv', active: true};
    }
}
