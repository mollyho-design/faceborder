'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/images/csi_logo.png"
              alt="FACEBORDER"
              className="h-24 md:h-32 w-auto mx-auto mb-8"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            視界創意科技
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            透過遊戲化學習，培養邏輯思考能力
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="#services"
              className="px-8 py-4 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              了解更多
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 border-2 border-orange-500 text-orange-500 rounded-lg font-medium hover:bg-orange-50 transition-colors"
            >
              聯絡我們
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-400"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Core Value Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              邏輯思考如何決定競爭力
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4 text-lg md:text-xl">
              <span className="text-orange-500 font-semibold">邏輯思考</span>
              <span className="text-gray-400">→</span>
              <span className="text-gray-700">批判思考</span>
              <span className="text-gray-400">→</span>
              <span className="text-gray-700">表達清晰</span>
              <span className="text-gray-400">→</span>
              <span className="text-gray-700">影響他人</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-orange-500 text-sm uppercase tracking-wider font-medium">What We Solve</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-8">
              我們解決
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '學校',
                items: ['招生亮點', '特色教學', '老師增能'],
                icon: '🏫'
              },
              {
                title: '學生',
                items: ['選類組', '選科系', '分析學習特質'],
                icon: '🎓'
              },
              {
                title: '企業',
                items: ['選工作', '選人才', '分析思考特質'],
                icon: '🏢'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all"
              >
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.items.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-gray-600">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-orange-500 text-sm uppercase tracking-wider font-medium">What We Provide</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-8">
              我們提供
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '邏輯思考遊戲',
                description: '透過遊戲進行邏輯思考的自我診斷，了解自己的思考模式與優勢',
                icon: '🎮'
              },
              {
                title: '邏輯思考認證',
                description: '提供專業的邏輯思考能力認證，為學習與職涯發展加分',
                icon: '📜'
              },
              {
                title: '邏輯課程培訓',
                description: '針對學生、教師、職場人士設計的邏輯思考課程，涵蓋表達、詮釋、提問、簡報、銷售、解決問題',
                icon: '📚'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all"
              >
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brain Fitness Section */}
      <section id="gamification" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-orange-500 text-sm uppercase tracking-wider font-medium">Brain Fitness</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                健腦
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                透過運動大腦來增強/維持認知能力，類似透過運動來增強/維持體適能。有力的證據表明，大腦結構在整個生命週期中保持可塑性，而密集的心智活動可以降低失智症的風險。
              </p>
              <div className="p-6 bg-orange-50 rounded-xl border border-orange-100">
                <h4 className="font-semibold text-gray-900 mb-2">邏輯推理 (Logical Reasoning)</h4>
                <p className="text-gray-600 text-sm">
                  研究顯示，認知能力對學習成效和工作表現具有顯著的預測價值。
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-8 md:p-12"
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: '認證課程', value: '10+' },
                  { label: '合作學校', value: '50+' },
                  { label: '培訓學員', value: '10000+' },
                  { label: '企業夥伴', value: '100+' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-3xl md:text-4xl font-bold text-orange-500">{stat.value}</p>
                    <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-orange-500 text-sm uppercase tracking-wider font-medium">Activities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              活動資訊
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '健腦思考營',
                description: '透過遊戲化學習，培養邏輯思考能力的夏令營活動',
                tag: '營隊'
              },
              {
                title: '玩遊戲學邏輯思考競賽',
                description: '結合遊戲與競賽，激發學生邏輯思考潛能',
                tag: '競賽'
              },
              {
                title: 'GAT 教學研習',
                description: '針對教師設計的邏輯思考教學研習工作坊',
                tag: '研習'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-white rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all cursor-pointer"
              >
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded-full mb-4">
                  {item.tag}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-orange-500 text-sm uppercase tracking-wider font-medium">Partners</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              我們的夥伴
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              'International Elites',
              'Thinking Map Organization',
              'TWO Training Network',
              'LAC Certification Center'
            ].map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-gray-50 rounded-xl text-center hover:bg-orange-50 transition-colors"
              >
                <p className="text-gray-700 font-medium">{partner}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-orange-500">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              開始培養邏輯思考能力
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              無論您是學校、學生或企業，我們都能提供適合的解決方案
            </p>
            <a
              href="mailto:info@faceborder.com"
              className="inline-block px-8 py-4 bg-white text-orange-500 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              聯絡我們
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
