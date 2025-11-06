import { Shield, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-900 py-12 px-6 sm:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-[#ff7b00]" />
              <span className="text-2xl font-bold">
                <span className="text-white">Vyom</span>
                <span className="text-[#ff7b00]">Garud</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Engineering the future of autonomous flight with military-grade precision and reliability. Trusted by defense organizations worldwide.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-gray-800 flex items-center justify-center hover:border-[#ff7b00] hover:bg-[#ff7b00]/10 transition-all"
              >
                <Github className="w-5 h-5 text-gray-400 hover:text-[#ff7b00]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-gray-800 flex items-center justify-center hover:border-[#ff7b00] hover:bg-[#ff7b00]/10 transition-all"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-[#ff7b00]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-gray-800 flex items-center justify-center hover:border-[#ff7b00] hover:bg-[#ff7b00]/10 transition-all"
              >
                <Twitter className="w-5 h-5 text-gray-400 hover:text-[#ff7b00]" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#ff7b00] transition-colors">
                  Defense Systems
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#ff7b00] transition-colors">
                  Surveillance
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#ff7b00] transition-colors">
                  Autonomous Navigation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#ff7b00] transition-colors">
                  Command & Control
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#ff7b00] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#ff7b00] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#ff7b00] transition-colors">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#ff7b00] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-900 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2024 VyomGarud. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-[#ff7b00] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-[#ff7b00] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-[#ff7b00] transition-colors">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
