import { Inject, Injectable, Logger } from "@nestjs/common";
import type { ConfigService } from "@nestjs/config";
import type { Redis } from "ioredis";
import { IORedisKey } from "src/redis.module";

@Injectable()
export class PollsRepository {
  private readonly ttl: string;
  private readonly logger = new Logger(PollsRepository.name);

  constructor(
    configService: ConfigService,
    @Inject(IORedisKey) private readonly redisClient: Redis
  ) {
    this.ttl = configService.get('POLL_DURATION');
  }
}