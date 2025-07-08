"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Twitter, Github, Youtube } from "lucide-react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here (e.g., API call)
  };

  return (
    <div className="min-h-screen bg-white mt-12">
      <section className="container mx-autopy-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {"Let's Get in Touch"}
              </h1>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Looking for more information or just want to reach out? Fill out
                the contact form and we will get back to you soon.
              </p>
            </div>

            {/* Social Media Section */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Follow us:
              </h2>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-900 hover:text-gray-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-900 hover:text-gray-600 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-900 hover:text-gray-600 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-900 hover:text-gray-600 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="w-full">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter Name*"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full h-12 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter Email*"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full h-12 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>

              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Enter Subject*"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full h-12 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Enter Message*"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-[#F5821E] hover:bg-[#F5821E]/90 text-white font-semibold rounded-md transition-colors"
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactForm;
