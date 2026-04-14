"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function DocsRequestPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent("Technical Documentation Request");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nOrganization: ${organization}\n\nRequesting access to Inferon technical documentation.`
    );

    window.location.href = `mailto:docs@latticesystems.io?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex items-center justify-between bg-white/80 backdrop-blur-xl border-b border-neutral-100">
        <Link href="/" className="flex flex-col">
          <span className="font-mono text-sm tracking-wider">INFERON</span>
          <span className="text-[15px] text-neutral-400 tracking-wide">
            by Lattice Systems
          </span>
        </Link>
        <div className="flex items-center gap-8 text-sm text-neutral-500">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
        </div>
      </nav>

      <div className="max-w-xl mx-auto px-6 md:px-12 pt-40 pb-24">
        {!submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-light tracking-tight text-black mb-4">
              Request Technical Documentation
            </h1>
            <p className="text-neutral-500 mb-12">
              Provide your details below. Our team will review and share the
              documentation with you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-mono tracking-wider text-neutral-400 uppercase mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-neutral-200 bg-white text-black placeholder:text-neutral-300 focus:outline-none focus:border-black transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-mono tracking-wider text-neutral-400 uppercase mb-2"
                >
                  Work Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-neutral-200 bg-white text-black placeholder:text-neutral-300 focus:outline-none focus:border-black transition-colors"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="organization"
                  className="block text-xs font-mono tracking-wider text-neutral-400 uppercase mb-2"
                >
                  Organization
                </label>
                <input
                  id="organization"
                  type="text"
                  required
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  className="w-full px-4 py-3 border border-neutral-200 bg-white text-black placeholder:text-neutral-300 focus:outline-none focus:border-black transition-colors"
                  placeholder="Company name"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full px-8 py-4 bg-black text-white font-medium hover:bg-neutral-800 transition-colors mt-4"
              >
                Request Documentation
              </motion.button>
            </form>

            <p className="mt-8 text-xs text-neutral-400">
              Your information is used solely to process this request.
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-16"
          >
            <div className="w-12 h-12 border border-black flex items-center justify-center mx-auto mb-8">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-light tracking-tight text-black mb-4">
              Request Submitted
            </h2>
            <p className="text-neutral-500 mb-8">
              Your mail client should open with the request details.
              <br />
              Our team will review and respond shortly.
            </p>
            <Link href="/">
              <motion.span
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-200 text-neutral-600 font-medium hover:border-neutral-400 hover:text-black transition-colors"
              >
                Back to Home
              </motion.span>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}
