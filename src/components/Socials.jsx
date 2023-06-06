/* eslint-disable react/prop-types */
const Socials = ({ social }) => {
	const { icon, platform, link, bgcolor } = social;

	return (
		<div
			onClick={() => window.open(link, "_blank")}
			className={`bg-slate-800 z-10 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-2`}
		>
			<img src={icon} alt={platform} className="w-1/2 h-1/2 object-contain" />
		</div>
	);
};

export default Socials;
