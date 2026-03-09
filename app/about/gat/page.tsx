'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AboutGATPage() {
  return (
    <div className="bg-white pt-20">
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link href="/about" className="text-orange-500 text-sm font-medium mb-4 inline-block hover:underline">← 返回關於我們</Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">GAT 邏輯思考教學</h1>
            <p className="text-xl text-gray-600 max-w-3xl">General Ability Test - 通用能力測驗與教學系統</p>
          </motion.div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">什麼是 GAT？</h2>
              <p className="text-gray-600 leading-relaxed mb-6">GAT (General Ability Test) 是一套完整的邏輯思考教學系統，結合標準化測驗與遊戲化學習，幫助學生發展批判性思維能力。</p>
              <p className="text-gray-600 leading-relaxed">我們提供完整的教師培訓課程，讓老師能夠有效地將 GAT 教學融入日常課程中。</p>
            </div>
            <div className="bg-orange-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">GAT 教學特色</h3>
              <ul className="space-y-3">
                {['標準化邏輯能力評量', '遊戲化學習模組', '教師專業培訓', '學生學習歷程追蹤', 'LAC 認證支援'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
