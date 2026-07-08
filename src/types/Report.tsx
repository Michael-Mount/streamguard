export type ReportStatus = "new" | "reviewing" | "actioned" | "resolved";
export type RiskLevel = "low" | "medium" | "high";

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
