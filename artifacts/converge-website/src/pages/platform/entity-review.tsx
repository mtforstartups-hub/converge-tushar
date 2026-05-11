import AgentPageTemplate from "@/components/templates/AgentPageTemplate";
import { getAgent } from "@/data/agents";

export default function EntityReviewPage() {
  const agent = getAgent("entity-review")!;
  return <AgentPageTemplate agent={agent} />;
}
