import { IMessageService } from './IMessageService';

export class TimestampDecorator implements IMessageService {
  constructor(private wrappee: IMessageService) {}

  send(message: string): void {
    const timestamp = new Date().toISOString().replace('T', ' ').split('.')[0];
    this.wrappee.send(`[${timestamp}] ${message}`);
  }
}

export class UppercaseDecorator implements IMessageService {
  constructor(private wrappee: IMessageService) {}

  send(message: string): void {
    this.wrappee.send(message.toUpperCase());
  }
}
