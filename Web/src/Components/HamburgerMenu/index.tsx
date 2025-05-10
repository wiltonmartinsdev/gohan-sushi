import { AnimatePresence, motion } from "framer-motion";
import { Divide as Hamburger } from "hamburger-react";
import { useState, useEffect, useCallback } from "react";
import {
	scrollToSection as scrollUtil,
	getHeaderHeight,
	getSectionSpacing,
} from "../../lib/utils";

export const HamburgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("");

	// Função para navegação suave com fechamento do menu ao clicar
	const scrollToSection = useCallback((sectionId: string) => {
		scrollUtil(sectionId);
		setIsOpen(false);
	}, []);

	useEffect(() => {
		const sections = ["home", "about", "menu", "location", "contact"];

		const handleScroll = () => {
			// Obtém dinamicamente a altura do header usando a função utilitária
			const headerHeight = getHeaderHeight();

			// Verificar qual seção está visível
			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const { offsetTop, offsetHeight } = element;

					// Adicionar uma tolerância específica baseada na seção usando a função utilitária
					const defaultTolerance = 20; // Tolerância padrão
					const tolerance = getSectionSpacing(
						section,
						defaultTolerance
					);

					// Adiciona a altura do header e tolerância à posição de rolagem
					const scrollPosition =
						window.scrollY + headerHeight + tolerance;

					if (
						scrollPosition >= offsetTop &&
						scrollPosition < offsetTop + offsetHeight
					) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		// Definir "home" como seção ativa inicial se estiver no topo da página
		if (window.scrollY < 100) {
			setActiveSection("home");
		} else {
			handleScroll();
		}

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<Hamburger
				toggled={isOpen}
				toggle={setIsOpen}
				color="#e60000"
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
								<a
									href="#home"
									className={
										activeSection === "home"
											? "text-[#e60000]"
											: ""
									}
									onClick={(e) => {
										e.preventDefault();
										scrollToSection("home");
									}}>
									Início
								</a>
							</li>
							<li>
								<a
									href="#about"
									className={
										activeSection === "about"
											? "text-[#e60000]"
											: ""
									}
									onClick={(e) => {
										e.preventDefault();
										scrollToSection("about");
									}}>
									Sobre Nós
								</a>
							</li>
							<li>
								<a
									href="#menu"
									className={
										activeSection === "menu"
											? "text-[#e60000]"
											: ""
									}
									onClick={(e) => {
										e.preventDefault();
										scrollToSection("menu");
									}}>
									Cardápio
								</a>
							</li>
							<li>
								<a
									href="#location"
									className={
										activeSection === "location"
											? "text-[#e60000]"
											: ""
									}
									onClick={(e) => {
										e.preventDefault();
										scrollToSection("location");
									}}>
									Localização
								</a>
							</li>
							<li>
								<a
									href="#contact"
									className={
										activeSection === "contact"
											? "text-[#e60000]"
											: ""
									}
									onClick={(e) => {
										e.preventDefault();
										scrollToSection("contact");
									}}>
									Contato
								</a>
							</li>
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};
