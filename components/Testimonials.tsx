'use client';
import Image from 'next/image';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from './ui/card';

const testimonials = [
	{
		name: 'Kwame Appiah',
		title: 'Environmentalist',
		image: '/supporter-1.jpg',
		headline: 'Empowering change',
		description:
			'Their work inspires hope and real change, fostering sustainable practices for a healthier planet.',
	},
	{
		name: 'Sarah Johnson',
		title: 'Activist',
		image: '/supporter-2.jpg',
		headline: 'Inspiring commitment',
		description:
			'Their collaborations create lasting impact and change lives, empowering communities to thrive.',
	},
	{
		name: 'Yaw Ofori-Atta',
		title: 'Educator',
		image: '/supporter-3.jpg',
		headline: 'Impactful work',
		description:
			'I trust their accountability and ethical practices, ensuring my contributions make a meaningful difference.',
	},
];

const images = [
	'/GRCF-logo.png',
	'/national_christain_Fundation1.png',
	'/urbanChurch1.png',
	'/cityOfRefugeChurch1.png',
	'/Maria1.png',
];

const Testimonials = () => {
	return (
		<>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{testimonials.map(({ name, title, image, headline, description }) => (
					<Card
						key={name}
						className="border-none shadow hover:shadow-2xl transition-all duration-300 transform-gpu delay-75">
						<CardHeader>
							<CardTitle className="text-2xl text-dark">{headline}</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-text">{description}</p>
						</CardContent>
						<CardFooter className="flex gap-x-4">
							<Image
								src={image}
								alt="Water"
								width={1000}
								height={1000}
								quality={100}
								className="rounded-full h-full w-auto"
							/>
							<div>
								<h4 className="font-bold">{name}</h4>
								<p className="text-sm text-text">{title}</p>
							</div>
						</CardFooter>
					</Card>
				))}
			</div>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{images.map((image) => (
					<div
						key={image}
						className="flex items-center justify-center bg-[#f2f2f2] rounded-2xl px-4 py-8 border border-dark/1git 0 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 transform-gpu delay-75">
						<Image
							src={image}
							alt="Water"
							width={1000}
							height={1000}
							quality={100}
							className="h-12 w-auto"
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default Testimonials;
