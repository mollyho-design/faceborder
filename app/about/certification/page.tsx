'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CertificationPage() {
  return (
    <div className="bg-white pt-20">
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link href="/about" className="text-orange-500 text-sm font-medium mb-4 inline-block hover:underline">← 返回關於我們</Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">邏輯思考認證簽約儀式</h1>
            <p className="text-xl text-gray-600 max-w-3xl">與各大學校簽訂邏輯思考認證合作協議</p>
          </motion.div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="prose max-w-none mb-12">
            <p className="text-gray-600 leading-relaxed">視界創意科技與國內多所知名大學簽訂邏輯思考認證合作協議，共同推廣邏輯思考教育，為學生提供專業的能力認證服務。</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['國立台北科技大學', '國立台中科技大學', '逢甲大學', '國立高雄科技大學', '國立雲林科技大學', '國立屏東科技大學'].map((school) => (
              <div key={school} className="p-6 bg-gray-50 rounded-xl text-center">
                <p className="text-gray-700 font-medium">{school}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
