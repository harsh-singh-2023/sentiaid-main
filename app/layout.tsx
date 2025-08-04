import './globals.css'

export const metadata = {
  title: 'SentiAid - AI Sign Language Converter',
  description: 'Empowering Media, Government, Education, and Public Spaces with AI-powered Sign Language Accessibility',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}