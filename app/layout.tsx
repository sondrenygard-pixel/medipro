import "./globals.css"

export const metadata = {
  title: "MediPro | Digitale verktøy for helsepersonell",
  description:
    "MediPro utvikler kliniske apper og digitale støtteverktøy for sykepleiere, ambulansepersonell, leger og virksomheter i norsk helsetjeneste.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  )
}
