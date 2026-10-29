'use client';
import Link from 'next/link';
import { cn, contacts } from '~/lib/utils';
import Image from 'next/image';

const links = [
	{ label: 'About Us', href: '/about' },
	{ label: 'Diverse Programs', href: '/programs' },
	{ label: 'Volunteer', href: '/get-involved' },
	{ label: 'News and Blog', href: '/news' },
];
const legals = [
	{ label: 'Terms of use', href: '/terms-of-use' },
	{ label: 'Privacy Policy', href: '/privacy-policy' },
];

const _contacts = contacts;

const Footer = () => {
	const d = new Date();
	const date = d.getFullYear();
	return (
		<footer className="flex justify-center fixed bottom-0 z-10 bg-dark w-full">
			<div className="max-w-[1440px] w-full flex flex-col gap-y-8 text-white px-4 md:px-8 xl:px-12 py-8">
				<div className="grid lg:grid-cols-12 lg:gap-x-12 gap-y-8 text-sm">
					<div className="flex flex-col gap-y-4 items-start lg:col-span-3">
						<Image
							src={'/logos/dark-theme-logo.svg'}
							alt="Refugee Relief"
							height={1000}
							width={1000}
							quality={100}
							className="w-auto h-11"
						/>
						<p className="max-w-sm text-base">
							Creating change with youth through leadership, skills, and
							mentorship.
						</p>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:col-span-9 col-span-2 gap-x-4">
						<div className="hidden md:flex flex-col gap-y-4 items-start">
							<h2 className="text-white font-bold text-xl">Contacts</h2>
							<div className="flex flex-col font-medium gap-y-2">
								{_contacts.map((contact) => {
									return (
										<p
											key={contact}
											className={cn('scale-100 transition-all duration-300')}>
											{contact}
										</p>
									);
								})}
							</div>
						</div>
						<div className="flex flex-col gap-y-4 items-start">
							<h2 className="text-white font-bold text-xl">Company</h2>
							<nav className="flex flex-col font-medium text-text gap-y-2">
								{links.map(({ label, href }) => {
									return (
										<Link
											key={href}
											href={href}
											className={cn(
												'hover:text-white scale-100 transition-all duration-300'
											)}>
											{label}
										</Link>
									);
								})}
							</nav>
						</div>
						<div className="flex flex-col gap-y-4 items-start">
							<h2 className="text-white font-bold text-xl">Legal</h2>
							<nav className="flex flex-col font-medium text-text gap-y-2">
								{legals.map(({ label, href }) => {
									return (
										<Link
											key={href}
											href={href}
											className={cn(
												'hover:text-white scale-100 transition-all duration-300'
											)}>
											{label}
										</Link>
									);
								})}
							</nav>
						</div>
					</div>
				</div>
				<div className="h-[1px] bg-text w-full"></div>
				<p className="text-center">
					&copy;Refuge Relief Service {date}. All rights reserved
				</p>
			</div>
		</footer>
	);
};

export default Footer;
