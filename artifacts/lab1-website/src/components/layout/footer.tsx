import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <div className="font-display font-bold text-2xl tracking-tighter text-white">
                Lab<span className="text-primary">1</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm mb-6">
              The intelligence infrastructure layer for European healthcare. 
              Making fragmented health data actionable across the DACH region.
            </p>
            <div className="flex gap-4">
              {/* Add social links if needed */}
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4 text-white">Navigation</h4>
            <ul className="space-y-3">
              <li><Link href="/platform" className="text-sm text-muted-foreground hover:text-primary transition-colors">Platform</Link></li>
              <li><Link href="/use-cases" className="text-sm text-muted-foreground hover:text-primary transition-colors">Use Cases</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors">Team</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/imprint" className="text-sm text-muted-foreground hover:text-primary transition-colors">Impressum</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Lab1. All rights reserved.
          </p>
          <div className="text-xs text-muted-foreground flex gap-4">
            <span>Basel</span>
            <span>•</span>
            <span>Berlin</span>
            <span>•</span>
            <span>Vienna</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
