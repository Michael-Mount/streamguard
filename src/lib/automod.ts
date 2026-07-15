import type { MessageStatus, RiskLevel } from "../types/moderation";

type AutoModResult = {
  riskLevel: RiskLevel;
  riskScore: number;
  status: MessageStatus;
  automodReasons: string[];
};

export function AutoMod(text: string): AutoModResult {
  const normalizedText = text.toLocaleLowerCase();

  let riskScore = 1;
  const automodReasons: string[] = [];

  //rule 1
  if (normalizedText.includes("http") || normalizedText.includes(".example")) {
    riskScore = riskScore + 40;
    automodReasons.push("Suspicious Link");
  }
  //rule 2
  if (normalizedText.includes("buy followers")) {
    riskScore = riskScore + 45;
    automodReasons.push("Possible Spam");
  }
  //rule 3
  if (normalizedText.includes("useless")) {
    riskScore = riskScore + 30;
    automodReasons.push("Harassment");
  }
  //rule 4

  if (text === text.toUpperCase() && text.length < 8) {
    riskScore = riskScore + 15;
    automodReasons.push("Aggressive Message");
  }

  let riskLevel: RiskLevel = "low";

  if (riskScore >= 70) {
    riskLevel = "high";
  } else if (riskScore >= 30) {
    riskLevel = "medium";
  }

  let status: MessageStatus = "visible";

  //Decide Status based on riskLevel
  if (riskLevel === "medium" || riskLevel === "high") {
    status = "held";
  }

  return {
    riskLevel,
    riskScore,
    status,
    automodReasons,
  };
}
