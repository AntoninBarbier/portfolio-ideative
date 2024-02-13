import Button from '../UI/Button'
import Image from 'next/image'

interface ProjectSectionProps {
	image: string
	title: string
	color: string
	subtitle: string
	text: string
	gradient: string
	link: string
	theme: string
}

const ProjectSection = ({ image, title, color, subtitle, text, gradient, link, theme }: ProjectSectionProps) => {
	return (
		<div
			className='w-[calc(100%-3rem)] md:w-[calc(100%-6rem)] grid grid-cols-1 lg:grid-cols-2 p-8 md:p-28 mx-auto mb-6 md:mb-12 rounded-3xl items-center justify-center gap-12 md:gap-20'
			style={{
				background: gradient,
				color: theme === 'light' ? '#000000' : '#FFFFFF',
			}}
		>
			<div className='image'>
				<Image src={image} alt={`${title} - ${subtitle} project screenshot`} width={1000} height={607} />
			</div>
			<div className='flex flex-col gap-8'>
				<h2 className='animated_text font-serif font-black text-3xl md:text-4xl md:text-right md:pr-8' style={{ color: color }}>
					{title}
				</h2>
				<h3 className='animated_text font-serif italic text-2xl md:text-right pr-8'>{subtitle}</h3>
				<p dangerouslySetInnerHTML={{ __html: text }} className='animated_text' />
				<Button href={link}>Voir le projet</Button>
			</div>
		</div>
	)
}

export default ProjectSection
