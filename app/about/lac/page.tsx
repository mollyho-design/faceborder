'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function LACPage() {
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
              LAC 全球訓練認證中心成立
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Logic Application Competency - 邏輯應用職能認證
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">關於 LAC</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                LAC (Logic Application Competency) 全球訓練認證中心是由視界創意科技成立的專業認證機構，
                致力於推廣邏輯思考能力的培訓與認證。
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                我們與國內外多所知名大學合作，建立區域認證中心，
                為學校、企業與個人提供專業的邏輯思考能力認證服務。
              </p>
              <a
                href="https://www.lac-logic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
              >
                訪問 LAC 官網 →
              </a>
            </div>
            <div className="bg-orange-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">認證中心據點</h3>
              <ul className="space-y-3">
                {[
                  '國立台北科技大學',
                  '國立台中科技大學',
                  '逢甲大學',
                  '國立高雄科技大學',
                  '國立雲林科技大學',
                  '國立屏東科技大學'
                ].map((school) => (
                  <li key={school} className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-orange-500 rounded-full" />
                    {school}
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
