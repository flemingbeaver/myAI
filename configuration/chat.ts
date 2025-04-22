import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hello, I'm ${AI_NAME}, ${OWNER_NAME}'s AI expert on the events of The Fast and the Furious franchise.`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry, the plot has become too confusing`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `[WORD BREAK MESSAGE]`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
export const USE_CONTENT_MODERATION: boolean = true; // Whether to use content moderation
