import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const codeLines = [
  { type: "keyword", content: "class" },
  { type: "space", content: " " },
  { type: "type", content: "HarshitAwasthi" },
  { type: "space", content: " " },
  { type: "operator", content: "{" },
  { type: "newline", content: "\n" },
  { type: "keyword", content: "public" },
  { type: "operator", content: ":" },
  { type: "newline", content: "\n" },
  { type: "space", content: "    " },
  { type: "type", content: "string" },
  { type: "space", content: " " },
  { type: "variable", content: "name" },
  { type: "space", content: "  " },
  { type: "operator", content: "=" },
  { type: "space", content: " " },
  { type: "string", content: '"Hi, I\'m Harshit Awasthi"' },
  { type: "operator", content: ";" },
  { type: "newline", content: "\n" },
  { type: "space", content: "    " },
  { type: "type", content: "string" },
  { type: "space", content: " " },
  { type: "variable", content: "skills" },
  { type: "space", content: " " },
  { type: "operator", content: "=" },
  { type: "space", content: " " },
  { type: "string", content: '"C++ | Java | DSA | React"' },
  { type: "operator", content: ";" },
  { type: "newline", content: "\n" },
  { type: "operator", content: "};" },
];

const HeroSection = () => {
  const [displayedTokens, setDisplayedTokens] = useState<number>(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (displayedTokens < codeLines.length) {
      const token = codeLines[displayedTokens];
      const delay = token.type === "newline" ? 200 : token.type === "space" ? 30 : 80;
      
      const timeout = setTimeout(() => {
        setDisplayedTokens((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [displayedTokens]);

  const getTokenClass = (type: string) => {
    switch (type) {
      case "keyword":
        return "syntax-keyword";
      case "string":
        return "syntax-string";
      case "type":
        return "syntax-type";
      case "comment":
        return "syntax-comment";
      case "variable":
        return "syntax-variable";
      case "operator":
        return "syntax-operator";
      default:
        return "";
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-2xl"
      >
        {/* Code Editor Window */}
        <div className="code-window">
          {/* Window Chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-editor-border">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex-1 flex justify-center">
              <span className="text-xs text-muted-foreground px-3 py-1 bg-editor rounded">
                harshit_awasthi.cpp
              </span>
            </div>
            <div className="w-12" /> {/* Spacer for centering */}
          </div>

          {/* Code Content */}
          <div className="p-6 font-mono text-sm md:text-base leading-relaxed">
            <pre className="whitespace-pre-wrap">
              <code>
                {codeLines.slice(0, displayedTokens).map((token, index) => (
                  <span key={index} className={getTokenClass(token.type)}>
                    {token.content}
                  </span>
                ))}
                {/* Blinking cursor */}
                <span
                  className={`inline-block w-2 h-5 bg-foreground align-middle ml-0.5 ${
                    isTypingComplete ? "animate-blink" : ""
                  }`}
                />
              </code>
            </pre>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isTypingComplete ? 1 : 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center mt-12"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-muted-foreground text-sm"
          >
            <span className="block text-center mb-2">scroll</span>
            <svg
              className="w-5 h-5 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
