'use client'

import { motion } from 'framer-motion'

const partners = [
  {
    name: 'International Elites',
    nameZh: '國際菁英',
    description: '國際人才發展與培訓合作夥伴',
    type: '國際合作'
  },
  {
    name: 'Thinking Map Organization Behavior',
    nameZh: '思圖組織行為',
    description: '組織行為與思維訓練專業機構',
    link: 'http://www.obcenter.com.tw',
    type: '專業機構'
  },
  {
    name: 'TWO Training Effectiveness Network',
    nameZh: 'TWO 訓練成效網',
    description: '訓練成效評估與追蹤系統',
    link: 'http://www.two-learn.com',
    type: '技術夥伴'
  },
  {
    name: 'LAC Certification Center',
    nameZh: 'LAC 認證中心',
    description: '邏輯應用職能認證機構',
    link: 'https://www.lac-logic.com',
    type: '認證機構'
  }
]

const schools = [
  '國立台北科技大學',
  '國立台中科技大學',
  '逢甲大學',
  '國立高雄科技大學',
  '國立雲林科技大學',
  '國立屏東科技大學'
]

export default function PartnersPage() {
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
              我們的夥伴
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              與國內外專業機構合作，共同推廣邏輯思考教育
            </p>
          </motion.div>
        </div>
      </section>

      {/* Strategic Partners */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">策略夥伴</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all"
              >
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded-full mb-4">
                  {partner.type}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{partner.nameZh}</h3>
                <p className="text-sm text-orange-500 mb-4">{partner.name}</p>
                <p className="text-gray-600 mb-4">{partner.description}</p>
                {partner.link && (
                  <a
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:underline text-sm"
                  >
                    訪問網站 →
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* School Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">合作學校</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            與全國各大學校合作，設立邏輯思考認證中心
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {schools.map((school, index) => (
              <motion.div
                key={school}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-4 bg-white rounded-lg text-center hover:bg-orange-50 transition-colors"
              >
                <p className="text-gray-700 text-sm">{school}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become Partner */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">成為我們的夥伴</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            歡迎學校、企業與機構與我們合作，共同推廣邏輯思考教育
          </p>
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
