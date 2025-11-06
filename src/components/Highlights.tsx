import { Target, Lock, Gauge } from 'lucide-react';

const highlights = [
  {
    icon: Target,
    title: 'Precision Engineering',
    description: 'Millimeter-accurate positioning and control systems for high-stakes operations'
  },
  {
    icon: Lock,
    title: 'Military-Grade Security',
    description: 'End-to-end encrypted communications and tamper-resistant hardware architecture'
  },
  {
    icon: Gauge,
    title: 'Extreme Reliability',
    description: 'Proven performance in the harshest environments with 99.9% operational uptime'
  }
];

export default function Highlights() {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-16 bg-[#111111] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#ff7b00] rounded-full filter blur-[150px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#ff7b00] rounded-full filter blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#ff7b00] text-sm font-semibold tracking-widest uppercase">Why Choose VyomGarud</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Built for <span className="text-[#ff7b00]">Mission Success</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-gray-800 rounded-2xl p-8 h-full hover:border-[#ff7b00] transition-all duration-300 hover:shadow-2xl hover:shadow-[#ff7b00]/10 hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-2xl bg-[#ff7b00]/10 border border-[#ff7b00]/30 flex items-center justify-center mb-6 group-hover:bg-[#ff7b00] group-hover:scale-110 transition-all duration-300">
                    <highlight.icon className="w-10 h-10 text-[#ff7b00] group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#ff7b00] transition-colors">
                    {highlight.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-[#ff7b00]/10 via-[#ff7b00]/5 to-[#ff7b00]/10 border border-[#ff7b00]/20 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Deploy Advanced UAV Systems?
          </h3>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Partner with VyomGarud for cutting-edge autonomous solutions tailored to your operational requirements
          </p>
          <button className="px-8 py-4 bg-[#ff7b00] text-white rounded-lg font-semibold hover:bg-[#ff8c1a] transition-all duration-300 shadow-lg shadow-[#ff7b00]/20 hover:shadow-[#ff7b00]/40 hover:scale-105">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
