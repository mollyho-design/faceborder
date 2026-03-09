'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function GATPage() {
  return (
    <div className="bg-white pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/activities" className="text-orange-500 text-sm font-medium mb-4 inline-block hover:underline">
              ← 返回活動資訊
            </Link>
            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded-full mb-4">
              研習
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              GAT 教學研習
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              針對教師設計的邏輯思考教學研習工作坊
            </p>
          </motion.div>
        </div>
      </section>

      {/* Workshop Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">研習目標</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                GAT (General Ability Test) 教學研習旨在協助教師掌握邏輯思考教學方法，
                將遊戲化學習融入課堂教學，提升學生的思考能力。
              </p>
              <ul className="space-y-4">
                {[
                  '了解邏輯思考的核心概念與重要性',
                  '學習將遊戲化元素融入教學',
                  '掌握邏輯思考評量方法',
                  '獲得 GAT 教學認證'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">研習內容</h2>
              <div className="space-y-4">
                {[
                  { title: '邏輯思考基礎', desc: '邏輯推理、批判思考概念介紹' },
                  { title: '遊戲化教學', desc: '如何運用遊戲提升學習成效' },
                  { title: '實作演練', desc: '實際操作 CSI-Brain 遊戲軟體' },
                  { title: '教案設計', desc: '設計融入邏輯思考的課程教案' }
                ].map((item) => (
                  <div key={item.title} className="p-4 bg-gray-50 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">取得 GAT 教學認證</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            完成研習並通過評量，即可獲得 LAC 認證中心頒發的 GAT 教學認證
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { title: '研習時數', value: '12 小時' },
              { title: '認證效期', value: '3 年' },
              { title: '認證單位', value: 'LAC' }
            ].map((item) => (
              <div key={item.title} className="p-6 bg-white rounded-xl">
                <p className="text-3xl font-bold text-orange-500 mb-2">{item.value}</p>
                <p className="text-gray-600">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">報名 GAT 教學研習</h2>
          <a
            href="mailto:info@faceborder.com"
            className="inline-block px-8 py-4 bg-white text-orange-500 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            立即報名
          </a>
        </div>
      </section>
    </div>
  )
}
