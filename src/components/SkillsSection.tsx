import { motion } from "framer-motion";

const skillCategories = [
  {
    name: "Languages",
    filename: "languages.h",
    skills: [
      { name: "C++", level: "advanced" },
      { name: "Java", level: "advanced" },
      { name: "JavaScript", level: "intermediate" },
      { name: "TypeScript", level: "intermediate" },
      { name: "Python", level: "intermediate" },
    ],
  },
  {
    name: "Frontend",
    filename: "frontend.tsx",
    skills: [
      { name: "React", level: "advanced" },
      { name: "HTML/CSS", level: "advanced" },
      { name: "Tailwind CSS", level: "intermediate" },
      { name: "Framer Motion", level: "intermediate" },
    ],
  },
  {
    name: "Core CS",
    filename: "fundamentals.cpp",
    skills: [
      { name: "Data Structures", level: "advanced" },
      { name: "Algorithms", level: "advanced" },
      { name: "OOP", level: "advanced" },
      { name: "System Design", level: "intermediate" },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-secondary/20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            <span className="syntax-comment">// </span>
            <span className="syntax-variable">Skills</span>
          </h2>
          <p className="text-muted-foreground mb-12">
            Technologies and concepts I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="code-window h-full">
                {/* Window Chrome */}
                <div className="flex items-center gap-2 px-3 py-2 bg-secondary/50 border-b border-editor-border">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500/60" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                    <div className="w-2 h-2 rounded-full bg-green-500/60" />
                  </div>
                  <span className="text-xs text-muted-foreground ml-2">
                    {category.filename}
                  </span>
                </div>

                {/* Code Content */}
                <div className="p-5 font-mono text-sm">
                  <div className="syntax-comment mb-3">
                    {"// " + category.name}
                  </div>
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="flex items-center">
                        <span className="syntax-keyword">const</span>
                        <span className="syntax-variable ml-2">{skill.name.replace(/[^a-zA-Z]/g, "")}</span>
                        <span className="syntax-operator mx-1">:</span>
                        <span className="syntax-type">{skill.level}</span>
                        <span className="syntax-operator">;</span>
                      </div>
                    ))}
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

export default SkillsSection;
