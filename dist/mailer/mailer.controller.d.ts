import { EmailService } from './mailer.service';
export declare class EmailController {
    private readonly emailService;
    constructor(emailService: EmailService);
    sendEmail(): Promise<"Email sent" | "Failed to send email">;
}
