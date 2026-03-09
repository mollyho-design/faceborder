'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  {
    label: '關於我們',
    href: '/about',
    submenu: [
      { label: 'CSI-Brain 2015 新聞影片', href: '/about/news' },
      { label: 'LAC 全球訓練認證中心', href: '/about/lac' },
      { label: '遊戲+邏輯=創新教學', href: '/about/teaching' },
      { label: '遊戲+邏輯=人才發展', href: '/about/talent' },
      { label: 'GAT 邏輯思考教學', href: '/about/gat' },
      { label: '邏輯思考認證簽約', href: '/about/certification' },
    ]
  },
  {
    label: '服務項目',
    href: '/services',
    submenu: [
      { label: '顧問諮詢', href: '/services/consulting' },
      { label: '訓練培訓', href: '/services/training' },
      { label: 'CSI-Brain 遊戲軟體', href: '/services/software' },
      { label: 'CSI VOTE 職能投票', href: '/services/voting' },
      { label: '下載專區', href: '/services/download' },
    ]
  },
  {
    label: '遊戲化',
    href: '/gamification',
  },
  {
    label: '活動資訊',
    href: '/activities',
    submenu: [
      { label: '健腦思考營', href: '/activities/camp' },
      { label: '玩遊戲學邏輯思考競賽', href: '/activities/competition' },
      { label: 'GAT 教學研習 (一)', href: '/activities/gat' },
      { label: 'GAT 教學研習 (二)', href: '/activities/gat-2' },
    ]
  },
  {
    label: '我們的夥伴',
    href: '/partners',
  },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/csi_logo.png"
              alt="FACEBORDER"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => setActiveSubmenu(link.label)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={link.href}
                  className="text-gray-700 hover:text-orange-500 transition-colors text-sm font-medium"
                >
                  {link.label}
                </Link>
                {link.submenu && activeSubmenu === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[220px]"
                  >
                    {link.submenu.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </li>
            ))}
            <li>
              <Link
                href="/en"
                className="text-gray-500 hover:text-orange-500 transition-colors text-sm"
              >
                English
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <motion.span
                animate={{
                  rotate: mobileMenuOpen ? 45 : 0,
                  y: mobileMenuOpen ? 9 : 0,
                }}
                className="w-full h-0.5 bg-gray-700 rounded-full origin-left"
                transition={{ duration: 0.3 }}
              />
              <motion.span
                animate={{
                  opacity: mobileMenuOpen ? 0 : 1,
                }}
                className="w-full h-0.5 bg-gray-700 rounded-full"
                transition={{ duration: 0.2 }}
              />
              <motion.span
                animate={{
                  rotate: mobileMenuOpen ? -45 : 0,
                  y: mobileMenuOpen ? -9 : 0,
                }}
                className="w-full h-0.5 bg-gray-700 rounded-full origin-left"
                transition={{ duration: 0.3 }}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/20"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[300px] bg-white shadow-xl pt-20 px-6 overflow-y-auto"
            >
              <ul className="space-y-4 pb-8">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-gray-700 hover:text-orange-500 font-medium"
                    >
                      {link.label}
                    </Link>
                    {link.submenu && (
                      <ul className="pl-4 mt-2 space-y-2">
                        {link.submenu.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1 text-sm text-gray-500 hover:text-orange-500"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
                <li>
                  <Link
                    href="/en"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-gray-500 hover:text-orange-500"
                  >
                    English
                  </Link>
                </li>
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
