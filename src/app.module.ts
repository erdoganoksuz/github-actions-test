import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoanModule } from './loan/loan.module';
import { CreditModule } from './credit/credit.module';

@Module({
  imports: [LoanModule, CreditModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
