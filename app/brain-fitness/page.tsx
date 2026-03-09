'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function BrainFitnessPage() {
  return (
    <div className="bg-white pt-20">
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">健腦 Brain Fitness</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">透過運動大腦來增強/維持認知能力</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">什麼是健腦？</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                健腦 (Brain Fitness) 是透過運動大腦來增強/維持認知能力，類似透過運動來增強/維持體適能。
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                有力的證據表明，大腦結構在整個生命週期中保持可塑性，而密集的心智活動可以降低失智症的風險。
              </p>
              <div className="p-6 bg-orange-50 rounded-xl border border-orange-100">
                <p className="text-orange-600 font-medium italic">
                  「Logic plays a fundamental role in artificial intelligence research.」
                </p>
                <p className="text-gray-500 text-sm mt-2">— Stanford Encyclopedia of Philosophy</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">邏輯推理 Logical Reasoning</h3>
              <p className="text-gray-600 mb-6">研究顯示，認知能力對學習成效和工作表現具有顯著的預測價值。</p>
              <ul className="space-y-4">
                {[
                  '提升學習成效',
                  '增強問題解決能力',
                  '改善決策品質',
                  '延緩認知老化'
                ].map((item) => (
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

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">開始您的健腦之旅</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/activities/camp" className="px-8 py-4 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors">
              參加健腦思考營
            </Link>
            <Link href="/services/software" className="px-8 py-4 border-2 border-orange-500 text-orange-500 rounded-lg font-medium hover:bg-orange-50 transition-colors">
              了解 CSI-Brain
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
