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
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-sm">
      <div>
        <label className="block text-gray-700 font-medium mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2">Project Description</label>
        <textarea
          name="project"
          value={formData.project}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full gradient-bg text-white py-3 rounded-lg hover:opacity-90 transition font-medium"
      >
        Request Audit
      </button>
      {isSubmitted && (
        <div className="text-center">
          <p className="text-green-600 font-medium">
            Thank you! We&apos;ll be in touch soon about your audit.
          </p>
        </div>
      )}
    </form>
  );
}
