// user.service.ts
import { Injectable } from '@nestjs/common';
import {
  InjectTransactionalRepository,
  Transactional,
  TransactionalRepository,
} from 'nestjs-typeorm-transactions';
import { CJSLogger } from 'src/common/logger/cjs-logger';
import { User } from 'src/entitys/user/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectTransactionalRepository(User)
    private userRepository: TransactionalRepository<User>,
    private readonly logger: CJSLogger,
  ) {}

  async findAll(): Promise<User[]> {
    // for (let i = 0; i < 10; i++) {
    //   this.logger.log(`findAll service: ${i}`);
    //   await this.userRepository.find();
    //   await new Promise((resolve) => {
    //     setTimeout(() => {
    //       resolve(0);
    //     }, 1000);
    //   });
    // }
    const ret = await this.userRepository.find();
    this.logger.log(() => `findAll service: ${JSON.stringify(ret)}`);
    return ret;
  }

  findOne(id: number): Promise<User | undefined> {
    this.logger.log(`findAll service: ${id}`);
    return this.userRepository.findOne({ where: { id } });
  }

  // @Transactional()
  async create(user: User): Promise<User> {
    const newUser = this.userRepository.create(user);
    const ret = await this.userRepository.save(newUser);
    throw new Error('tx test');
    return ret;
  }

  update(id: number, user: User): Promise<User | undefined> {
    return this.userRepository.update(id, user).then(() => this.findOne(id));
  }

  remove(id: number): Promise<void> {
    return this.userRepository.delete(id).then(() => undefined);
  }
}
