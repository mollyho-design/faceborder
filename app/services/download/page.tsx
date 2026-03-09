'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const downloads = [
  {
    category: '產品介紹',
    items: [
      { name: 'CSI-Brain 產品簡介', type: 'PDF', size: '2.5 MB' },
      { name: 'CSI VOTE 系統說明', type: 'PDF', size: '1.8 MB' },
      { name: '遊戲化學習白皮書', type: 'PDF', size: '3.2 MB' },
    ]
  },
  {
    category: '課程資料',
    items: [
      { name: '邏輯思考課程大綱', type: 'PDF', size: '1.2 MB' },
      { name: 'GAT 教學研習手冊', type: 'PDF', size: '4.5 MB' },
      { name: '企業培訓方案', type: 'PDF', size: '2.1 MB' },
    ]
  },
  {
    category: '活動資訊',
    items: [
      { name: '健腦思考營報名表', type: 'PDF', size: '0.5 MB' },
      { name: '邏輯思考競賽簡章', type: 'PDF', size: '0.8 MB' },
      { name: 'LAC 認證說明', type: 'PDF', size: '1.5 MB' },
    ]
  }
]

export default function DownloadPage() {
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
              下載專區
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              下載我們的產品介紹、課程資料與活動資訊
            </p>
          </motion.div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-12">
            {downloads.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="p-6 bg-white rounded-xl border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all cursor-pointer group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900 group-hover:text-orange-500 transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            {item.type} • {item.size}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for more */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">需要更多資料？</h2>
          <p className="text-gray-600 mb-8">
            如需其他資料或客製化文件，請聯絡我們
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
