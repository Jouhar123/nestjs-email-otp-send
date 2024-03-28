import { Module } from '@nestjs/common';
import { EmailService } from './mailer.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    })
  ],
  providers: [EmailService],
  exports: [EmailService], 
})
export class MailModule {}
