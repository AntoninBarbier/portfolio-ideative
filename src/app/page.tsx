import ProjectSection from './components/ProjectSection'
import Projects from './data/projects.json'

export default function Home() {
	return (
		<>
			<header className='h-screen flex items-center justify-center text-center'>
				<h1 className='title font-serif text-6xl'>
					Portfolio de candidature chez <br />
					<strong className='block font-black mt-10'>Idéative.</strong>
				</h1>
			</header>
			<main>
				{(Projects || []).map((project) => (
					<ProjectSection key={project.title} {...project} />
				))}
			</main>
		</>
	)
}
