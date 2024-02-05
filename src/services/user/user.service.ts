// user.service.ts
import { Injectable, LoggerService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CJSLogger } from 'src/common/logger/cjs-logger';
import { winstonLogger } from 'src/common/logger/winston.config';
import { User } from 'src/entitys/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly logger: CJSLogger,
  ) {}

  async findAll(): Promise<User[]> {
    for (let i = 0; i < 10; i++) {
      this.logger.log(`findAll service: ${i}`);
      await this.userRepository.find();
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(0);
        }, 1000);
      });
    }
    const ret = await this.userRepository.find();
    this.logger.log(() => `findAll service: ${JSON.stringify(ret)}`);
    return ret;
  }

  findOne(id: number): Promise<User | undefined> {
    this.logger.log(`findAll service: ${id}`);
    return this.userRepository.findOne({ where: { id } });
  }

  create(user: User): Promise<User> {
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }

  update(id: number, user: User): Promise<User | undefined> {
    return this.userRepository.update(id, user).then(() => this.findOne(id));
  }

  remove(id: number): Promise<void> {
    return this.userRepository.delete(id).then(() => undefined);
  }
}
