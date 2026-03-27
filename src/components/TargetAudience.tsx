import { Building2, Users, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TargetAudience() {
  const audiences = [
    {
      icon: Building2,
      title: "Engineering Leaders",
      role: "VPs & Engineering Managers",
      description: "You've adopted AI coding tools but agents keep producing code that doesn't fit your codebase. You need measurable productivity gains, not more review overhead."
    },
    {
      icon: Users,
      title: "Development Teams",
      role: "10-50 Engineers",
      description: "You have a complex codebase with specific patterns and conventions. You want AI agents to understand your domain, not just generic programming."
    },
    {
      icon: Wrench,
      title: "Senior Engineers",
      role: "Technical Leads",
      description: "You're tired of babysitting AI output. You want agents that respect your architecture decisions and understand why code is structured the way it is."
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
            Built for Teams That Demand More
          </h2>
          <p className="text-xl text-gray-600">
            If you're using AI coding tools and frustrated they don't understand your codebase, RepoContext is for you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <audience.icon className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {audience.title}
              </h3>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4">
                {audience.role}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {audience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
