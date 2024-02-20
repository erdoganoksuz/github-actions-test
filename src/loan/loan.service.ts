import { Injectable } from '@nestjs/common';

@Injectable()
export class LoanService {
  create() {
    return 'This action adds a new loan';
  }

  findAll() {
    return `This action returns all loan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} loan`;
  }

  update(id: number) {
    return `This action updates a #${id} loan`;
  }

  remove(id: number) {
    return `This action removes a #${id} loan`;
  }
}
