'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function GamificationPage() {
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
              遊戲化
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              透過遊戲化學習，讓培訓更有趣、更有效
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Gamification */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">什麼是遊戲化？</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                遊戲化 (Gamification) 是將遊戲設計元素應用於非遊戲情境中，
                透過遊戲機制提升參與度、激發動機，讓學習與培訓變得更加有趣且有效。
              </p>
              <p className="text-gray-600 leading-relaxed">
                我們的 CSI-Brain 系統結合神經科學與認知學習原理，
                設計超過 50 種遊戲，幫助企業與學校提升訓練成效。
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">遊戲化的優勢</h3>
              <ul className="space-y-4">
                {[
                  { title: '提升參與度', desc: '遊戲機制讓學習更吸引人' },
                  { title: '即時回饋', desc: '立即看見學習成果' },
                  { title: '激發動機', desc: '獎勵機制促進持續學習' },
                  { title: '數據追蹤', desc: '量化學習進度與成效' }
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Game Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">遊戲類型</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '邏輯推理遊戲',
                description: '培養分析與推理能力',
                games: ['邏輯拼圖', '推理挑戰', '模式識別']
              },
              {
                title: '策略思維遊戲',
                description: '訓練決策與規劃能力',
                games: ['策略棋盤', '資源管理', '情境模擬']
              },
              {
                title: '溝通協作遊戲',
                description: '強化團隊合作與表達',
                games: ['團隊任務', '角色扮演', '協作解謎']
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white rounded-2xl border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <ul className="space-y-2">
                  {category.games.map((game) => (
                    <li key={game} className="flex items-center gap-2 text-gray-600 text-sm">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                      {game}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">應用領域</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🏫', title: '學校教育', desc: '創新教學方法' },
              { icon: '🏢', title: '企業培訓', desc: '提升員工能力' },
              { icon: '🎓', title: '人才評估', desc: '客觀職能評量' },
              { icon: '🧠', title: '腦力開發', desc: '認知能力訓練' }
            ].map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-orange-50 rounded-xl text-center"
              >
                <span className="text-4xl mb-4 block">{area.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-gray-600 text-sm">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">體驗遊戲化學習</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services/software"
              className="px-8 py-4 bg-white text-orange-500 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              了解 CSI-Brain
            </Link>
            <a
              href="mailto:info@faceborder.com"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              預約展示
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
