import { customAlphabet, nanoid } from "nanoid";

export const createPollID = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ', 6)

export const createUserId = () => nanoid();
export const createNominationID = () => nanoid(8);