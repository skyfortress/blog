'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: '',
    project: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formSubmit = async (data: { email: string; project: string }) => {
    const googleFormURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc4q8qODOao8sWOjAajJ0m8EveF_dOlKchpTnyMoqddIVoT7Q/formResponse";
    
    const formData = new URLSearchParams();
    formData.append("emailAddress", data.email);
    formData.append("entry.1904325587", data.project);

    await fetch(googleFormURL, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await formSubmit(formData);
      // Show success message
      setIsSubmitted(true);
      // Clear form
      setFormData({ email: '', project: '' });
      // After 5 seconds, hide the success message
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 card-hover overflow-hidden">
      <div className="p-8 lg:p-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-4 shadow-lg">
            <i className="fas fa-rocket text-white text-xl"></i>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Start Your AI Journey</h3>
          <p className="text-gray-600">Tell us about your project and we&apos;ll get back to you within 24 hours</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-gray-800 font-semibold text-sm uppercase tracking-wide">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:bg-white transition-all duration-300 text-gray-900 placeholder-gray-500"
                required
                placeholder="your.email@example.com"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                <i className="fas fa-envelope text-gray-400"></i>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-gray-800 font-semibold text-sm uppercase tracking-wide">
              Project Description
            </label>
            <div className="relative">
              <textarea
                name="project"
                value={formData.project}
                onChange={handleChange}
                className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:bg-white transition-all duration-300 text-gray-900 placeholder-gray-500 resize-none"
                required
                placeholder="Tell us about your AI project, goals, and timeline..."
              />
              <div className="absolute top-4 right-4">
                <i className="fas fa-comment-alt text-gray-400"></i>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-xl shadow-lg shadow-indigo-500/25 flex items-center justify-center space-x-2"
          >
            <span>Request Free Consultation</span>
            <i className="fas fa-arrow-right"></i>
          </button>

          {isSubmitted && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center animate-fade-in">
              <div className="flex items-center justify-center mb-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-white text-sm"></i>
                </div>
              </div>
              <p className="text-green-800 font-semibold">Thank you for your interest!</p>
              <p className="text-green-700 text-sm mt-1">
                We&apos;ll review your project and get back to you within 24 hours with a personalized consultation.
              </p>
            </div>
          )}
        </form>
      </div>
      
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 px-8 py-6 border-t border-gray-200">
        <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <i className="fas fa-shield-alt text-indigo-500"></i>
            <span>Secure & Confidential</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-clock text-indigo-500"></i>
            <span>24hr Response</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-star text-indigo-500"></i>
            <span>Free Consultation</span>
          </div>
        </div>
      </div>
    </div>
  );
}
