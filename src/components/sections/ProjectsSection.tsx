
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, X } from "lucide-react";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Mobile Banking App Redesign",
    description:
      "A comprehensive redesign of a mobile banking application focusing on improved user experience and accessibility.",
    tags: ["UX Design", "UI Design", "Mobile App"],
    imageUrl: "/placeholder.svg", // Using placeholder image
    category: "mobile",
    full_description: "This project involved a complete overhaul of the client's mobile banking application. The goal was to simplify the user journey, improve accessibility features, and introduce a modern visual design that aligned with the brand's new direction. Through extensive user research and iterative testing, we created an intuitive interface that received overwhelmingly positive feedback during beta testing. The new design resulted in a 35% increase in daily active users and a 28% reduction in support tickets related to usability issues.",
    challenges: "The main challenge was balancing feature-rich functionality with a clean, uncluttered interface. We also had to ensure all security requirements were met while maintaining a smooth user experience."
  },
  {
    id: 2,
    title: "E-Commerce Website Revamp",
    description:
      "Revitalized an outdated e-commerce platform with modern design patterns and optimized checkout flow.",
    tags: ["Web Design", "UI/UX", "E-commerce"],
    imageUrl: "/placeholder.svg", // Using placeholder image
    category: "web",
    full_description: "For this e-commerce client, we completely reimagined their online shopping experience. The previous website suffered from high cart abandonment rates and poor mobile performance. Our solution focused on creating a responsive, visually appealing interface with an optimized checkout process. We implemented advanced filtering options, improved product categorization, and enhanced product photography guidelines. The redesign was data-driven, informed by heat maps, user recordings, and extensive A/B testing.",
    challenges: "Implementing a complex filtering system that remained intuitive while handling thousands of SKUs across multiple categories was particularly challenging."
  },
  {
    id: 3,
    title: "Healthcare Management Dashboard",
    description:
      "Designed a comprehensive dashboard for healthcare professionals to monitor patient data and manage schedules.",
    tags: ["Dashboard Design", "Healthcare", "Data Visualization"],
    imageUrl: "/placeholder.svg", // Using placeholder image
    category: "dashboard",
    full_description: "This healthcare dashboard project focused on presenting complex medical data in an accessible way for busy healthcare professionals. We created a modular interface that prioritizes critical patient information while providing deeper analysis options when needed. The design incorporates clear data visualization components, customizable views per user role, and an intelligent notification system. We worked closely with medical professionals throughout the design process to ensure the final product enhanced their workflow instead of complicating it.",
    challenges: "Presenting complex medical data in an easily digestible format while ensuring the dashboard remained HIPAA compliant was our primary challenge. We also needed to design for various screen sizes used in clinical settings."
  },
  {
    id: 4,
    title: "Fitness Tracking App",
    description:
      "Created an intuitive fitness application with personalized workout plans and progress tracking features.",
    tags: ["Mobile App", "UI Design", "Fitness"],
    imageUrl: "/placeholder.svg", // Using placeholder image
    category: "mobile",
    full_description: "The fitness tracking app was designed to stand out in a crowded market by offering superior visual feedback and personalized motivation. We created a system of micro-animations that celebrate user achievements, custom illustration sets for different workout types, and an adaptive interface that adjusts based on user behavior. The app includes social features for community support, integration with wearable devices, and personalized insights based on user data.",
    challenges: "Designing for the wide variety of potential users—from beginners to professional athletes—required careful consideration of progressive disclosure principles and adaptive interfaces."
  },
  {
    id: 5,
    title: "Music Streaming Platform",
    description:
      "Designed a sleek music streaming interface with personalized recommendations and social features.",
    tags: ["Web App", "UI/UX", "Entertainment"],
    imageUrl: "/placeholder.svg", // Using placeholder image
    category: "web",
    full_description: "For this music streaming platform, we focused on creating an immersive listening experience that encourages music discovery. The design features dynamic color themes based on album artwork, fluid transitions between screens, and a unique visualization system that responds to the audio being played. We implemented a discovery algorithm that presents new artists and tracks based on listening habits without disrupting the core experience. The platform includes robust playlist creation tools and seamless social sharing options.",
    challenges: "Balancing feature richness with simplicity was challenging, as was creating a coherent experience across mobile, desktop, and TV interfaces."
  },
  {
    id: 6,
    title: "Smart Home Control System",
    description:
      "Designed a unified interface for controlling various smart home devices with intuitive automations.",
    tags: ["IoT", "Interface Design", "Smart Home"],
    imageUrl: "/placeholder.svg", // Using placeholder image
    category: "other",
    full_description: "This smart home interface project aimed to unify control of multiple device ecosystems into a single, coherent experience. We created an adaptive dashboard that shows the most relevant controls based on time of day, usage patterns, and device status. The system features an innovative scene creation tool that allows users to combine multiple device actions with simple triggers. The interface scales smoothly from mobile to tablet to wall-mounted displays, with appropriate interaction patterns for each context.",
    challenges: "Creating a unified design language that works across dozens of different device types, each with their own unique controls and status indicators, required extensive prototyping and testing."
  },
];

// Filter categories
const categories = [
  { id: "all", name: "All Projects" },
  { id: "web", name: "Web Design" },
  { id: "mobile", name: "Mobile Apps" },
  { id: "dashboard", name: "Dashboards" },
  { id: "other", name: "Other" },
];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const handleProjectClick = (id: number) => {
    setSelectedProject(id);
    document.body.style.overflow = "hidden";
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const currentProject = selectedProject !== null
    ? projects.find(p => p.id === selectedProject)
    : null;

  return (
    <section id="projects" className="bg-secondary/20 dark:bg-secondary/10 section-padding">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Explore my recent design work—each project showcases my approach to solving complex user experience challenges.
          </motion.p>
        </div>

        {/* Filter Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              className={`rounded-full ${
                activeCategory === category.id
                  ? ""
                  : "hover:bg-primary/5"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <Card 
                className="overflow-hidden hover-scale bg-card/50 backdrop-blur-sm border border-border/50 h-full flex flex-col"
                onClick={() => handleProjectClick(project.id)}
              >
                <div className="aspect-video overflow-hidden bg-muted/50">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2 pt-0">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="font-normal">
                      {tag}
                    </Badge>
                  ))}
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button
                    variant="ghost"
                    className="ml-auto text-primary hover:text-primary group"
                    size="sm"
                  >
                    <span className="mr-1">View Project</span>
                    <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-background border border-border rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            >
              {currentProject && (
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-4 rounded-full z-10 bg-background/70 backdrop-blur-sm"
                    onClick={closeProjectModal}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                  
                  <div className="aspect-video w-full bg-muted">
                    <img
                      src={currentProject.imageUrl}
                      alt={currentProject.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-display font-bold mb-2">
                      {currentProject.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {currentProject.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium text-lg mb-2">Overview</h4>
                        <p className="text-muted-foreground">
                          {currentProject.full_description}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-lg mb-2">Challenges</h4>
                        <p className="text-muted-foreground">
                          {currentProject.challenges}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};
