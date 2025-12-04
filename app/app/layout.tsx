import './globals.css'

export const metadata = {
  title: 'FrameForge',
  description: 'Masculine reboot',
}

export default function RootLayout({
  children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="bg-black text-white">{children}</body>
    </html>
  )
}
