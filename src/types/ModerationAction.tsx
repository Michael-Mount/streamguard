export type ModerationActionType =
  | "approve_message"
  | "delete_message"
  | "ban_user"
  | "warn_user"
  | "timeout_user";

export interface ModerationAction {
  id: string;
  type: ModerationActionType;
  targetedUSerID: string;
  moderatorId: string;
  messageId: string;
  reportedId?: string;
  reason: string;
  createdAt: string;
}
