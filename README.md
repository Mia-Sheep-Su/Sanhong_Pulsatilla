# Sanhong\_Pulsatilla

這是一個使用 React、TypeScript 和 Vite 構建的前端專案，旨在展示白頭翁（Chinese bulbul）的相關資訊。專案採用模組化設計，具備良好的可維護性與擴展性。

## 🔧 技術棧

* [React](https://react.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Vite](https://vitejs.dev/)
* [Lucide React](https://lucide.dev/)：用於 SVG 圖示
* [React Router DOM](https://reactrouter.com/)：用於路由管理
* [Swiper](https://swiperjs.com/) 或 [react-slick](https://react-slick.neostack.com/)：用於輪播展示
* CSS Modules：用於樣式管理

## 📁 專案結構

```
├── public/                 # 公共資源
├── src/                    # 原始碼
│   ├── components/         # 可重用的元件
│   ├── pages/              # 頁面元件
│   ├── styles/             # CSS 模組
│   ├── App.tsx             # 主應用元件
│   └── main.tsx            # 入口文件
├── .gitignore              # Git 忽略文件
├── index.html              # HTML 模板
├── package.json            # 項目配置
├── tsconfig.json           # TypeScript 配置
└── vite.config.ts          # Vite 配置
```



## 🚀 快速開始

### 安裝依賴

```bash
npm install
```



### 啟動開發伺服器

```bash
npm run dev
```



預設情況下，開發伺服器會在 [http://localhost:5173/](http://localhost:5173/) 運行。

## 📦 構建生產版本

```bash
npm run build
```



構建後的文件將輸出到 `dist/` 目錄，可部署到靜態服務器。

## 📝 開發者

* GitHub: [Mia-Sheep-Su](https://github.com/Mia-Sheep-Su)
