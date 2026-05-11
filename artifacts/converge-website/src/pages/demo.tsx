import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from "lucide-react";

export default function Demo() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-background">
      {/* Left Column: Context */}
      <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center">
        <div className="max-w-lg">
          <div className="flex items-center gap-4 text-sm font-semibold tracking-widest uppercase mb-8">
            <div className="w-8 h-[2px] bg-primary"></div>
            <span>Book a Demo</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-primary leading-tight mb-6">
            See Converge in Action.
          </h1>
          <p className="text-xl text-primary/80 mb-12 leading-relaxed">
            Schedule a 30-minute tailored walkthrough of our AI Credit Intelligence Platform to see how we can accelerate your deal processing.
          </p>

          <div className="space-y-6 mb-16">
            <h4 className="font-bold uppercase tracking-wider text-sm">What to expect:</h4>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-secondary shrink-0" />
              <p className="text-primary/80">A brief discussion of your current credit workflow and bottlenecks.</p>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-secondary shrink-0" />
              <p className="text-primary/80">Live demonstration of document extraction and credit memo generation.</p>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-secondary shrink-0" />
              <p className="text-primary/80">Overview of our security posture and LOS integration capabilities.</p>
            </div>
          </div>

          <div className="p-6 border border-border bg-white italic text-primary/80 font-serif">
            "Converge reduced our average time to term sheet from 3 days to 4 hours. The policy match agent catches things our junior analysts consistently missed."
            <div className="mt-4 not-italic font-sans text-sm font-bold uppercase tracking-wider">
              — VP of Credit, National Bridge Lender
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Form */}
      <div className="w-full md:w-1/2 bg-white border-l border-border p-8 md:p-16 lg:p-24 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Label htmlFor="name" className="text-xs uppercase tracking-wider font-bold">Full Name</Label>
              <Input id="name" placeholder="Jane Doe" className="rounded-none h-12 bg-background border-border focus-visible:ring-secondary" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs uppercase tracking-wider font-bold">Work Email</Label>
              <Input id="email" type="email" placeholder="jane@company.com" className="rounded-none h-12 bg-background border-border focus-visible:ring-secondary" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="text-xs uppercase tracking-wider font-bold">Company</Label>
              <Input id="company" placeholder="Acme Capital" className="rounded-none h-12 bg-background border-border focus-visible:ring-secondary" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="title" className="text-xs uppercase tracking-wider font-bold">Job Title</Label>
              <Input id="title" placeholder="VP of Credit" className="rounded-none h-12 bg-background border-border focus-visible:ring-secondary" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lending-type" className="text-xs uppercase tracking-wider font-bold">Primary Lending Type</Label>
              <Select>
                <SelectTrigger className="rounded-none h-12 bg-background border-border">
                  <SelectValue placeholder="Select type..." />
                </SelectTrigger>
                <SelectContent className="rounded-none">
                  <SelectItem value="bridge">Bridge Lending</SelectItem>
                  <SelectItem value="construction">Construction Lending</SelectItem>
                  <SelectItem value="cre-term">CRE Term Lending</SelectItem>
                  <SelectItem value="dscr">DSCR Lending</SelectItem>
                  <SelectItem value="hard-money">Hard Money Lending</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="volume" className="text-xs uppercase tracking-wider font-bold">Monthly Loan Volume</Label>
              <Select>
                <SelectTrigger className="rounded-none h-12 bg-background border-border">
                  <SelectValue placeholder="Select volume..." />
                </SelectTrigger>
                <SelectContent className="rounded-none">
                  <SelectItem value="0-10">0 - 10 loans</SelectItem>
                  <SelectItem value="11-50">11 - 50 loans</SelectItem>
                  <SelectItem value="51-200">51 - 200 loans</SelectItem>
                  <SelectItem value="200+">200+ loans</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full h-14 rounded-none bg-primary text-primary-foreground text-base font-bold mt-4">
              Schedule Demonstration
            </Button>
            
            <p className="text-xs text-center text-muted-foreground mt-4">
              By submitting this form, you agree to our Privacy Policy and Terms of Service.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
