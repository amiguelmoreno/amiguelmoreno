import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import LogoM from './LogoM'
import { FaBriefcase, FaCodeFork, FaSchool } from 'react-icons/fa6'

interface NavbarItemProps {
	path: string
	type?: string
	tooltipText: string
}

export default function NavbarItem({ path, type, tooltipText }: NavbarItemProps) {
	return (
		<TooltipProvider delayDuration={300}>
			<Tooltip>
				<TooltipTrigger>
					<li>
						<a
							href={path}
							className="flex h-12 w-12  items-center justify-center rounded-sm bg-secondary fill-primary p-1.5 [transition:all_0.4s] hover:bg-primary hover:fill-white hover:text-white"
						>
							{type === 'svg' && <LogoM styles="h-full w-full hover:fill-white" />}
							{type === 'work' && <FaBriefcase className="h-7 w-7" />}
							{type === 'project' && <FaCodeFork className="h-7 w-7" />}
							{type === 'education' && <FaSchool className="h-7 w-7" />}
						</a>
					</li>
				</TooltipTrigger>
				<TooltipContent side="right" sideOffset={15}>
					<p>{tooltipText}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}