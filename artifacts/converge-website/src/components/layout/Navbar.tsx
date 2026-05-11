import { Link } from "wouter";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-midnight border-b border-white/10 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2 text-white">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="12" cy="12" r="3.5" fill="currentColor" />
          </svg>
          <span className="font-sans font-semibold text-base tracking-tight">Converge</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          <Link href="/platform/overview" className="text-steel hover:text-white transition-colors">Platform</Link>
          <Link href="/solutions/cre-term-lending" className="text-steel hover:text-white transition-colors">Solutions</Link>
          <Link href="/customers" className="text-steel hover:text-white transition-colors">Proof</Link>
          <Link href="/resources" className="text-steel hover:text-white transition-colors">Intelligence</Link>
          <Link href="/pricing" className="text-steel hover:text-white transition-colors">Pricing</Link>
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <Link href="/login" className="text-sm font-medium text-steel hover:text-white transition-colors">Log In</Link>
          <Link href="/demo">
            <Button className="bg-verified hover:bg-verified/90 text-white rounded-none px-5 h-9 text-sm font-medium">
              Book a Demo
            </Button>
          </Link>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
