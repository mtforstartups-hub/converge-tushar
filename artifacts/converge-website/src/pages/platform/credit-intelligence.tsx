import AgentPageTemplate from "@/components/templates/AgentPageTemplate";
import { getAgent } from "@/data/agents";

export default function CreditIntelligencePage() {
  const agent = getAgent("credit-intelligence")!;
  return <AgentPageTemplate agent={agent} />;
}
