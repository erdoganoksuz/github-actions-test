import { Injectable } from '@nestjs/common';

@Injectable()
export class CreditService {
  create() {
    return 'This action adds a new credit';
  }

  findAll() {
    return `This action returns all credit`;
  }

  findOne(id: number) {
    return `This action returns a #${id} credit`;
  }

  update(id: number) {
    return `This action updates a #${id} credit`;
  }

  remove(id: number) {
    return `This action removes a #${id} credit`;
  }
}
