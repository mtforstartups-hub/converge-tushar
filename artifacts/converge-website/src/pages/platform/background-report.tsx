import AgentPageTemplate from "@/components/templates/AgentPageTemplate";
import { getAgent } from "@/data/agents";

export default function BackgroundReportPage() {
  const agent = getAgent("background-report")!;
  return <AgentPageTemplate agent={agent} />;
}
