'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function SoftwarePage() {
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
              CSI-Brain 遊戲軟體
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              CSI = 職能 (Competency) + 監測 (Surveillance) + 指標 (Indicator)
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-orange-50 rounded-2xl text-center">
              <p className="text-5xl font-bold text-orange-500 mb-2">81%</p>
              <p className="text-gray-600">的新進員工決策會失敗</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-2xl text-center">
              <p className="text-5xl font-bold text-gray-700 mb-2">55%</p>
              <p className="text-gray-600">的員工覺得績效考核是有效的</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">超過 50 種遊戲</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            基於神經科學與認知學習原理設計，經過大量案例驗證
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '對員工',
                items: ['快速學習', '有趣互動', '看見成效'],
                color: 'orange'
              },
              {
                title: '對人資',
                items: ['降低成本', '節省人力', '節省時間'],
                color: 'blue'
              },
              {
                title: '對管理層',
                items: ['大數據分析', '即時監控', '輔助決策'],
                color: 'green'
              }
            ].map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white rounded-2xl border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">{group.title}</h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-600">
                      <span className="w-2 h-2 bg-orange-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">傳統方法的問題</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <p className="text-orange-400 text-lg font-medium mb-2">訓練無法持久</p>
              <p className="text-gray-400">傳統訓練效果難以延續</p>
            </div>
            <div className="p-6">
              <p className="text-orange-400 text-lg font-medium mb-2">選才無法保證</p>
              <p className="text-gray-400">人才評估缺乏客觀標準</p>
            </div>
            <div className="p-6">
              <p className="text-orange-400 text-lg font-medium mb-2">考核無法激勵</p>
              <p className="text-gray-400">績效考核流於形式</p>
            </div>
          </div>
        </div>
      </section>

      {/* Promises */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">我們的承諾</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '員工開始喜歡學習', icon: '😊' },
              { title: '人資開始展現績效', icon: '📈' },
              { title: '老闆開始得到答案', icon: '💡' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-orange-50 rounded-2xl text-center"
              >
                <span className="text-5xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">體驗 CSI-Brain</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            讓我們為您展示如何透過遊戲化提升組織效能
          </p>
          <a
            href="mailto:info@faceborder.com"
            className="inline-block px-8 py-4 bg-white text-orange-500 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            預約展示
          </a>
        </div>
      </section>
    </div>
  )
}
