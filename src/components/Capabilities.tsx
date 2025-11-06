import { Shield, Eye, Zap, Radio } from 'lucide-react';

const capabilities = [
  {
    icon: Shield,
    title: 'Tactical Defense Systems',
    description: 'Military-grade UAV platforms designed for strategic defense operations with advanced threat detection and response capabilities.',
    features: ['Real-time threat assessment', 'Secure communications', 'Hardened systems']
  },
  {
    icon: Eye,
    title: 'Surveillance & Reconnaissance',
    description: 'High-resolution imaging and sensor systems for intelligence gathering in complex operational theaters.',
    features: ['Multi-spectral imaging', 'Long-range detection', 'AI-powered analytics']
  },
  {
    icon: Zap,
    title: 'Autonomous Navigation',
    description: 'Next-generation flight control systems enabling fully autonomous operations in GPS-denied environments.',
    features: ['SLAM navigation', 'Obstacle avoidance', 'Precision landing']
  },
  {
    icon: Radio,
    title: 'Command & Control',
    description: 'Robust C2 infrastructure for coordinating multiple UAV assets with enterprise-grade security protocols.',
    features: ['Multi-vehicle control', 'Encrypted datalinks', 'Mission planning']
  }
];

export default function Capabilities() {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-16 bg-gradient-to-b from-[#0a0a0a] to-[#111111]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#ff7b00] text-sm font-semibold tracking-widest uppercase">Our Capabilities</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Advanced UAV <span className="text-[#ff7b00]">Solutions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Comprehensive unmanned systems engineered for mission-critical performance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="group relative bg-[#1a1a1a] border border-gray-800 rounded-xl p-6 hover:border-[#ff7b00] transition-all duration-300 hover:shadow-lg hover:shadow-[#ff7b00]/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff7b00]/0 to-[#ff7b00]/0 group-hover:from-[#ff7b00]/5 group-hover:to-transparent rounded-xl transition-all duration-300"></div>

              <div className="relative">
                <div className="w-14 h-14 rounded-lg bg-[#ff7b00]/10 border border-[#ff7b00]/30 flex items-center justify-center mb-4 group-hover:bg-[#ff7b00]/20 transition-colors">
                  <capability.icon className="w-7 h-7 text-[#ff7b00]" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ff7b00] transition-colors">
                  {capability.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {capability.description}
                </p>

                <ul className="space-y-2">
                  {capability.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                      <div className="w-1 h-1 rounded-full bg-[#ff7b00]"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
