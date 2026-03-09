import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/">
              <img
                src="/images/csi_logo.png"
                alt="FACEBORDER"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-500 text-center md:text-left">
              視界創意科技有限公司
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div>
              <h4 className="font-medium text-gray-900 mb-3">服務項目</h4>
              <ul className="space-y-2">
                <li><Link href="/services/consulting" className="text-sm text-gray-500 hover:text-orange-500">顧問諮詢</Link></li>
                <li><Link href="/services/training" className="text-sm text-gray-500 hover:text-orange-500">訓練培訓</Link></li>
                <li><Link href="/services/software" className="text-sm text-gray-500 hover:text-orange-500">CSI-Brain 遊戲軟體</Link></li>
                <li><Link href="/services/voting" className="text-sm text-gray-500 hover:text-orange-500">CSI VOTE 職能投票</Link></li>
                <li><Link href="/services/download" className="text-sm text-gray-500 hover:text-orange-500">下載專區</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-3">活動資訊</h4>
              <ul className="space-y-2">
                <li><Link href="/activities/camp" className="text-sm text-gray-500 hover:text-orange-500">健腦思考營</Link></li>
                <li><Link href="/activities/competition" className="text-sm text-gray-500 hover:text-orange-500">邏輯思考競賽</Link></li>
                <li><Link href="/activities/gat" className="text-sm text-gray-500 hover:text-orange-500">GAT 教學研習</Link></li>
                <li><Link href="/brain-fitness" className="text-sm text-gray-500 hover:text-orange-500">健腦資訊</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-3">關於我們</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-sm text-gray-500 hover:text-orange-500">公司簡介</Link></li>
                <li><Link href="/about/lac" className="text-sm text-gray-500 hover:text-orange-500">LAC 認證中心</Link></li>
                <li><Link href="/partners" className="text-sm text-gray-500 hover:text-orange-500">合作夥伴</Link></li>
                <li><a href="mailto:info@faceborder.com" className="text-sm text-gray-500 hover:text-orange-500">聯絡我們</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} FACEBORDER 視界創意科技. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.lac-logic.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-orange-500">
              LAC 官網
            </a>
            <Link href="/en" className="text-sm text-gray-400 hover:text-orange-500">
              English
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
