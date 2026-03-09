'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function VotingPage() {
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
              CSI VOTE 職能投票
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Competency DIY System - 一站式職能評估與投票平台
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">系統特色</h2>
              <ul className="space-y-4">
                {[
                  { title: '策略連結', desc: '將人力資源與公司策略緊密結合' },
                  { title: '客製模組', desc: '量身打造職能框架，非制式範本' },
                  { title: '提升效率', desc: '減少人資作業時間，增加評估頻率' },
                  { title: '發展工具', desc: '直接連結職能落差與訓練需求' },
                  { title: '數據分析', desc: '大數據分析，建立人才選用標準' }
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">投票結果報告</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-500 mb-1">個人職能分數</p>
                  <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-500 mb-1">團隊平均表現</p>
                  <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-400 rounded-full" style={{ width: '68%' }}></div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-500 mb-1">量化 ROI</p>
                  <p className="text-2xl font-bold text-orange-500">+32%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">系統效益</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '即時回饋', desc: '投票結果即時呈現，快速掌握團隊狀態', icon: '⚡' },
              { title: '行動裝置', desc: '支援手機平板，隨時隨地進行評估', icon: '📱' },
              { title: '歷史比較', desc: '追蹤發展軌跡，建立人才基準', icon: '📊' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white rounded-2xl text-center"
              >
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">開始使用 CSI VOTE</h2>
          <a
            href="mailto:info@faceborder.com"
            className="inline-block px-8 py-4 bg-white text-orange-500 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            申請試用
          </a>
        </div>
      </section>
    </div>
  )
}
