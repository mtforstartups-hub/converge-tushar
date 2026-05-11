import AgentPageTemplate from "@/components/templates/AgentPageTemplate";
import { getAgent } from "@/data/agents";

export default function CompsPage() {
  const agent = getAgent("comps")!;
  return <AgentPageTemplate agent={agent} />;
}
