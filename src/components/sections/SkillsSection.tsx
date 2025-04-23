
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Skill data
const skillCategories = [
  {
    id: "design",
    name: "Design",
    skills: [
      { name: "UI Design", level: 95 },
      { name: "UX Research", level: 85 },
      { name: "Interaction Design", level: 90 },
      { name: "Information Architecture", level: 80 },
      { name: "Wireframing", level: 95 },
      { name: "Prototyping", level: 90 },
      { name: "Design Systems", level: 85 },
    ],
  },
  {
    id: "tools",
    name: "Tools",
    skills: [
      { name: "Figma", level: 95 },
      { name: "Adobe XD", level: 90 },
      { name: "Sketch", level: 85 },
      { name: "Photoshop", level: 80 },
      { name: "Illustrator", level: 75 },
      { name: "InVision", level: 85 },
      { name: "Principle", level: 80 },
    ],
  },
  {
    id: "development",
    name: "Development",
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "Tailwind CSS", level: 85 },
      { name: "TypeScript", level: 75 },
      { name: "Responsive Design", level: 95 },
      { name: "Version Control", level: 80 },
    ],
  },
  {
    id: "soft",
    name: "Soft Skills",
    skills: [
      { name: "Communication", level: 95 },
      { name: "Collaboration", level: 90 },
      { name: "Problem Solving", level: 95 },
      { name: "Time Management", level: 85 },
      { name: "Adaptability", level: 90 },
      { name: "Client Relations", level: 85 },
      { name: "Project Management", level: 80 },
    ],
  },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("design");

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  return (
    <motion.section
      id="skills"
      className="section-padding"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
    >
      <div className="container max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } }
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 25 },
              show: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              My <span className="text-gradient">Skills</span>
            </h2>
          </motion.div>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 35 },
              show: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.57, delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            A comprehensive overview of my expertise across design, tools, development, and soft skills.
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.18, type: "spring" }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 2px 18px rgba(126,105,171,0.12)",
                backgroundColor: "rgba(155,135,245,0.11)",
                color: "#9b87f5"
              }}
              transition={{ type: "spring", stiffness: 320 }}
              className={cn(
                "py-2 px-6 rounded-full transition-all duration-300 text-sm font-medium relative",
                activeCategory === category.id
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {activeCategory === category.id && (
                <motion.span
                  layoutId="categoryIndicator"
                  className="absolute inset-0 bg-primary rounded-full -z-10"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Display with grid bounce */}
        <div className="relative">
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              className={cn(
                "w-full",
                activeCategory === category.id ? "block" : "hidden"
              )}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, type: "spring", bounce: 0.09 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.07 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-medium">{skill.name}</h3>
                      <motion.span
                        initial={{ opacity: 0, x: 15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.38, delay: 0.02 * index }}
                        className="text-muted-foreground"
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.1, delay: index * 0.09 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info with fade in-up */}
        <motion.div
          initial={{ opacity: 0, y: 21 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.49, delay: 0.38 }}
          viewport={{ once: true }}
          className="mt-16 p-6 rounded-xl bg-secondary/50 dark:bg-secondary/20 border border-border/50"
        >
          <motion.h3
            initial={{ opacity: 0, x: -17 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.09 }}
            className="text-xl font-medium mb-4"
          >
            Continuous Learning
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.13 }}
            className="text-muted-foreground"
          >
            I'm constantly expanding my skillset through courses, workshops, and hands-on projects. Currently learning: Motion Design, 3D Modeling, and Advanced Animation Techniques.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};
