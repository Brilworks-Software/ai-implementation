import { Database, FileText, GitBranch, Lock, RefreshCw, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Features() {
  const features = [
    {
      icon: GitBranch,
      title: "Tool-Agnostic",
      description: "Works with Claude Code, Cursor, Codex, and any MCP-compatible AI coding tool. No vendor lock-in."
    },
    {
      icon: FileText,
      title: "Human Knowledge Ingestion",
      description: "Goes beyond code. Ingests Confluence docs, Slack threads, postmortems, and internal documentation."
    },
    {
      icon: RefreshCw,
      title: "Auto-Updates",
      description: "Incremental extraction on every push to main. Knowledge stays current without manual intervention."
    },
    {
      icon: Search,
      title: "Derivation Trail",
      description: "Every rule, command, and skill shows exactly where it came from  code file, doc, or discussion."
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Read-only GitHub access. Code analyzed and discarded  only knowledge artifacts stored. SOC 2 ready."
    },
    {
      icon: Database,
      title: "MCP Aggregation",
      description: "Connect your existing MCP servers (DB, Sentry, CloudWatch). One endpoint, unified access."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Built for Production Engineering Teams
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to make AI agents understand your codebase like senior engineers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
