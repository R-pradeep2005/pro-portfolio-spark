
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0.3, 1]);

  return (
    <section ref={ref} id="about" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          style={{ scale: imageScale, opacity: imageOpacity }}
          className="absolute -top-[30%] -right-[10%] w-[40rem] h-[40rem] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"
        />
        <motion.div
          style={{ scale: imageScale, opacity: imageOpacity }}
          className="absolute -bottom-[20%] -left-[10%] w-[30rem] h-[30rem] rounded-full bg-accent/5 dark:bg-accent/10 blur-3xl"
        />
      </div>

      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto lg:mx-0 relative">
              {/* Main image with border and glass effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 blur-xl" />
              
              <div className="absolute inset-0 rounded-2xl glass dark:glass-dark border border-white/20 dark:border-white/10 overflow-hidden p-4">
                {/* Placeholder for actual profile image */}
                <div className="w-full h-full rounded-xl bg-muted/50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-muted-foreground/30">Profile</div>
                    <div className="text-muted-foreground/50 mt-2">Your photo here</div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-lg rotate-12 animate-float"
                style={{ animationDuration: "7s" }}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/10 rounded-full animate-float"
                style={{ animationDuration: "5s", animationDelay: "1s" }}
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute top-1/2 -translate-y-1/2 -left-8 w-4 h-32 bg-gradient-to-t from-primary/40 to-accent/40 rounded-full blur-sm"
              />
            </div>
          </motion.div>

          {/* Content Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-2">
                About <span className="text-gradient">Me</span>
              </h2>
              <div className="h-1 w-20 bg-primary/30 rounded-full mb-6"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-lg text-muted-foreground">
                Hello! I'm <span className="text-foreground font-medium">Alex Chen</span>, a passionate UI/UX designer and developer with over 8 years of experience crafting digital experiences that delight users and achieve business goals.
              </p>
              <p className="text-lg text-muted-foreground">
                My approach combines aesthetic sensibility with human-centered design principles. I believe the best digital products emerge when creativity meets analytical thinking—finding that sweet spot between beautiful interfaces and functional, intuitive experiences.
              </p>
              <p className="text-lg text-muted-foreground">
                When I'm not designing, you'll find me exploring new design trends, contributing to open-source projects, or hiking with my dog in the Pacific Northwest.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="pt-4 space-y-2"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="font-medium">Based in San Francisco, California</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="font-medium">Master's in Human-Computer Interaction</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="font-medium">Previously at Google, Airbnb, and Shopify</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <Button
                size="lg"
                className="group rounded-full"
              >
                <span>Download Resume</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
