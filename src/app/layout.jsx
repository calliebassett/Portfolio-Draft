import './globals.css'

export const metadata = {
  title: 'Callie Bassett — Portfolio',
  description: 'Mechanical engineer grounded in real‑world service.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}
