import ProjectSection from './components/ProjectSection'
import Projects from './data/projects.json'
import Image from 'next/image'

export default function Home() {
	return (
		<>
			<header className='h-screen flex items-center justify-center text-center'>
				<h1 className='title font-serif text-4xl md:text-5xl p-8'>
					Portfolio de candidature chez <br />
					<strong className='block text-6xl md:text-8xl font-black mt-12'>Idéative.</strong>
				</h1>
			</header>
			<main className='mb-28'>
				{(Projects || []).map((project) => (
					<ProjectSection key={project.title} {...project} />
				))}
			</main>
			<footer className='wrapper flex flex-col md:flex-row justify-between py-8 font-serif'>
				<p>
					Développé par{' '}
					<a href='https://antoninbarbier.com' className='underline' target='_blank'>
						Antonin Barbier
					</a>
				</p>
				<a href='https://github.com/AntoninBarbier/portfolio-ideative' target='_blank'>
					<Image className='w-[20px] h-[20px]' src='/images/logos/github-mark.svg' width={20} height={20} alt='Github logo' />
				</a>
				<p>Stack: Next.js / TaildwindCSS / Vercel deployment</p>
			</footer>
		</>
	)
}
