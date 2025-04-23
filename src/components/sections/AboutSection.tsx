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
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.75, type: "spring", bounce: 0.16 }}
      viewport={{ once: true }}
      className="section-padding relative overflow-hidden"
    >
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
          <motion.div
            initial={{ opacity: 0, x: -60, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.74, type: "spring", delay: 0.08 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto lg:mx-0 relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 blur-xl" />
              
              <div className="absolute inset-0 rounded-2xl glass dark:glass-dark border border-white/20 dark:border-white/10 overflow-hidden p-4">
                <div className="w-full h-full rounded-xl bg-muted/50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-muted-foreground/30">Profile</div>
                    <div className="text-muted-foreground/50 mt-2">Your photo here</div>
                  </div>
                </div>
              </div>

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

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.09, delayChildren: 0.26 }
              }
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 32 },
                show: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.48, type: "spring" }}
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-2">
                About <span className="text-gradient">Me</span>
              </h2>
              <motion.div
                className="h-1 w-20 bg-primary/30 rounded-full mb-6"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.55, delay: 0.12, type: "spring" }}
                style={{ originX: 0 }}
              />
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5, delay: 0.16, type: "spring" }}
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
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
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
              variants={{
                hidden: { opacity: 0, scale: 0.93 },
                show: { opacity: 1, scale: 1 }
              }}
              transition={{ duration: 0.47, delay: 0.3, type: "spring", bounce: 0.2 }}
              className="pt-4"
            >
              <motion.div whileHover={{ scale: 1.06, boxShadow: "0 2px 32px rgba(155, 135, 245, 0.14)" }}>
                <Button size="lg" className="group rounded-full">
                  <span>Download Resume</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
