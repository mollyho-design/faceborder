'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NewsPage() {
  return (
    <div className="bg-white pt-20">
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link href="/about" className="text-orange-500 text-sm font-medium mb-4 inline-block hover:underline">
              ← 返回關於我們
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              CSI-Brain 2015 新聞影片
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              媒體報導視界創意科技的邏輯思考訓練系統
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gray-100 rounded-2xl aspect-video flex items-center justify-center mb-8">
            <div className="text-center text-gray-500">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p>新聞影片</p>
            </div>
          </div>
          <div className="prose max-w-none">
            <p className="text-gray-600 leading-relaxed">
              2015年，視界創意科技獲得多家媒體報導，介紹我們創新的邏輯思考訓練系統 CSI-Brain。
              透過遊戲化學習的方式，我們成功地將邏輯思考訓練變得更加有趣且有效。
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
