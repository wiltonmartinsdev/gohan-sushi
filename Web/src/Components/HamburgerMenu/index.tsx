import { AnimatePresence, motion } from "framer-motion";
import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";

export const HamburgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Hamburger
				toggled={isOpen}
				toggle={setIsOpen}
			/>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -100 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -100 }}
						className="absolute top-28 left-0 right-0 bg-black/90 text-white flex flex-col items-center rounded-b-2xl z-10">
						<ul className="flex flex-col items-center gap-8 py-8">
							<li>
								<a href="#home">Início</a>
							</li>
							<li>
								<a href="#about">Sobre Nós</a>
							</li>
							<li>
								<a href="#menu">Cardápio</a>
							</li>
							<li>
								<a href="#location">Localização</a>
							</li>
							<li>
								<a href="contact">Contato</a>
							</li>
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};
