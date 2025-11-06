import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 px-6 sm:px-12 lg:px-16 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#ff7b00] text-sm font-semibold tracking-widest uppercase">Get In Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let's Discuss Your <span className="text-[#ff7b00]">Mission</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Contact our team to learn how VyomGarud can support your operational requirements
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#ff7b00] transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#ff7b00] transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-semibold text-gray-300 mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#ff7b00] transition-colors"
                  placeholder="Your Organization"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#ff7b00] transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#ff7b00] text-white rounded-lg font-semibold hover:bg-[#ff8c1a] transition-all duration-300 shadow-lg shadow-[#ff7b00]/20 hover:shadow-[#ff7b00]/40"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6 hover:border-[#ff7b00] transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#ff7b00]/10 border border-[#ff7b00]/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#ff7b00]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-gray-400 text-sm">info@vyomgarud.com</p>
                  <p className="text-gray-400 text-sm">support@vyomgarud.com</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6 hover:border-[#ff7b00] transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#ff7b00]/10 border border-[#ff7b00]/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#ff7b00]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-gray-400 text-sm">+91 8881444693</p>
                  <p className="text-gray-400 text-sm">24/7 Support</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6 hover:border-[#ff7b00] transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#ff7b00]/10 border border-[#ff7b00]/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#ff7b00]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Location</h3>
                  <p className="text-gray-400 text-sm">Defense Technology Park</p>
                  <p className="text-gray-400 text-sm">India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
