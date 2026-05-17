import './globals.css'

export const metadata = {
  title: 'Arbitrage Dashboard',
  description: 'Live prediction market arbitrage opportunities via ODDPool',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full antialiased">{children}</body>
    </html>
  )
}
