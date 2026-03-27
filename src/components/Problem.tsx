import { AlertCircle, Code2, FileQuestion, GitBranch } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Problem() {
  const problems = [
    {
      icon: Code2,
      title: "Generic, Not Specific",
      description: "AI agents have vast general knowledge but don't understand your architecture, conventions, or domain logic."
    },
    {
      icon: FileQuestion,
      title: "Missing Context",
      description: "The knowledge agents need isn't just in code  it's in Confluence, Slack, postmortems, and tribal knowledge."
    },
    {
      icon: GitBranch,
      title: "Doesn't Fit Your Codebase",
      description: "AI produces code that 'works' but violates your unwritten conventions and misunderstands business rules."
    },
    {
      icon: AlertCircle,
      title: "Manual Review Overhead",
      description: "Teams waste hours reviewing and correcting AI-generated code that doesn't align with codebase standards."
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
          className="max-w-2xl mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            AI Agents Are Powerful, But Blind to Your Codebase
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Current AI coding tools produce code that works in isolation but fails to understand the specific patterns, conventions, and domain knowledge that make your codebase unique.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <problem.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
