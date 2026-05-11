import SolutionPageTemplate from "@/components/templates/SolutionPageTemplate";
import { getSolution } from "@/data/solutions";

export default function BridgeLendingPage() {
  const solution = getSolution("bridge-lending")!;
  return <SolutionPageTemplate solution={solution} />;
}
