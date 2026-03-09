'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function TeachingPage() {
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
              CSI-Brain 遊戲+邏輯=創新教學
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              將遊戲化學習融入教育，打造創新教學模式
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { title: '招生亮點', desc: '以創新邏輯教學作為學校特色，吸引優秀學生', icon: '🎯' },
              { title: '特色教學', desc: '將遊戲化元素融入課程，提升學習興趣', icon: '🎮' },
              { title: '老師增能', desc: '提供教師專業發展，掌握創新教學方法', icon: '📚' }
            ].map((item) => (
              <div key={item.title} className="p-6 bg-white rounded-xl border border-gray-100 text-center">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="prose max-w-none">
            <p className="text-gray-600 leading-relaxed">
              CSI-Brain 遊戲系統為學校提供了創新的教學工具，讓邏輯思考訓練變得生動有趣。
              透過遊戲化學習，學生能夠在輕鬆愉快的氛圍中培養批判性思維和問題解決能力。
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
