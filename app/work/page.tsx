"use client";

import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type Experience = {
	name: string;
	description: string;
	link?: string;
	role: string;
	date: string;
};

const experiences: Experience[] = [
	{
		name: "Byt",
		description:
			"A chain-agnostic NFT marketplace at its core and a full service web3 launchpad.",
		link: "https://byt.io/launchpad",
		role: "Full Stack Engineer",
		date: "12.2021 - 09.2023 (1.75yrs)",
	},
	{
		name: "Ideafire",
		description:
			"Ideafire is where Youtube, TikTok, X (Twitter), Instagram and more all come together as one so you can discover and create things that define who you are and what you intend to do.",
		link: "https://www.youtube.com/watch?v=UUiRVTEBJaU",
		role: "Full Stack Engineer",
		date: "09.2019 - 12.2021 (2.25 yrs)",
	},
];

export default function Work() {
	return (
		<section className="flex items-start justify-center">
			<div className="max-w-md">
				<ul className="flex flex-col gap-10">
					<li>
						<p className="font-geist_mono text-xs">Currently searching...</p>
					</li>
					{experiences.map((experience, index) => {
						return (
							<li key={index}>
								<div className="flex items-center space-x-2">
									{experience.link && (
										<Link href={experience.link} passHref target="_blank">
											<ExternalLinkIcon />
										</Link>
									)}
									<h4 className="font-geist_mono text-ice-cold-500">
										{experience.name}
									</h4>
								</div>
								<p className="font-geist_mono text-sm py-1">{experience.role}</p>
								<p className="font-geist_mono text-xs py-1 text-firefly-500">
									{experience.date}
								</p>
								<div className="border-b-1 border-firefly-800 my-1" />
								<p className="text-firefly-400">{experience.description}</p>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}
