import { Injectable } from "@nestjs/common";
import type { CreatePollFields, JoinPollFields, RejoinPollFields } from "./types";
import { createPollID, createUserId } from "src/utils/ids";

@Injectable()
export class PollsService {
  async createPoll(fields: CreatePollFields) {
    const pollID = createPollID();
    const userID = createUserId();

    return {
      ...fields,
      userID,
      pollID,
    }
  }

  async joinPoll(fields: JoinPollFields) {
    const userID = createUserId();

    return {
      ...fields,
      userID,
    }
  }

  async rejoinPoll(fields: RejoinPollFields) {
    return fields
  }
}
