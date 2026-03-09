'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CampPage() {
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
              營隊
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              健腦思考營
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Brain Fitness Camp - 透過遊戲化學習，培養邏輯思考能力
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Brain Fitness */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">什麼是健腦？</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                鍛煉大腦來提升/維持認知能力，類似透過運動來增強/維持體適能。有力的證據表明，大腦結構在整個生命週期中保持可塑性，而密集的心智活動可以降低失智症的風險。
              </p>
              <div className="p-6 bg-orange-50 rounded-xl">
                <p className="text-orange-600 font-medium text-lg">
                  「我開始喜歡思考了」
                </p>
                <p className="text-gray-600 text-sm mt-2">— 營隊學員回饋</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">營隊特色</h3>
              <ul className="space-y-4">
                {[
                  '遊戲化教學，學習不無聊',
                  '小班制教學，個別指導',
                  '專業師資，經驗豐富',
                  '結業認證，為升學加分'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Camp Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">營隊類型</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: '兒童邏輯營',
                age: '7-12 歲',
                description: '透過趣味遊戲啟發孩子的邏輯思維能力',
                features: ['基礎邏輯概念', '遊戲化學習', '團隊合作']
              },
              {
                title: '企業健腦營',
                age: '企業團體',
                description: '提升團隊思考力與問題解決能力',
                features: ['策略思維訓練', '團隊腦力激盪', '職能評估']
              }
            ].map((camp, index) => (
              <motion.div
                key={camp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white rounded-2xl border border-gray-100"
              >
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded-full mb-4">
                  {camp.age}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{camp.title}</h3>
                <p className="text-gray-600 mb-6">{camp.description}</p>
                <ul className="space-y-2">
                  {camp.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-600 text-sm">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">報名健腦思考營</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            開始您的邏輯思考訓練之旅
          </p>
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
