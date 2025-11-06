export default function About() {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-16 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#ff7b00] text-sm font-semibold tracking-widest uppercase">About VyomGarud</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Engineering the Future of <span className="text-[#ff7b00]">Autonomous Flight</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-400 leading-relaxed">
              VyomGarud specializes in the design, development, and deployment of cutting-edge unmanned aerial vehicle systems for defense, surveillance, and mission-critical applications.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Our military-grade UAV platforms combine advanced autonomous capabilities with precision engineering, delivering unmatched reliability in the most demanding operational environments.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              With a focus on innovation and performance, we push the boundaries of what's possible in autonomous flight systems.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-gray-800 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-[#ff7b00]/10 border-2 border-[#ff7b00] flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#ff7b00]/20 border border-[#ff7b00] flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#ff7b00]"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Mission-Driven</h3>
                <p className="text-gray-500">Precision. Reliability. Excellence.</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#ff7b00] rounded-full filter blur-[60px] opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#ff7b00] rounded-full filter blur-[60px] opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
