# FACEBORDER Website

## Project Overview

FACEBORDER (視界創意科技有限公司) 官方網站，提供邏輯思考教育、CSI-Brain 遊戲軟體、LAC 認證等服務。

**Reference:** https://faceborder.com/

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Deployment:** Static site generation

## Brand Colors

- **Primary (Orange):** `#F97316` - 用於 CTA 按鈕、hover 效果、強調元素
- **Background:** White (`#FFFFFF`)
- **Text:** Gray scale (`gray-900`, `gray-600`, `gray-500`)

## Project Structure

```
faceborder/
├── app/
│   ├── layout.tsx              # Root layout (Navigation + Footer)
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles
│   │
│   ├── about/                  # 關於我們
│   │   ├── page.tsx            # 公司簡介
│   │   ├── news/page.tsx       # CSI-Brain 2015 新聞影片
│   │   ├── lac/page.tsx        # LAC 全球訓練認證中心
│   │   ├── teaching/page.tsx   # 遊戲+邏輯=創新教學
│   │   ├── talent/page.tsx     # 遊戲+邏輯=人才發展
│   │   ├── gat/page.tsx        # GAT 邏輯思考教學
│   │   └── certification/page.tsx  # 邏輯思考認證簽約
│   │
│   ├── services/               # 服務項目
│   │   ├── page.tsx            # 服務總覽
│   │   ├── consulting/page.tsx # 顧問諮詢
│   │   ├── training/page.tsx   # 訓練培訓
│   │   ├── software/page.tsx   # CSI-Brain 遊戲軟體
│   │   ├── voting/page.tsx     # CSI VOTE 職能投票
│   │   └── download/page.tsx   # 下載專區
│   │
│   ├── activities/             # 活動資訊
│   │   ├── page.tsx            # 活動總覽
│   │   ├── camp/page.tsx       # 健腦思考營
│   │   ├── competition/page.tsx # 玩遊戲學邏輯思考競賽
│   │   ├── gat/page.tsx        # GAT 教學研習 (一)
│   │   └── gat-2/page.tsx      # GAT 教學研習 (二)
│   │
│   ├── gamification/page.tsx   # 遊戲化
│   ├── brain-fitness/page.tsx  # 健腦資訊
│   ├── partners/page.tsx       # 我們的夥伴
│   └── en/page.tsx             # English version (placeholder)
│
├── components/
│   └── layout/
│       ├── Navigation.tsx      # 響應式導航 (含下拉選單)
│       └── Footer.tsx          # 頁尾
│
└── public/
    └── images/
        ├── csi_logo.png        # 主要 logo
        ├── logo.png            # 備用 logo
        └── close.svg           # 關閉圖示
```

## Navigation Structure

導航包含以下主要項目及子選單：

1. **關於我們** (`/about`)
   - CSI-Brain 2015 新聞影片
   - LAC 全球訓練認證中心
   - 遊戲+邏輯=創新教學
   - 遊戲+邏輯=人才發展
   - GAT 邏輯思考教學
   - 邏輯思考認證簽約

2. **服務項目** (`/services`)
   - 顧問諮詢
   - 訓練培訓
   - CSI-Brain 遊戲軟體
   - CSI VOTE 職能投票
   - 下載專區

3. **遊戲化** (`/gamification`)

4. **活動資訊** (`/activities`)
   - 健腦思考營
   - 玩遊戲學邏輯思考競賽
   - GAT 教學研習 (一)
   - GAT 教學研習 (二)

5. **我們的夥伴** (`/partners`)

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Design Patterns

- **Page Layout:** 每個頁面使用 `pt-20` 補償固定導航列高度
- **Hero Section:** 使用 `bg-gradient-to-br from-orange-50 to-white` 漸層背景
- **Cards:** 圓角 (`rounded-xl`, `rounded-2xl`) + 淺色背景 (`bg-gray-50`, `bg-orange-50`)
- **Animations:** Framer Motion `initial={{ opacity: 0, y: 20 }}` 進場動畫
- **Hover Effects:** `hover:text-orange-500` 連結懸停效果

## Git Commits

- Do not add "Co-Authored-By: Claude" to commit messages
