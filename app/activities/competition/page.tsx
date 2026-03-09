'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CompetitionPage() {
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
              競賽
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              玩遊戲學邏輯思考競賽
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              結合遊戲與競賽，激發學生邏輯思考潛能
            </p>
          </motion.div>
        </div>
      </section>

      {/* Competition Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">競賽特色</h2>
              <ul className="space-y-4">
                {[
                  { title: '遊戲化競賽', desc: '透過遊戲形式進行，讓競賽更有趣' },
                  { title: '多元評量', desc: '評估邏輯思考、策略規劃、問題解決能力' },
                  { title: '認證獎勵', desc: '優勝者獲得邏輯思考能力認證' },
                  { title: '全國性活動', desc: '與全國學生一同切磋，開拓視野' }
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
            <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-6">你是台灣最強邏輯學生嗎？</h3>
              <p className="text-gray-600 mb-6">
                挑戰自我，證明你的邏輯思考實力
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-3xl font-bold text-orange-500">500+</p>
                  <p className="text-sm text-gray-600">參賽學生</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-3xl font-bold text-orange-500">50+</p>
                  <p className="text-sm text-gray-600">參與學校</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">競賽流程</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: '報名', desc: '線上報名參加競賽' },
              { step: '2', title: '初賽', desc: '線上進行初賽測驗' },
              { step: '3', title: '決賽', desc: '晉級者參加現場決賽' },
              { step: '4', title: '頒獎', desc: '頒發證書與獎品' }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">報名參加競賽</h2>
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
