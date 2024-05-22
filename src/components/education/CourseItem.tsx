import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog'
import { Info, Link, ReceiptText } from 'lucide-react'

interface CourseProps {
	id: number
	title: string
	institution: string
	date: string
	duration?: string
	description: string
	skills: string[]
	imageInstitution: string
	imageEducation: string
	certification?: string
}

export default function CourseItem({ course }: { course: CourseProps }) {
	return (
		<Dialog key={course.id}>
			<DialogTrigger className="group flex w-full items-center justify-between rounded-sm bg-primary/20 p-2 pl-4 ">
				<p className="text-xl font-light  group-hover:font-normal">{course.title}</p>

				<div className="flex items-center gap-2 text-xs">
					<p className="text-sm font-normal">More Details</p>
					<ReceiptText />
				</div>
			</DialogTrigger>
			<DialogContent className="h-[500px] min-w-[700px] bg-secondary pr-0">
				<DialogHeader>
					<DialogTitle className="pb-4 text-2xl font-normal">{course.title}</DialogTitle>
					<DialogDescription className="max-h-[430px] w-full overflow-y-scroll px-4 pr-8">
						<div className="mb-8 flex flex-col gap-5">
							<div className="flex gap-6">
								<div className="relative w-fit">
									<img
										src={course.imageEducation}
										width={250}
										alt={course.title}
										className="rounded-sm"
									></img>
									<img
										className="absolute -bottom-1 -right-1 rounded-sm bg-primary p-1"
										src={course.imageInstitution}
										width={70}
										alt={course.title}
									></img>
								</div>
								<div className="flex flex-col gap-2">
									<p className="text-base font-light">
										Duration: <span className="text-xl font-normal">{course.duration}</span>
									</p>
									<p className="text-base font-light">
										Institution: <span className="text-xl font-normal">{course.institution}</span>
									</p>
									{course.certification && (
										<a
											href={course.certification}
											target="_blank"
											className="mt-3 flex  items-center justify-center gap-1 text-base font-normal hover:underline"
										>
											<Link className="h-4 w-4" />
											<p>Certification link</p>
										</a>
									)}
								</div>
							</div>
							<p className="my-6 text-base font-light">{course.description}</p>

							<div className="flex flex-col gap-5 ">
								<h4 className="text-xl">What did I learn in this course?</h4>

								<div className="flex flex-col gap-2 pl-3 text-base font-light">
									{course.skills.map((skill, i) => (
										<p key={i}>- {skill}</p>
									))}
								</div>
							</div>
						</div>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}
