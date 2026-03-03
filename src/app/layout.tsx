import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '新应用 | 扣子编程',
    template: '%s | 扣子编程',
  },
  description:
    '扣子编程是一款一站式云端 Vibe Coding 开发平台。通过对话轻松构建智能体、工作流和网站，实现从创意到上线的无缝衔接。',
  keywords: [
    '扣子编程',
    'Coze Code',
    'Vibe Coding',
    'AI 编程',
    '智能体搭建',
    '工作流搭建',
    '网站搭建',
    '网站部署',
    '全栈开发',
    'AI 工程师',
  ],
  authors: [{ name: 'Coze Code Team', url: 'https://code.coze.cn' }],
  generator: 'Coze Code',
  // icons: {
  //   icon: '',
  // },
  openGraph: {
    title: '扣子编程 | 你的 AI 工程师已就位',
    description:
      '我正在使用扣子编程 Vibe Coding，让创意瞬间上线。告别拖拽，拥抱心流。',
    url: 'https://code.coze.cn',
    siteName: '扣子编程',
    locale: 'zh_CN',
    type: 'website',
    // images: [
    //   {
    //     url: '',
    //     width: 1200,
    //     height: 630,
    //     alt: '扣子编程 - 你的 AI 工程师',
    //   },
    // ],
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Coze Code | Your AI Engineer is Here',
  //   description:
  //     'Build and deploy full-stack applications through AI conversation. No env setup, just flow.',
  //   // images: [''],
  // },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <html lang="en">
      <head>
        <style>{`
          @media print {
            /* 设置打印页面 */
            @page {
              size: A4;
              margin: 20mm;
            }
            
            /* 重置页面 */
            html, body {
              margin: 0 !important;
              padding: 0 !important;
              height: auto !important;
              min-height: auto !important;
              overflow: visible !important;
              background: white !important;
            }
            
            /* 隐藏所有元素 */
            body * {
              visibility: hidden;
            }
            
            /* 只显示打印卡片及其内容 */
            .print-score-card,
            .print-score-card * {
              visibility: visible;
            }
            
            /* 定位打印卡片 */
            .print-score-card {
              display: block !important;
              position: relative !important;
              left: auto !important;
              top: auto !important;
              width: 100% !important;
              height: auto !important;
              min-height: auto !important;
              padding: 20px !important;
              margin: 0 !important;
              background: white !important;
              border: none !important;
              box-shadow: none !important;
              page-break-after: avoid !important;
              page-break-before: avoid !important;
            }
            
            /* 确保背景色打印 */
            * {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            
            /* 防止分页 */
            .print-score-card,
            .print-score-card * {
              page-break-inside: avoid !important;
            }
          }
        `}</style>
      </head>
      <body className={`antialiased`}>
        {isDev && <Inspector />}
        {children}
      </body>
    </html>
  );
}
