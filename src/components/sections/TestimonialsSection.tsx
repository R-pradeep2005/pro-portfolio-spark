
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Testimonial data
const testimonials = [
  {
    id: 1,
    content:
      "Alex transformed our product with a design that perfectly balances aesthetics and functionality. The user feedback has been overwhelmingly positive, and our conversion rates have increased significantly.",
    author: "Sarah Johnson",
    position: "Product Manager at TechCorp",
    avatar: "/placeholder.svg",
  },
  {
    id: 2,
    content:
      "Working with this designer was a game-changer for our startup. They quickly understood our vision and translated it into a beautiful, intuitive interface that our users love. Their attention to detail and problem-solving skills are exceptional.",
    author: "Michael Chen",
    position: "CEO of LaunchPad",
    avatar: "/placeholder.svg",
  },
  {
    id: 3,
    content:
      "The redesign of our e-commerce platform was flawless. The designer brought fresh ideas while maintaining our brand identity. The new UI not only looks great but has significantly improved our user engagement metrics.",
    author: "Emma Rodriguez",
    position: "Marketing Director at StyleShop",
    avatar: "/placeholder.svg",
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="bg-secondary/20 dark:bg-secondary/10 section-padding">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 18 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.64 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Client <span className="text-gradient">Testimonials</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.52, delay: 0.09 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Here's what clients have to say about working with me on their projects.
          </motion.p>
        </div>

        {/* Testimonials Carousel with animated presence */}
        <div className="relative bg-background/50 dark:bg-background/20 rounded-2xl backdrop-blur-sm p-8 md:p-12 border border-border/50 max-w-4xl mx-auto">
          {/* Quote icon */}
          <motion.div
            className="absolute -top-6 left-6"
            initial={{ scale: 0, rotate: -45 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.34 }}
            viewport={{ once: true }}
          >
            <div className="bg-primary rounded-full p-2 shadow-lg">
              <Quote className="h-6 w-6 text-primary-foreground" />
            </div>
          </motion.div>

          <div className="relative overflow-hidden">
            <div className="relative min-h-[320px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonials[currentIndex].id}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -50, scale: 1.08 }}
                  transition={{ duration: 0.7, type: "spring" }}
                  className="w-full"
                >
                  <blockquote>
                    <p className="text-xl md:text-2xl leading-relaxed mb-8">
                      "{testimonials[currentIndex].content}"
                    </p>
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.46, delay: 0.17 }}
                      className="flex items-center"
                    >
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-muted">
                        <img
                          src={testimonials[currentIndex].avatar}
                          alt={testimonials[currentIndex].author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <cite className="font-medium text-foreground not-italic">
                          {testimonials[currentIndex].author}
                        </cite>
                        <p className="text-sm text-muted-foreground">
                          {testimonials[currentIndex].position}
                        </p>
                      </div>
                    </motion.div>
                  </blockquote>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation with hover/press animation */}
          <div className="flex justify-center mt-8 gap-4">
            <motion.div whileTap={{ scale: 0.92 }} whileHover={{ scale: 1.06 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full hover:bg-primary/10 hover:text-primary"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </motion.div>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  whileHover={{ scale: 1.24 }}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-300",
                    currentIndex === index
                      ? "bg-primary w-5"
                      : "bg-primary/30 hover:bg-primary/50"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <motion.div whileTap={{ scale: 0.92 }} whileHover={{ scale: 1.06 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full hover:bg-primary/10 hover:text-primary"
                aria-label="Next testimonial"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
