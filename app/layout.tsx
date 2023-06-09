import '../styles/styles.css'
import { Inter } from 'next/font/google'
import Header from "@/app/header";
import Navigator from "@/app/components/navigator/Navigator";
import Contents from "@/app/components/contents";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Community',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Navigator />
        <Contents children={children} />
      </body>
    </html>
  )
}
