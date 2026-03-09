'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    title: '接班計畫',
    titleEn: 'Succession Planning',
    items: ['定義接班人職能模組', '確認候選人職能落差', '輔導潛在候選人', '發展及訓練接班人']
  },
  {
    title: '諮商部屬',
    titleEn: 'Coaching Subordinates',
    items: ['整理出公司對受協助者的期望', '建立共識', '引導至認同軌道', '訓練管理團隊諮商能力']
  },
  {
    title: '銷售團隊建立',
    titleEn: 'Sales Team Development',
    items: ['診斷公司現狀', '全方位診斷銷售團隊', '依據新目標重整', '以實際案例訓練業務人員']
  },
  {
    title: '教學系統設計',
    titleEn: 'Teaching System Design',
    items: ['蒐集關鍵資訊', '制定訓練目標', '制定教學手冊', '設計訓練簡報', '講師培訓']
  },
  {
    title: '人力資源管理系統',
    titleEn: 'HR Management System',
    items: ['診斷現狀', '尋求改善', '重整系統', '舉辦研討會建立認同度']
  },
  {
    title: '職能導向訓練系統',
    titleEn: 'Competency-Based Training',
    items: ['診斷現狀', '訪談重要關係人', '建立職能模組', '量身規劃訓練', '追蹤表現']
  },
  {
    title: '職能管理及發展系統',
    titleEn: 'Competency Management',
    items: ['診斷現狀', '建立職能模組', '評鑑員工', '報告分析', '強化表現']
  }
]

export default function ConsultingPage() {
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
            <Link href="/services" className="text-orange-500 text-sm font-medium mb-4 inline-block hover:underline">
              ← 返回服務項目
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              顧問諮詢
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              具體規劃，才能確保結果。我們提供全方位的企業諮詢服務，協助您建立高效能的組織與團隊。
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
                className="p-8 bg-white rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-1">{service.title}</h3>
                <p className="text-sm text-orange-500 mb-4">{service.titleEn}</p>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">需要專業諮詢？</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            我們的顧問團隊將根據您的需求，提供客製化的解決方案
          </p>
          <a
            href="mailto:info@faceborder.com"
            className="inline-block px-8 py-4 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
          >
            聯絡我們
          </a>
        </div>
      </section>
    </div>
  )
}
