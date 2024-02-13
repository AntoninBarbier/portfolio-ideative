import { ReactNode } from 'react'
import styles from './styles.module.css'

interface ButtonProps {
	children: ReactNode
	href: string
}

const Button = ({ children, href }: ButtonProps) => {
	return (
		<a
			href={href}
			target='blank'
			className={`${styles.button} inline-block animated_text font-serif font-bold underline font-merriweather p-3 self-start`}
		>
			{children}
		</a>
	)
}

export default Button
