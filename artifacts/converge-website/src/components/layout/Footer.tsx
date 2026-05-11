import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-white mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="12" cy="12" r="3.5" fill="currentColor" />
              </svg>
              <span className="font-sans font-semibold text-sm tracking-tight">Converge</span>
            </Link>
            <p className="text-xs text-white/40 leading-relaxed mt-4 max-w-[160px]">
              Credit Intelligence Platform for commercial real estate lenders.
            </p>
          </div>
          <div>
            <h4 className="font-sans font-semibold mb-4 tracking-wider text-xs text-white/50 uppercase">Platform</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link href="/platform/overview" className="hover:text-white transition-colors">Overview</Link></li>
              <li><Link href="/platform/triage" className="hover:text-white transition-colors">Triage</Link></li>
              <li><Link href="/platform/credit-intelligence" className="hover:text-white transition-colors">Credit Intelligence</Link></li>
              <li><Link href="/platform/policy-match" className="hover:text-white transition-colors">Policy Match</Link></li>
              <li><Link href="/platform/entity-review" className="hover:text-white transition-colors">Entity Review</Link></li>
              <li><Link href="/platform/background-report" className="hover:text-white transition-colors">Background Report</Link></li>
              <li><Link href="/platform/comps" className="hover:text-white transition-colors">Comps</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans font-semibold mb-4 tracking-wider text-xs text-white/50 uppercase">Solutions</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link href="/solutions/bridge-lending" className="hover:text-white transition-colors">Bridge Lending</Link></li>
              <li><Link href="/solutions/construction-lending" className="hover:text-white transition-colors">Construction Lending</Link></li>
              <li><Link href="/solutions/cre-term-lending" className="hover:text-white transition-colors">CRE Term Lending</Link></li>
              <li><Link href="/solutions/dscr-lending" className="hover:text-white transition-colors">DSCR Lending</Link></li>
              <li><Link href="/solutions/hard-money-lending" className="hover:text-white transition-colors">Hard Money Lending</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans font-semibold mb-4 tracking-wider text-xs text-white/50 uppercase">Intelligence</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/resources/guides" className="hover:text-white transition-colors">Guides</Link></li>
              <li><Link href="/resources/webinars" className="hover:text-white transition-colors">Webinars</Link></li>
              <li><Link href="/resources/reports" className="hover:text-white transition-colors">Reports</Link></li>
              <li><Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans font-semibold mb-4 tracking-wider text-xs text-white/50 uppercase">Company</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link href="/company/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/company/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/company/newsroom" className="hover:text-white transition-colors">Newsroom</Link></li>
              <li><Link href="/company/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/security" className="hover:text-white transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Converge Finance. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/legal/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/legal/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <span className="font-mono">SOC 2 Type II</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
