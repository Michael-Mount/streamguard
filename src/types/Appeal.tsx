export type AppealStatus = "pending" | "reviewing" | "approved" | "rejected";

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
