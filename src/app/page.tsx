"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInUpChild = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="noise-overlay">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex items-center justify-between bg-white/80 backdrop-blur-xl border-b border-neutral-100"
      >
        <div className="flex flex-col">
          <span className="font-mono text-sm tracking-wider">INFERON</span>
          <span className="text-[15px] text-neutral-400 tracking-wide">by Lattice Systems</span>
        </div>
        <div className="hidden md:flex items-center gap-12 text-sm text-neutral-500">
          <a href="#capabilities" className="hover:text-black transition-colors">
            Capabilities
          </a>
          <a href="#security" className="hover:text-black transition-colors">
            Security
          </a>
          <a href="mailto:contact@latticesystems.io" className="hover:text-black transition-colors">
            Contact
          </a>
        </div>
        <motion.a
          href="mailto:contact@latticesystems.io"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-5 py-2.5 bg-black text-white text-sm font-medium hover:bg-neutral-800 transition-colors"
        >
          Contact Us
        </motion.a>
      </motion.nav>

      {/* Hero */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity }}
        className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 pt-32 pb-24 grid-pattern relative"
      >
        <motion.div
          style={{ y: heroY }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.95] mb-8"
          >
            Confidential 
            <br />
            <span className="text-neutral-400">AI </span>
             at Scale.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-xl md:text-2xl text-neutral-500 font-light max-w-2xl mx-auto leading-relaxed mb-12"
          >
            LLM inference with hardware-enforced confidentiality.
            <br className="hidden md:block" />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a
              href="mailto:contact@latticesystems.io"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-black text-white font-medium hover:bg-neutral-800 transition-colors"
            >
              Contact Us
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-neutral-300 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-neutral-400 rounded-full" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Capabilities */}
        <motion.section
          id="capabilities"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="py-24 md:py-32"
        >
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-400 mb-16 text-center">
            Capabilities
          </h2>
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                title: "Data Confidentiality",
                description: "Prompts and outputs protected by NVIDIA Confidential Compute and Intel TDX / AMD SEV. Inaccessible to infrastructure operators.",
              },
              {
                title: "Verifiable Execution",
                description: "Cryptographic proof that inference runs in a trusted, measured environment.",
              },
              {
                title: "Hardware Isolation",
                description: "Security enforced by hardware, independent of cloud provider, host OS, or operator.",
              },
              {
                title: "Dedicated Infrastructure",
                description: "Each deployment runs on dedicated hardware under contract. No shared tenancy — your model runs solely for your organization.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUpChild}
                className="p-8 border border-neutral-200 hover:border-neutral-400 transition-colors duration-500"
              >
                <h3 className="font-mono text-sm text-black mb-4 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Divider */}
        <div className="border-t border-neutral-100" />

        {/* Security */}
        <motion.section
          id="security"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="py-24 md:py-32"
        >
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-400 mb-8">
            Security Model
          </h2>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-3xl md:text-4xl font-light tracking-tight text-black mb-8 leading-tight">
                Hardware-rooted security guarantees
              </h3>
              <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                The platform provides confidentiality through hardware isolation, 
                not software promises. Attestation proves execution integrity before 
                any data is processed.
              </p>
            </div>
            <div>
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {[
                  "Confidentiality of data in use",
                  "Cryptographic attestation",
                  "Per-session encryption",
                  "Forward secrecy",
                  "User isolation",
                ].map((property, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUpChild}
                    className="flex items-center gap-4 py-3 border-b border-neutral-100 last:border-0"
                  >
                    <span className="w-5 h-5 border border-black flex items-center justify-center shrink-0">
                      <svg
                        className="w-3 h-3"
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
                    </span>
                    <span className="text-neutral-600">{property}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* CTA Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        className="bg-black text-white py-24 md:py-32"
      >
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8 leading-tight">
            Get Started
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
            Request access to deploy confidential AI inference for your organization.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="mailto:contact@latticesystems.io"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-medium hover:bg-neutral-100 transition-colors"
            >
              Contact Us
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </motion.a>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-neutral-800">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <div className="font-mono text-sm tracking-wider mb-1">INFERON</div>
              <div className="text-xs text-neutral-500">by Lattice Systems</div>
            </div>
            <div className="flex flex-wrap gap-8 text-sm text-neutral-500">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="mailto:contact@latticesystems.io" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="border-t border-neutral-800 mt-8 pt-8 text-xs text-neutral-600">
            &copy; 2026 Lattice Systems. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
