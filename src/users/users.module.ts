import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { EmailModule } from 'src/email/email.module';
import { EmailService } from 'src/email/email.service';

@Module({
  imports: [EmailModule],
  controllers: [UsersController],
  providers: [UsersService, EmailService],
})
export class UsersModule {}
