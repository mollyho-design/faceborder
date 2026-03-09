'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const news = [
  {
    title: 'CSI-Brain 2015 新聞影片',
    description: '媒體報導視界創意科技的邏輯思考訓練系統'
  },
  {
    title: 'LAC 全球訓練認證中心成立',
    description: '邏輯應用職能認證中心正式成立'
  },
  {
    title: 'CSI-Brain 遊戲+邏輯=創新教學',
    description: '遊戲化學習在教育領域的創新應用'
  },
  {
    title: 'CSI-Brain 遊戲+邏輯=人才發展',
    description: '企業人才培訓的新方法'
  },
  {
    title: 'GAT 邏輯思考教學',
    description: '教師專業發展與邏輯思考教學認證'
  },
  {
    title: '邏輯思考認證簽約儀式',
    description: '與各大學校簽訂邏輯思考認證合作'
  }
]

export default function AboutPage() {
  return (
    <div className="bg-white pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              關於我們
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              視界創意科技致力於透過遊戲化學習，提升邏輯思考能力
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">我們的使命</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                我們相信邏輯思考是所有能力的基礎。透過創新的遊戲化學習方法，
                我們協助學校、學生與企業培養邏輯思考能力，提升競爭力。
              </p>
              <div className="flex flex-wrap items-center gap-4 text-lg">
                <span className="text-orange-500 font-semibold">邏輯思考</span>
                <span className="text-gray-400">→</span>
                <span className="text-gray-700">批判思考</span>
                <span className="text-gray-400">→</span>
                <span className="text-gray-700">表達清晰</span>
                <span className="text-gray-400">→</span>
                <span className="text-gray-700">影響他人</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '10+', label: '年經驗' },
                { value: '50+', label: '合作學校' },
                { value: '100+', label: '企業夥伴' },
                { value: '10000+', label: '培訓學員' }
              ].map((stat) => (
                <div key={stat.label} className="p-6 bg-orange-50 rounded-xl text-center">
                  <p className="text-3xl font-bold text-orange-500">{stat.value}</p>
                  <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">最新消息</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-xl hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LAC Certification Centers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">LAC 認證中心</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            LAC (Logic Application Competency) 全球訓練認證中心，與各大學校合作設立區域認證中心
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              '國立台北科技大學',
              '國立台中科技大學',
              '逢甲大學',
              '更多合作學校...'
            ].map((school) => (
              <div key={school} className="p-4 bg-gray-50 rounded-lg text-center">
                <p className="text-gray-700">{school}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">與我們合作</h2>
          <a
            href="mailto:info@faceborder.com"
            className="inline-block px-8 py-4 bg-white text-orange-500 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            聯絡我們
          </a>
        </div>
      </section>
    </div>
  )
}
