'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function EnglishPage() {
  return (
    <div className="bg-white pt-20">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/images/csi_logo.png"
              alt="FACEBORDER"
              className="h-24 md:h-32 w-auto mx-auto mb-8"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            FACEBORDER
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Developing Logical Thinking Through Gamified Learning
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              href="/"
              className="px-8 py-4 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors inline-block"
            >
              View Chinese Version
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-20 grid md:grid-cols-3 gap-8 text-left"
          >
            {[
              {
                title: 'For Schools',
                description: 'Innovative teaching methods, recruitment highlights, and teacher development'
              },
              {
                title: 'For Students',
                description: 'Logic games, certifications, and learning analytics'
              },
              {
                title: 'For Enterprises',
                description: 'Talent assessment, training programs, and competency development'
              }
            ].map((item, index) => (
              <div
                key={item.title}
                className="p-6 bg-gray-50 rounded-xl"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
