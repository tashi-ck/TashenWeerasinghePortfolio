import React, { useState } from 'react';
import { MailIcon, PhoneIcon, LinkedinIcon, GithubIcon } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:8080/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Message sent successfully!'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        setSubmitStatus({
          success: false,
          message: errorData.message || 'Failed to send message'
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Network error. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800 rounded-xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 bg-blue-600 text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MailIcon size={20} className="mr-4" />
                  <div>
                    <p className="text-sm text-blue-200">Email</p>
                    <a href="mailto:chamikatashen33@gmail.com" className="hover:underline">
                      chamikatashen33@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <PhoneIcon size={20} className="mr-4" />
                  <div>
                    <p className="text-sm text-blue-200">Phone</p>
                    <a href="tel:+94773363109" className="hover:underline">
                      +94 773 363 109
                    </a>
                  </div>
                </div>
                <div className="pt-6">
                  <p className="mb-4 text-sm text-blue-200">Connect with me</p>
                  <div className="flex space-x-4">
                    <a
                      href="https://linkedin.com/in/tashen-weerasinghe-6711aa347"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-blue-600 p-2 rounded-full hover:bg-blue-100 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon size={20} />
                    </a>
                    <a
                      href="https://github.com/tashi-ck"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-blue-600 p-2 rounded-full hover:bg-blue-100 transition-colors"
                      aria-label="GitHub"
                    >
                      <GithubIcon size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
              {submitStatus && (
                <div
                  className={`mb-4 p-3 rounded-md ${
                    submitStatus.success
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;