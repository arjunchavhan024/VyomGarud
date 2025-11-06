import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff7b00] rounded-full filter blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff7b00] rounded-full filter blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 text-center">
        <div className="mb-6 inline-block">
          <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-[#ff7b00]/30 bg-[#ff7b00]/5 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-[#ff7b00] animate-pulse"></div>
            <span className="text-[#ff7b00] text-sm font-medium tracking-wide">Advanced UAV Systems</span>
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          <span className="text-white">Vyom</span>
          <span className="text-[#ff7b00]">Garud</span>
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-6 max-w-4xl mx-auto font-light">
          Precision-Engineered Autonomous Systems
        </p>

        <p className="text-base sm:text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          Military-grade UAV solutions built for reliability, performance, and mission-critical operations
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group px-8 py-4 bg-[#ff7b00] text-white rounded-lg font-semibold flex items-center gap-2 hover:bg-[#ff8c1a] transition-all duration-300 shadow-lg shadow-[#ff7b00]/20 hover:shadow-[#ff7b00]/40 hover:scale-105">
            Explore Capabilities
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="px-8 py-4 bg-transparent border-2 border-gray-700 text-white rounded-lg font-semibold hover:border-[#ff7b00] hover:bg-[#ff7b00]/10 transition-all duration-300">
            Contact Us
          </button>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-[#ff7b00] mb-2">99.9%</div>
            <div className="text-sm text-gray-500">Mission Success</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-[#ff7b00] mb-2">24/7</div>
            <div className="text-sm text-gray-500">Operations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-[#ff7b00] mb-2">500+</div>
            <div className="text-sm text-gray-500">Deployments</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronRight className="w-6 h-6 text-gray-600 rotate-90" />
      </div>
    </section>
  );
}
