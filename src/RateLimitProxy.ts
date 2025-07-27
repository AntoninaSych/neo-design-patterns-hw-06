import { IMessageService } from './IMessageService';

export class RateLimitProxy implements IMessageService {
  private lastSent = 0;

  constructor(
      private wrappee: IMessageService,
      private intervalMs: number
  ) {}

  send(message: string): void {
    const now = Date.now();
    if (now - this.lastSent < this.intervalMs) {
      console.log('[RateLimit] skipped');
      return;
    }

    this.lastSent = now;
    this.wrappee.send(message);
  }
}

export function createRateLimitProxy(wrappee: IMessageService, intervalMs: number): IMessageService {
  return new RateLimitProxy(wrappee, intervalMs);
}
