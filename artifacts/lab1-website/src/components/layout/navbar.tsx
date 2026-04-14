import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/platform", label: "Platform" },
    { href: "/use-cases", label: "Use Cases" },
    { href: "/about", label: "About" },
    { href: "/team", label: "Team" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-in-out",
        isScrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/50 py-3.5"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center z-50 relative group">
          <img src="/logo.png" alt="Lab1" className="h-7 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[13px] font-medium tracking-wide transition-colors duration-200",
                isActive(link.href)
                  ? "text-white"
                  : "text-muted-foreground hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href="/contact">
            <Button
              size="sm"
              className="font-semibold px-5 h-9 text-[13px] bg-primary text-primary-foreground hover:bg-primary/90 tracking-wide"
            >
              Get in Touch
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 relative p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background/97 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-1 md:hidden">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "w-full text-center py-4 text-2xl font-display font-semibold tracking-tight transition-colors",
                isActive(link.href) ? "text-primary" : "text-muted-foreground hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-8">
            <Link href="/contact">
              <Button size="lg" className="px-10 bg-primary text-primary-foreground font-semibold">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
