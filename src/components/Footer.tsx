

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <img src="/favicon.png" alt="Brilworks Logo" className="w-8 h-8 rounded-lg" />
            <span className="text-xl font-bold text-gray-900">Brilworks</span>
          </div>
          
          <p className="text-gray-600 max-w-md leading-relaxed text-center md:text-left">
            Bespoke AI solutions that multiply your development speed, maximize efficiency, and guarantee pinpoint accuracy.
          </p>
        </div>
      </div>
    </footer>
  );
}
