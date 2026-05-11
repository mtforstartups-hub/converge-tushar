import SolutionPageTemplate from "@/components/templates/SolutionPageTemplate";
import { getSolution } from "@/data/solutions";

export default function HardMoneyLendingPage() {
  const solution = getSolution("hard-money-lending")!;
  return <SolutionPageTemplate solution={solution} />;
}
