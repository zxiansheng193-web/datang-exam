import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '大唐环宇名车岗位技能考试系统',
    template: '%s | 大唐环宇名车岗位技能考试系统',
  },
  description:
    '大唐环宇名车岗位技能考试系统，支持前台接待顾问、机修工、库房管理员三个岗位的在线考试，包含客观题自动评分和主观题人工评分功能。',
  keywords: [
    '大唐环宇',
    '岗位技能考试',
    '汽车维修',
    '前台接待',
    '机修工',
    '库房管理',
    '在线考试',
    '技能评估',
  ],
  authors: [{ name: '大唐环宇名车' }],
  generator: '大唐环宇名车考试系统',
  // icons: {
  //   icon: '',
  // },
  openGraph: {
    title: '大唐环宇名车岗位技能考试系统',
    description:
      '大唐环宇名车岗位技能考试系统，专业的汽车维修行业岗位技能评估平台。',
    siteName: '大唐环宇名车',
    locale: 'zh_CN',
    type: 'website',
    // images: [
    //   {
    //     url: '',
    //     width: 1200,
    //     height: 630,
    //     alt: '大唐环宇名车岗位技能考试系统',
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
        {children}
      </head>
      <body className={`antialiased`}>
        {isDev && <Inspector />}
        {children}
      </body>
    </html>
  );
}
