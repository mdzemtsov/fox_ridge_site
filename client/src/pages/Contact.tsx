import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function Contact() {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();

  const onSubmit = async (data: any) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(data);
    toast.success("Message sent successfully. We'll be in touch shortly.");
    reset();
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header - Architectural */}
      <section className="pt-32 pb-20 bg-background border-b border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="text-secondary font-mono text-sm uppercase tracking-widest mb-4 block">05 / Contact</span>
            <h1 className="font-display text-6xl md:text-7xl font-bold mb-8 text-primary tracking-tight">
              Start the <br />
              <span className="text-secondary">Conversation.</span>
            </h1>
            <p className="text-2xl text-primary/70 font-light max-w-2xl leading-relaxed">
              Connect with our team to discuss investment opportunities or partnership inquiries.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white">
        <div className="flex flex-col lg:flex-row">
          {/* Contact Info - Left Column */}
          <div className="lg:w-5/12 p-12 lg:p-24 border-r border-border bg-slate-50">
            <h2 className="font-display text-3xl font-bold text-primary mb-8">Get in Touch</h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Whether you're an accredited investor looking for opportunities or a property owner interested in selling, we'd love to hear from you.
            </p>

            <div className="space-y-12">
              <div className="group">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 bg-white border border-border flex items-center justify-center group-hover:border-secondary transition-colors duration-300">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-primary">Email</h3>
                </div>
                <a href="mailto:info@foxridgeequity.com" className="text-muted-foreground hover:text-secondary transition-colors pl-14 block text-lg">
                  info@foxridgeequity.com
                </a>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 bg-white border border-border flex items-center justify-center group-hover:border-secondary transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-primary">Locations</h3>
                </div>
                <div className="pl-14 space-y-1">
                  <p className="text-muted-foreground text-lg">Austin, Texas</p>
                  <p className="text-muted-foreground text-lg">Miami, Florida</p>
                </div>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 bg-white border border-border flex items-center justify-center group-hover:border-secondary transition-colors duration-300">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-primary">Phone</h3>
                </div>
                <p className="text-muted-foreground pl-14 text-lg">+1 (786) 828-9533</p>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Column */}
          <div className="lg:w-7/12 p-12 lg:p-24">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 max-w-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 group">
                  <label htmlFor="firstName" className="text-sm font-bold uppercase tracking-wider text-primary group-focus-within:text-secondary transition-colors">First Name</label>
                  <Input 
                    id="firstName" 
                    {...register("firstName", { required: true })} 
                    placeholder="John" 
                    className="bg-transparent border-0 border-b border-border rounded-none px-0 py-6 focus-visible:ring-0 focus-visible:border-secondary text-lg placeholder:text-muted-foreground/30 transition-colors" 
                  />
                </div>
                <div className="space-y-2 group">
                  <label htmlFor="lastName" className="text-sm font-bold uppercase tracking-wider text-primary group-focus-within:text-secondary transition-colors">Last Name</label>
                  <Input 
                    id="lastName" 
                    {...register("lastName", { required: true })} 
                    placeholder="Doe" 
                    className="bg-transparent border-0 border-b border-border rounded-none px-0 py-6 focus-visible:ring-0 focus-visible:border-secondary text-lg placeholder:text-muted-foreground/30 transition-colors" 
                  />
                </div>
              </div>

              <div className="space-y-2 group">
                <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-primary group-focus-within:text-secondary transition-colors">Email Address</label>
                <Input 
                  id="email" 
                  type="email" 
                  {...register("email", { required: true })} 
                  placeholder="john@example.com" 
                  className="bg-transparent border-0 border-b border-border rounded-none px-0 py-6 focus-visible:ring-0 focus-visible:border-secondary text-lg placeholder:text-muted-foreground/30 transition-colors" 
                />
              </div>

              <div className="space-y-2 group">
                <label htmlFor="subject" className="text-sm font-bold uppercase tracking-wider text-primary group-focus-within:text-secondary transition-colors">Subject</label>
                <Input 
                  id="subject" 
                  {...register("subject", { required: true })} 
                  placeholder="Investment Inquiry" 
                  className="bg-transparent border-0 border-b border-border rounded-none px-0 py-6 focus-visible:ring-0 focus-visible:border-secondary text-lg placeholder:text-muted-foreground/30 transition-colors" 
                />
              </div>

              <div className="space-y-2 group">
                <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-primary group-focus-within:text-secondary transition-colors">Message</label>
                <Textarea 
                  id="message" 
                  {...register("message", { required: true })} 
                  placeholder="Tell us about your investment goals..." 
                  className="min-h-[150px] bg-transparent border-0 border-b border-border rounded-none px-0 py-4 focus-visible:ring-0 focus-visible:border-secondary text-lg placeholder:text-muted-foreground/30 resize-none transition-colors" 
                />
              </div>

              <div className="pt-8">
                <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto bg-primary hover:bg-secondary text-white px-12 py-8 text-lg rounded-none transition-all duration-300 group">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
