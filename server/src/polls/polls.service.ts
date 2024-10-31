import { Injectable, Logger } from '@nestjs/common';
import type {
  CreatePollFields,
  JoinPollFields,
  RejoinPollFields,
} from './types';
import { createPollID, createUserId } from 'src/utils/ids';
import type { PollsRepository } from './polls.repository';

@Injectable()
export class PollsService {
  private readonly logger = new Logger(PollsService.name);
  constructor(private readonly pollsRepository: PollsRepository) {}
  async createPoll(fields: CreatePollFields) {
    const pollID = createPollID();
    const userID = createUserId();

    const createdPoll = await this.pollsRepository.createPoll({
      ...fields,
      pollID,
      userID,
    });

    return {
      poll: createdPoll,
    };
  }

  async joinPoll(fields: JoinPollFields) {
    const userID = createUserId();

    this.logger.debug(
      `Fetching poll with ID: ${fields.pollID} for user with ID: ${userID}`,
    );

    const joinedPoll = await this.pollsRepository.getPoll(fields.pollID);

    return {
      poll: joinedPoll,
    };
  }

  async rejoinPoll(fields: RejoinPollFields) {
    this.logger.debug(
      `Rejoining poll with ID: ${fields.pollID} for user with ID: ${fields.userID} with name: ${fields.name}`,
    );

    const joinedPoll = await this.pollsRepository.addParticipant(fields);

    return joinedPoll
  }
}
