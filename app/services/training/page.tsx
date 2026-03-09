'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const courses = [
  {
    title: '認識你的腦',
    titleEn: 'Study Brain by APP Game',
    duration: '7-14 小時',
    description: '透過遊戲了解大腦運作模式，發掘個人認知優勢'
  },
  {
    title: '學溝通',
    titleEn: 'Communication by APP Game',
    duration: '7-14 小時',
    description: '運用遊戲化方式學習有效溝通技巧'
  },
  {
    title: '學 Logic',
    titleEn: 'Logic by APP Game',
    duration: '7-14 小時',
    description: '透過邏輯遊戲培養批判性思考能力'
  },
  {
    title: '學領導',
    titleEn: 'Lead by APP Game',
    duration: '7-14 小時',
    description: '以遊戲情境模擬領導決策，培養領導力'
  },
  {
    title: '學銷售',
    titleEn: 'Selling by APP Game',
    duration: '7-14 小時',
    description: '透過角色扮演遊戲提升銷售技巧'
  },
  {
    title: '學團隊智能',
    titleEn: 'Team Brain by APP Game',
    duration: '7-14 小時',
    description: '團隊合作遊戲，強化協作與溝通'
  },
  {
    title: '學策略',
    titleEn: 'Strategy by APP Game',
    duration: '7-14 小時',
    description: '策略遊戲訓練，培養全局思維與決策能力'
  }
]

export default function TrainingPage() {
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
              訓練培訓
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              訓練成功的 3 個關鍵要素：有趣味 + 有成效 + 有證明
            </p>
          </motion.div>
        </div>
      </section>

      {/* Training Process */}
      <section className="py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">培訓流程</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {['Diagnose 診斷', 'Report 報告', 'Apply 應用', 'Develop 發展'].map((step, index) => (
              <div key={step} className="flex items-center">
                <div className="px-6 py-3 bg-orange-500 text-white rounded-lg font-medium">
                  {step}
                </div>
                {index < 3 && (
                  <span className="hidden md:block text-orange-300 mx-4 text-2xl">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">APP Game 課程系列</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all"
              >
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded-full mb-4">
                  {course.duration}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{course.title}</h3>
                <p className="text-sm text-orange-500 mb-4">{course.titleEn}</p>
                <p className="text-gray-600 text-sm">{course.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">開始您的培訓計畫</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            我們提供客製化的企業培訓方案，讓學習變得有趣且有效
          </p>
          <a
            href="mailto:info@faceborder.com"
            className="inline-block px-8 py-4 bg-white text-orange-500 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            預約諮詢
          </a>
        </div>
      </section>
    </div>
  )
}
