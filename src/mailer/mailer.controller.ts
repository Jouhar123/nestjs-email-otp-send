import { Controller, Get } from '@nestjs/common';
import { EmailService } from './mailer.service';


@Controller('emails')
export class EmailController {
    constructor(private readonly emailService: EmailService) {}

    @Get('send')
    async sendEmail() {
        const randomNumber = Math.floor(100000 + Math.random() * 900000); 

        
        const verificationCode = randomNumber.toString();
        console.log(verificationCode)
        try {
            await this.emailService.sendEmail('example@gmail.com', 'test', `test otp ${verificationCode}`);
            return 'Email sent';
        } catch (error) {
            return 'Failed to send email';
        }
    }
}
