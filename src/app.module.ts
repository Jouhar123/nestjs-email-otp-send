import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailService } from './mailer/mailer.service';
import { EmailController } from './mailer/mailer.controller';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [MailerModule],
  controllers: [AppController,EmailController],
  providers: [AppService,EmailService],
})
export class AppModule {}
