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
                <li><Link href="#consulting" className="text-sm text-gray-500 hover:text-orange-500">顧問諮詢</Link></li>
                <li><Link href="#training" className="text-sm text-gray-500 hover:text-orange-500">訓練培訓</Link></li>
                <li><Link href="#software" className="text-sm text-gray-500 hover:text-orange-500">CSI-Brain 遊戲軟體</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-3">活動資訊</h4>
              <ul className="space-y-2">
                <li><Link href="#camp" className="text-sm text-gray-500 hover:text-orange-500">健腦思考營</Link></li>
                <li><Link href="#competition" className="text-sm text-gray-500 hover:text-orange-500">邏輯思考競賽</Link></li>
                <li><Link href="#gat" className="text-sm text-gray-500 hover:text-orange-500">GAT 教學研習</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-3">聯絡我們</h4>
              <ul className="space-y-2">
                <li><a href="mailto:info@faceborder.com" className="text-sm text-gray-500 hover:text-orange-500">info@faceborder.com</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} FACEBORDER 視界創意科技. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
