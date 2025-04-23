
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative w-full min-h-screen overflow-hidden flex items-center pt-20"
    >
      {/* Background Elements - Decorative circles and shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large circle */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute top-0 -right-[10%] w-[35rem] h-[35rem] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"
        />
        {/* Medium circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute top-[30%] -left-[10%] w-[20rem] h-[20rem] rounded-full bg-accent/5 dark:bg-accent/10 blur-3xl"
        />
        {/* Small circle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute bottom-[10%] right-[15%] w-[10rem] h-[10rem] rounded-full bg-primary/5 dark:bg-primary/10 blur-2xl"
        />

        {/* Grid overlay for texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      {/* Content Container */}
      <div className="container max-w-7xl mx-auto px-6 z-10 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            style={{ y: textY, opacity: opacityText }}
            className="space-y-8"
          >
            {/* Eyebrow text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block bg-secondary/50 dark:bg-secondary/30 px-4 py-2 rounded-full text-sm font-medium text-primary mb-4">
                UI/UX Designer & Developer
              </div>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight"
            >
              Creating <span className="text-gradient">digital</span> experiences that <span className="text-gradient">inspire</span>
            </motion.h1>

            {/* Description text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-lg"
            >
              I design and develop beautiful, functional interfaces that connect with users on a deeper level, blending aesthetics with intuitive user experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="rounded-full text-primary-foreground group"
              >
                <span>View Projects</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-primary/20 hover:bg-primary/5"
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-lg aspect-square">
              {/* Decorative elements behind the image */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/10 blur-xl animate-pulse-gentle" />
              
              {/* Main image container with border and glass effect */}
              <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-white/80 to-white/50 dark:from-black/30 dark:to-black/10 backdrop-blur-sm border border-white/50 dark:border-white/10 shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%)] animate-[shine_5s_ease-in-out_infinite]"></div>
                
                {/* This would typically be an actual image, using a placeholder for now */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-primary to-accent/80 flex items-center justify-center mb-4">
                      <span className="text-5xl font-bold text-white">UX</span>
                    </div>
                    <div className="font-display font-semibold text-lg text-center">Your Portfolio Illustration</div>
                  </div>
                </div>
              </div>

              {/* Floating shapes around the main image */}
              <motion.div
                initial={{ x: -30, y: -30, opacity: 0 }}
                animate={{ x: -50, y: -50, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="absolute top-10 left-10 w-16 h-16 rounded-lg bg-gradient-to-tr from-primary to-accent rotate-12 shadow-lg animate-float"
              />
              <motion.div
                initial={{ x: 30, y: 30, opacity: 0 }}
                animate={{ x: 50, y: 50, opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="absolute bottom-10 right-10 w-12 h-12 rounded-full bg-gradient-to-tr from-accent to-primary shadow-lg animate-float"
                style={{ animationDelay: "1s" }}
              />
              <motion.div
                initial={{ x: 30, y: -30, opacity: 0 }}
                animate={{ x: 60, y: -40, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute top-20 right-20 w-8 h-8 rounded-md bg-gradient-to-tr from-primary/80 to-accent/80 rotate-45 shadow-lg animate-float"
                style={{ animationDelay: "1.5s" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1.5 h-1.5 rounded-full bg-primary mt-1"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
