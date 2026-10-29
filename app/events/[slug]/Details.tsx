interface DetailsProps {
  title: string;
  details: string;
}
const Details = ({ title, details }: DetailsProps) => {
  return (
    <div className="grid sm:grid-cols-2 gap-2 sm:gap-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{details}</p>
    </div>
  );
};

export default Details;
