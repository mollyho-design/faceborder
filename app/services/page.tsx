'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    title: '顧問諮詢',
    titleEn: 'Consulting',
    description: '接班計畫、銷售團隊建立、人力資源管理等專業諮詢服務',
    href: '/services/consulting',
    icon: '💼'
  },
  {
    title: '訓練培訓',
    titleEn: 'Training',
    description: 'APP Game 系列課程，讓學習變得有趣且有效',
    href: '/services/training',
    icon: '📚'
  },
  {
    title: 'CSI-Brain 遊戲軟體',
    titleEn: 'CSI-Brain Software',
    description: '超過 50 種遊戲，基於神經科學與認知學習原理設計',
    href: '/services/software',
    icon: '🎮'
  },
  {
    title: 'CSI VOTE 職能投票',
    titleEn: 'CSI VOTE',
    description: '一站式職能評估與投票平台，量化人才發展',
    href: '/services/voting',
    icon: '📊'
  },
  {
    title: '下載專區',
    titleEn: 'Downloads',
    description: '相關資源與文件下載',
    href: '/services/download',
    icon: '📥'
  }
]

export default function ServicesPage() {
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
              服務項目
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              我們提供全方位的企業培訓與諮詢服務，協助組織提升競爭力
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={service.href}
                  className="block p-8 bg-white rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all group h-full"
                >
                  <span className="text-4xl mb-4 block">{service.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-orange-500 mb-4">{service.titleEn}</p>
                  <p className="text-gray-600">{service.description}</p>
                  <span className="inline-flex items-center gap-2 mt-4 text-orange-500 font-medium">
                    了解更多
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
