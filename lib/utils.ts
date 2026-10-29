import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const contacts = [
	'+16 163866020',
	'refugereliefservices@gmail.com',
	'525 Cheshire Dr. NE. Grand Rapids, MI 49505',
];
