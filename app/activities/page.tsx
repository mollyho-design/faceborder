'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const activities = [
  {
    title: '健腦思考營',
    titleEn: 'Brain Fitness Camp',
    description: '透過遊戲化學習，培養邏輯思考能力的營隊活動',
    href: '/activities/camp',
    tag: '營隊'
  },
  {
    title: '玩遊戲學邏輯思考競賽',
    titleEn: 'Logic Thinking Competition',
    description: '結合遊戲與競賽，激發學生邏輯思考潛能',
    href: '/activities/competition',
    tag: '競賽'
  },
  {
    title: 'GAT 教學研習',
    titleEn: 'GAT Teaching Seminar',
    description: '針對教師設計的邏輯思考教學研習工作坊',
    href: '/activities/gat',
    tag: '研習'
  }
]

export default function ActivitiesPage() {
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
              活動資訊
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              參與我們的營隊、競賽與研習活動，提升邏輯思考能力
            </p>
          </motion.div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={activity.href}
                  className="block p-8 bg-white rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all group h-full"
                >
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded-full mb-4">
                    {activity.tag}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-orange-500 transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-orange-500 mb-4">{activity.titleEn}</p>
                  <p className="text-gray-600">{activity.description}</p>
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
