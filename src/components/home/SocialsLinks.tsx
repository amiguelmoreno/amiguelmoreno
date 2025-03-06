import { FaLinkedin, FaGithubSquare, FaEnvelopeSquare } from 'react-icons/fa'

export default function SocialsLinks() {
	return (
		<div className="mt-8 flex gap-12 text-secondary">
			<a target="_blank" href="https://www.linkedin.com/in/miguelmoreno00">
				<FaLinkedin className=" h-10 w-10 rounded-sm bg-primary [transition:all_0.6s] hover:bg-secondary hover:text-primary" />
			</a>
			<a target="_blank" href="https://github.com/amiguelmoreno">
				<FaGithubSquare className="h-10 w-10 rounded-sm bg-primary [transition:all_0.6s]  hover:bg-secondary hover:text-primary " />
			</a>
			<a target="_blank" href="mailto:amiguelmoreno00@gmail.com">
				<FaEnvelopeSquare className="h-10 w-10 rounded-sm bg-primary [transition:all_0.6s]  hover:bg-secondary hover:text-primary" />
			</a>
		</div>
	)
}
