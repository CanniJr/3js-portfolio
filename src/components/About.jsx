/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../HOC";

const ServiceCard = ({ index, title, icon }) => {
	return (
		<Tilt className=" w-[75%] ">
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
			>
				<div
					options={{
						max: 45,
						scale: 1,
						speed: 450,
					}}
					className="bg-tertiary rounded-[20px] py-2 px-12 min-h-[120px] flex justify-evenly items-center flex-col"
				>
					<img src={icon} alt={title} className="w-16 h-16 object-contain" />
					<h3 className="text-white text-[20px] font-bold text-center">
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	return (
		<>
			<motion.div
				variants={textVariant()}
				className="mt-4 text-secondary text-[17px] max-w-3xl leadin-[30px]"
			>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview</h2>
			</motion.div>
			<motion.p variants={fadeIn("", "", 0.1, 1)}>
				A Front end developer based in Seattle, Washington. Passionate in
				developing responsive designs for web applications.
			</motion.p>
			<div className="mt-10 flex flex-wrap gap-10 justify-center">
				{services.map((service, i) => (
					<ServiceCard key={service.title} index={i} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
