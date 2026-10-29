import { contacts } from '~/lib/utils';

const _contacts = [
	{ title: 'Main phone number', details: contacts[0] },
	{
		title: 'Location',
		details: contacts[2],
	},
	{
		title: 'Email Address',
		details: contacts[1],
	},
];
const ContactInfo = () => {
	return (
		<div className="grid md:grid-cols-2 gap-4">
			{_contacts.map(({ details, title }) => (
				<div
					key={details}
					className="flex flex-col gap-2">
					<h3 className="font-bold text-xl">{title}</h3>
					<p>{details}</p>
				</div>
			))}
		</div>
	);
};

export default ContactInfo;
