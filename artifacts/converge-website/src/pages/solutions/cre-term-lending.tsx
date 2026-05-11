import SolutionPageTemplate from "@/components/templates/SolutionPageTemplate";
import { getSolution } from "@/data/solutions";

export default function CRETermLendingPage() {
  const solution = getSolution("cre-term-lending")!;
  return <SolutionPageTemplate solution={solution} />;
}
