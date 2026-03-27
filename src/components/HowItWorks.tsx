import { BookOpen, Brain, Plug, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    {
      icon: Plug,
      title: "Connect Your Sources",
      description: "Link your GitHub repo and documentation sources like Confluence. One-time OAuth setup, secure read-only access."
    },
    {
      icon: Brain,
      title: "Auto-Generate Knowledge",
      description: "Our system analyzes your code structure, extracts conventions, and ingests domain knowledge from your docs to create structured rules, commands, and skills."
    },
    {
      icon: RefreshCw,
      title: "Stay in Sync",
      description: "Every push to main triggers incremental updates. Your knowledge layer stays current with your codebase  no manual maintenance required."
    },
    {
      icon: BookOpen,
      title: "Connect Any AI Client",
      description: "Get a single MCP endpoint. Connect it to Claude Code, Cursor, or any MCP-compatible tool. Your agents instantly understand your codebase."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            From Repo to Production-Ready Context in Minutes
          </h2>
          <p className="text-xl text-gray-600">
            No complex setup. No manual maintenance. Just better AI agents.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gray-200 -ml-4" style={{ width: 'calc(100% - 3rem)' }}></div>
              )}

              <div className="relative bg-white">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/30">
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                <div className="absolute -top-2 -left-2 w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center border-2 border-blue-600 font-bold text-blue-600 text-sm">
                  {index + 1}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
