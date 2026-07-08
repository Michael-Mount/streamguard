export type MessageStatus = "visible" | "held" | "deleted" | "approved";
export type RiskLevel = "low" | "medium" | "high";

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
