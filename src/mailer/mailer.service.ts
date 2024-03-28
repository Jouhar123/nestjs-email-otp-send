import { Injectable } from '@nestjs/common';
import { SES, SendEmailCommand } from '@aws-sdk/client-ses';

@Injectable()
export class EmailService {
    async sendEmail(to: string, subject: string, message: string): Promise<void> {
        

        const sesClient = new SES({
            // provide your credentials here
            region:AWS_SES_REGION,
            credentials: {
                accessKeyId:AWS_ACCESS_KEY,
                secretAccessKey:AWS_SECRET_ACCESS_KEY
            },

           
        });

        const params = {
            Destination: {
                ToAddresses: [to]
            },
            Message: {
                Body: {
                    Text: {
                        Charset: 'UTF-8',
                        Data: message
                    }
                },
                Subject: {
                    Charset: 'UTF-8',
                    Data: subject
                }
            },
            Source: 'example@gmail.com'
        };

        try {
            const command = new SendEmailCommand(params);
            await sesClient.send(command);
            console.log('Email sent successfully');
        } catch (error) {
            console.error('Error sending email:', error);
            throw error;
        }
    }
}


