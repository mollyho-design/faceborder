'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function GAT2Page() {
  return (
    <div className="bg-white pt-20">
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link href="/activities" className="text-orange-500 text-sm font-medium mb-4 inline-block hover:underline">← 返回活動資訊</Link>
            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded-full mb-4">研習</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">GAT 教學研習 (二)</h1>
            <p className="text-xl text-gray-600 max-w-3xl">進階邏輯思考教學研習工作坊</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">進階研習內容</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                GAT 教學研習 (二) 是針對已完成初階研習的教師所設計的進階課程，
                深入探討邏輯思考教學的進階技巧與應用。
              </p>
              <ul className="space-y-4">
                {[
                  '進階邏輯推理教學策略',
                  '差異化教學設計',
                  '學習成效評量方法',
                  '教學實務案例分享',
                  '課程設計工作坊'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-orange-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">研習資訊</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg">
                  <p className="text-sm text-gray-500">研習時數</p>
                  <p className="text-xl font-bold text-gray-900">12 小時</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <p className="text-sm text-gray-500">適合對象</p>
                  <p className="text-xl font-bold text-gray-900">已完成初階研習之教師</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <p className="text-sm text-gray-500">認證</p>
                  <p className="text-xl font-bold text-gray-900">LAC 進階教學認證</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-orange-500">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">報名進階研習</h2>
          <a href="mailto:info@faceborder.com" className="inline-block px-8 py-4 bg-white text-orange-500 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            立即報名
          </a>
        </div>
      </section>
    </div>
  )
}
