export type UserRole =
  | "viewer"
  | "moderator"
  | "head_moderator"
  | "streamer"
  | "safety_admin";

export type ModerationActionType =
  | "approve_message"
  | "delete_message"
  | "ban_user"
  | "warn_user"
  | "timeout_user";

export type MessageStatus = "visible" | "held" | "deleted" | "approved";
export type ReportStatus = "new" | "reviewing" | "actioned" | "resolved";
export type RiskLevel = "low" | "medium" | "high";
export type AppealStatus = "pending" | "reviewing" | "approved" | "rejected";

export interface User {
  id: string;
  username: string;
  displayName: string;
  role: UserRole;
  createdAt: string;
  riskScore: number;
  isBanned: boolean;
  timeoutUntil?: string;
  warningCount: number;
}

export interface Report {
  id: string;
  messageId: string;
  reportedUserId: string;
  reporterUserId: string;
  reason: string;
  status: ReportStatus;
  severity: RiskLevel;
  createdAt: string;
  assignedModeratorId?: string;
}

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

export interface ChatMessage {
  id: string;
  userId: string;
  channelId: string;
  text: string;
  createdAt: string;
  riskLevel: RiskLevel;
  riskScore: number;
  status: MessageStatus;
  automodReasons: string[];
}

export interface Channel {
  id: string;
  name: string;
  ownerId: string;
  shieldModeEnabled: boolean;
}

export interface Appeal {
  id: string;
  userId: string;
  moderationActionId: string;
  status: AppealStatus;
  message: string;
  decisionNote?: string;
  createdAt: string;
  reviewedAt?: string;
}
