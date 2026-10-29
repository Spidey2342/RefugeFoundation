'use client';
import Link from 'next/link';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '~/lib/utils';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet';
import { HiBars2 } from 'react-icons/hi2';
import { RiCloseLargeFill } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export const links = [
	{ href: '/', label: 'Home' },
	{ href: '/gallery', label: 'Gallery' },
	{ href: '/donation', label: 'Donation' },
	{ href: '/events', label: 'Events' },
	{ href: '/contact', label: 'Contact' },
];

const Navbar = () => {
	const [scroll, setScroll] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			setScroll(window.scrollY > 50);
		});
	}, []);

	const pathname = usePathname();
	return (
		<header
			className={cn(
				'sticky z-50 top-0 mx-auto flex justify-center  w-full ',
				scroll === true ? 'bg-white/80 backdrop-blur border-b' : 'bg-[#f2f2f2]'
			)}>
			<div className="max-w-[1440px] w-full flex justify-between items-center px-4 py-4 md:px-8 xl:px-12 z-50 gap-x-4">
				<Link href={'/'}>
					<Image
						src={'/logos/light-theme-logo.svg'}
						alt="Refugee Relief"
						height={1000}
						width={1000}
						quality={100}
						className="w-auto h-12 md:h-14 "
					/>
				</Link>
				<nav className="hidden md:flex bg-dark rounded-full px-4 h-10 gap-x-6 font-medium text-text  items-center text-sm lg:text-base">
					{links.map(({ label, href }) => {
						const isActive = pathname === href;
						return (
							<Link
								key={href}
								href={href}
								className={cn(
									'transition-all duration-300 text-zinc-50/75 hover:text-zinc-50 hover:scale-110',
									isActive &&
										'bg-white text-dark rounded-full px-3 py-0.5 hover:scale-100 hover:text-dark'
								)}>
								{label}
							</Link>
						);
					})}
				</nav>
				<div className="flex items-center gap-x-2 lg:gap-x-4">
					<Button
						variant={'default'}
						className="hidden md:flex bg-primary hover:bg-dark rounded-full h-10 w-24 lg:w-32 text-sm lg:text-base">
						<Link href="/donation">Donate</Link>
					</Button>
					<Button
						variant={'outline'}
						className="hidden md:flex rounded-full h-10 border-dark text-dark hover:border-primary hover:bg-primary hover:text-white w-24 lg:w-32 text-sm">
						<Link href="/get-involved">Get Involved</Link>
					</Button>
				</div>

				<Sheet>
					<SheetTrigger className="md:hidden">
						<HiBars2
							size={28}
							color="#101840"
						/>
					</SheetTrigger>
					<SheetContent
						className="md:hidden p-4"
						side={'left'}>
						<div className="flex flex-col h-full justify-between gap-y-8">
							<div className="text-2xl font-medium flex justify-between items-center">
								<Link href={'/'}>
									<Image
										src={'/logos/light-theme-logo.svg'}
										alt="Refugee Relief"
										height={1000}
										width={1000}
										quality={100}
										className="w-auto h-11"
									/>
								</Link>
								<SheetClose>
									<RiCloseLargeFill
										size={18}
										color="#101840"
									/>
								</SheetClose>
							</div>
							<nav className="grow flex flex-col gap-y-4 font-medium text-dark text-xl">
								{links.map(({ label, href }) => {
									const isActive = pathname === href;
									return (
										<Link
											key={href}
											href={href}
											className={cn(
												'transition-all duration-300',
												isActive && 'text-primary'
											)}>
											<SheetClose>{label}</SheetClose>
										</Link>
									);
								})}
							</nav>
							<div className="flex flex-col gap-y-2">
								<Button
									variant={'default'}
									className="bg-primary hover:bg-dark rounded-full">
									<Link href="/donation">
										<SheetClose>Donate</SheetClose>
									</Link>
								</Button>
								<Button
									variant={'default'}
									className="bg-primary hover:bg-dark rounded-full">
									<Link href="/get-involved">
										<SheetClose>Get Involved</SheetClose>
									</Link>
								</Button>
							</div>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
};

export default Navbar;
