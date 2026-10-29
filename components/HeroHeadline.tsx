'use client';
import { useState, useEffect } from 'react';
import { cn } from '~/lib/utils';

const HeroHeadline = () => {
	const words = ['Love', 'Support', 'Empowerment'];
	const [currentWordIndex, setCurrentWordIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
		}, 1500); // Change word every 1 seconds

		return () => clearInterval(interval); // Clean up interval on unmount
	}, []);

	return (
		<h1 className="text-[44px] font-bold flex items-center md:flex-col md:items-start flex-wrap gap-x-2 gap-y-1 md:gap-y-0.5 lg:gap-y-1 pt-16 md:pt-0">
			<span className="leading-tight">Uplifting Vulnerable</span>
			<span className="leading-tight">Communities with</span>
			<span className="relative inline-flex items-center h-[50px] w-[270px] md:w-[200px] lg:w-[200px]">
				{words.map((word, index) => (
					<span
						key={index}
						className={cn(
							'absolute inset-0 flex items-center transition-transform duration-1000 ease-in-out',
							'text-primary',
							currentWordIndex === index ? 'fade-slide-in' : 'fade-slide-out'
						)}>
						{word}
					</span>
				))}
			</span>
		</h1>
	);
};

export default HeroHeadline;
