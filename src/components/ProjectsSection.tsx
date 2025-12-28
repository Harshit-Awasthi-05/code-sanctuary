import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Algorithm Visualizer",
    description: "Interactive visualization of sorting and pathfinding algorithms with step-by-step animation.",
    tech: ["C++", "React", "TypeScript"],
    github: "#",
    demo: "#",
  },
  {
    title: "Real-time Chat App",
    description: "Scalable messaging platform with WebSocket connections and end-to-end encryption.",
    tech: ["Java", "Spring Boot", "React"],
    github: "#",
    demo: "#",
  },
  {
    title: "DSA Practice Tracker",
    description: "Personal tool to track coding problems solved with spaced repetition reminders.",
    tech: ["TypeScript", "React", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            <span className="syntax-comment">// </span>
            <span className="syntax-variable">Projects</span>
          </h2>
          <p className="text-muted-foreground mb-12">
            A collection of things I've built
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="code-window h-full flex flex-col">
                {/* Window Chrome */}
                <div className="flex items-center gap-2 px-3 py-2 bg-secondary/50 border-b border-editor-border">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500/60" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                    <div className="w-2 h-2 rounded-full bg-green-500/60" />
                  </div>
                  <span className="text-xs text-muted-foreground ml-2">
                    {project.title.toLowerCase().replace(/\s/g, "_")}.ts
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded bg-accent text-accent-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
