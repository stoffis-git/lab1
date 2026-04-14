import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
  return (
    <div className="flex flex-col w-full pt-24 min-h-[100dvh]">
      <section className="py-20 md:py-32 flex-1 flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            
            {/* Left side text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                We work with healthcare organizations, insurers, pharma companies, and diagnostic labs across the DACH region.
              </p>
              
              <div className="space-y-6 pt-8 border-t border-border/40">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Headquarters</div>
                  <div className="text-white font-medium">Basel, Switzerland</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Email</div>
                  <div className="text-white font-medium">partnerships@lab1.eu</div>
                </div>
              </div>
            </motion.div>

            {/* Right side form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card border border-border p-8 md:p-10 rounded-3xl shadow-xl"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Name</Label>
                    <Input id="name" placeholder="Jane Doe" className="bg-background border-input text-white h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Work Email</Label>
                    <Input id="email" type="email" placeholder="jane@company.com" className="bg-background border-input text-white h-12" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white">Company</Label>
                  <Input id="company" placeholder="Organization name" className="bg-background border-input text-white h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="How can we help you?" 
                    className="bg-background border-input text-white min-h-[150px] resize-none" 
                  />
                </div>
                <Button type="submit" size="lg" className="w-full h-14 text-lg bg-primary text-primary-foreground font-bold hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
