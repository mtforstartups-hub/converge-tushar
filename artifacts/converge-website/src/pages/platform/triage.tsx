import AgentPageTemplate from "@/components/templates/AgentPageTemplate";
import { getAgent } from "@/data/agents";

export default function TriagePage() {
  const agent = getAgent("triage")!;
  return <AgentPageTemplate agent={agent} />;
}
