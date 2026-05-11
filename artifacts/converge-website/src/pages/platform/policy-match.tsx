import AgentPageTemplate from "@/components/templates/AgentPageTemplate";
import { getAgent } from "@/data/agents";

export default function PolicyMatchPage() {
  const agent = getAgent("policy-match")!;
  return <AgentPageTemplate agent={agent} />;
}
