import SolutionPageTemplate from "@/components/templates/SolutionPageTemplate";
import { getSolution } from "@/data/solutions";

export default function ConstructionLendingPage() {
  const solution = getSolution("construction-lending")!;
  return <SolutionPageTemplate solution={solution} />;
}
