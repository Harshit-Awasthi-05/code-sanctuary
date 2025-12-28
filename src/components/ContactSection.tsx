import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com",
    handle: "@harshitawasthi",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com",
    handle: "/in/harshitawasthi",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:harshit@example.com",
    handle: "harshit@example.com",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com",
    handle: "@harshitawasthi",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            <span className="syntax-comment">// </span>
            <span className="syntax-variable">Contact</span>
          </h2>
          <p className="text-muted-foreground mb-12">
            Let's connect
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="code-window">
            {/* Window Chrome */}
            <div className="flex items-center gap-2 px-3 py-2 bg-secondary/50 border-b border-editor-border">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-red-500/60" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                <div className="w-2 h-2 rounded-full bg-green-500/60" />
              </div>
              <span className="text-xs text-muted-foreground ml-2">
                contact.sh
              </span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm space-y-3">
              <div className="syntax-comment"># Social links</div>
              <div className="syntax-keyword">$ git remote -v</div>
              
              <div className="mt-4 space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 py-2 px-3 -mx-3 rounded-lg hover:bg-accent/50 transition-colors group"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                    <div className="flex-1">
                      <span className="syntax-type">{link.name}</span>
                      <span className="syntax-operator mx-2">→</span>
                      <span className="syntax-string">{link.handle}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 text-sm text-muted-foreground"
        >
          <span className="syntax-comment">
            {"/* Built with React & Framer Motion */"}
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
