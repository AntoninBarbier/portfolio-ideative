import type { Metadata } from 'next'
import { DM_Serif_Display } from 'next/font/google'
import { Open_Sans } from 'next/font/google'
import './globals.css'

const dm_serif_display = DM_Serif_Display({
	subsets: ['latin'],
	weight: ['400'],
	variable: '--font-dm',
})

const open_sans = Open_Sans({
	subsets: ['latin'],
	variable: '--font-sans',
})

export const metadata: Metadata = {
	title: 'Ideative - Portfolio by Antonin Barbier',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='fr'>
			<body className={`${dm_serif_display.variable} ${open_sans.variable} font-sans`}>{children}</body>
		</html>
	)
}
