import { ArrowRight, Mail } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <div className="p-12 sm:p-16">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
                Join the Beta
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We're working with select engineering teams to validate and refine RepoContext. Limited spots available for Phase 1 beta customers.
              </p>
            </div>

            <form className="max-w-xl mx-auto">
              <div className="space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors text-lg"
                />
                <input
                  type="email"
                  placeholder="Work Email"
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors text-lg"
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors text-lg"
                />
                <select
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors text-lg text-gray-600"
                >
                  <option value="">Team Size</option>
                  <option value="1-10">1-10 engineers</option>
                  <option value="10-50">10-50 engineers</option>
                  <option value="50-200">50-200 engineers</option>
                  <option value="200+">200+ engineers</option>
                </select>
                <textarea
                  placeholder="What AI coding tools does your team use? (Claude Code, Cursor, etc.)"
                  rows={3}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors text-lg resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30 text-lg"
              >
                Reserve Spot
                <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-sm text-gray-500 text-center mt-4">
                We'll reach out within 48 hours to schedule a demo
              </p>
            </form>
          </div>

          <div className="bg-gray-50 px-12 py-8 border-t border-gray-200">
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Mail className="w-5 h-5" />
              <span className="text-sm">
                Questions? Email us at <a href="mailto:sales@brilworks.com" className="text-blue-600 font-semibold hover:underline">sales@brilworks.com</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
