import SolutionPageTemplate from "@/components/templates/SolutionPageTemplate";
import { getSolution } from "@/data/solutions";

export default function DSCRLendingPage() {
  const solution = getSolution("dscr-lending")!;
  return <SolutionPageTemplate solution={solution} />;
}
