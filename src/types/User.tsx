export type UserRole =
  | "viewer"
  | "moderator"
  | "head_moderator"
  | "streamer"
  | "safety_admin";

export interface User {
  id: string;
  username: string;
  displayName: string;
  role: UserRole;
  createdAt: string;
  riskScore: number;
  isBanned: boolean;
  timeoutUntil?: string;
}
