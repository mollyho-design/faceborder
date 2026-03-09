'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function TalentPage() {
  return (
    <div className="bg-white pt-20">
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link href="/about" className="text-orange-500 text-sm font-medium mb-4 inline-block hover:underline">← 返回關於我們</Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">CSI-Brain 遊戲+邏輯=人才發展</h1>
            <p className="text-xl text-gray-600 max-w-3xl">運用遊戲化評估與培訓，打造高效能企業人才</p>
          </motion.div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { title: '選工作', desc: '協助求職者了解自身優勢，找到適合的工作', icon: '💼' },
              { title: '選人才', desc: '客觀評估應徵者能力，降低用人風險', icon: '👥' },
              { title: '分析思考特質', desc: '深入了解員工思維模式，適才適所', icon: '🧠' }
            ].map((item) => (
              <div key={item.title} className="p-6 bg-white rounded-xl border border-gray-100 text-center">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="prose max-w-none">
            <p className="text-gray-600 leading-relaxed">企業人才發展是組織成功的關鍵。CSI-Brain 系統透過遊戲化的方式，協助企業進行人才評估、培訓與發展，提升整體組織效能。</p>
          </div>
        </div>
      </section>
    </div>
  )
}
