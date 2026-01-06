import { useState } from 'react';
import { Mail, MapPin, Linkedin, Send, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([formData]);

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className={`py-20 px-4 ${darkMode ? 'bg-gray-900' : 'bg-[#FFF5ED]'}`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-4 text-center ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Get in <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>Touch</span>
        </h2>
        <p className={`text-center mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Feel free to reach out for collaborations or just a friendly chat
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className={`text-xl font-semibold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Contact Information
            </h3>

            <div className="space-y-4">
              <a
                href="mailto:vu4f2324045@pvppcoe.ac.in"
                className={`flex items-start gap-4 p-4 rounded-lg transition-all ${
                  darkMode
                    ? 'bg-gray-800 hover:bg-gray-750'
                    : 'bg-[#FFECD9] hover:bg-[#FFE0CC]'
                }`}
              >
                <div className={`p-3 rounded-lg ${
                  darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'
                }`}>
                  <Mail size={20} />
                </div>
                <div>
                  <p className={`font-medium mb-1 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Email
                  </p>
                  <p className={`text-sm ${
                    darkMode ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    vu4f2324045@pvppcoe.ac.in
                  </p>
                </div>
              </a>

              <div className={`flex items-start gap-4 p-4 rounded-lg ${
                darkMode ? 'bg-gray-800' : 'bg-[#FFECD9]'
              }`}>
                <div className={`p-3 rounded-lg ${
                  darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'
                }`}>
                  <MapPin size={20} />
                </div>
                <div>
                  <p className={`font-medium mb-1 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Location
                  </p>
                  <p className={`text-sm ${
                    darkMode ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    Kalyan Rural, Maharashtra, India
                  </p>
                </div>
              </div>

              <a
                href="https://linkedin.com/in/tanmay-shete-249461321"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-start gap-4 p-4 rounded-lg transition-all ${
                  darkMode
                    ? 'bg-gray-800 hover:bg-gray-750'
                    : 'bg-[#FFECD9] hover:bg-[#FFE0CC]'
                }`}
              >
                <div className={`p-3 rounded-lg ${
                  darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'
                }`}>
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className={`font-medium mb-1 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    LinkedIn
                  </p>
                  <p className={`text-sm ${
                    darkMode ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    Connect with me
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div>
            <h3 className={`text-xl font-semibold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Send a Message
            </h3>

            {status === 'success' && (
              <div className={`mb-4 p-4 rounded-lg flex items-center gap-2 ${
                darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-700'
              }`}>
                <CheckCircle size={20} />
                <span>Message sent successfully!</span>
              </div>
            )}

            {status === 'error' && (
              <div className={`mb-4 p-4 rounded-lg ${
                darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-700'
              }`}>
                Failed to send message. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className={`block mb-2 font-medium ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    darkMode
                      ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500'
                      : 'bg-white border-orange-200 text-gray-900 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block mb-2 font-medium ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    darkMode
                      ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500'
                      : 'bg-white border-orange-200 text-gray-900 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block mb-2 font-medium ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none ${
                    darkMode
                      ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500'
                      : 'bg-white border-orange-200 text-gray-900 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                  darkMode
                    ? 'bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-700'
                    : 'bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-400'
                } disabled:cursor-not-allowed transform hover:scale-105 active:scale-95`}
              >
                {status === 'sending' ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
