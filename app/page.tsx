import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
	{ name: "Blog", href: "/blog" },
	{ name: "Contact", href: "/contact" },
];

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-blue-200 via-blue-600/20 to-blue-400">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-lg duration-500 text-zinc-500 hover:text-zinc-300"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			{/* <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" /> */}
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>
			<div className="w-max">
				<h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-9 text-7xl text-white font-bold">Volunteer Network</h1>
			</div>

			{/* <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" /> */}
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-base text-zinc-500 ">
					volunteer network expands the circle of volunteers in the {" "}
					<Link
						target="_blank"
						href="https://www.pref.hiroshima.lg.jp/"
						className="underline duration-500 hover:text-zinc-300"
					>
						Hiroshima are
					</Link>

					<br />
					and working with{" "}
					<Link
						target="_blank"
						href="https://www.pref.hiroshima.lg.jp/site/english/"
						className="underline duration-500 hover:text-zinc-300"
					>
						Hiroshima Prefectural Gov.
					</Link>{" "}
				</h2>
			</div>
		</div>
	);
}
