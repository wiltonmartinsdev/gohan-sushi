import {
	getActiveSection,
	getHeaderHeight,
	scrollToSection,
} from "@/lib/utils";
import { useCallback, useEffect, useState } from "react";

interface MainNavigationProps {
	className?: string;
}

export function MainNavigation({ className = "" }: MainNavigationProps) {
	const [activeSection, setActiveSection] = useState("home");
	const [isNavigating, setIsNavigating] = useState(false);

	// Função para navegação suave com atualização da seção ativa
	const handleNavigate = useCallback(
		(sectionId: string, e?: React.MouseEvent) => {
			if (e) e.preventDefault();
			// Atualiza imediatamente a seção ativa para evitar efeito flickering
			setActiveSection(sectionId);
			// Marca que estamos em processo de navegação
			setIsNavigating(true);
			scrollToSection(sectionId);

			setTimeout(() => {
				setIsNavigating(false);
			}, 200);
		},
		[]
	);

	// Detectar seção ativa ao rolar a página
	useEffect(() => {
		const sections = ["home", "about", "menu", "location", "contact"];

		const handleScroll = () => {
			// Se estamos no meio de uma navegação por clique, não atualiza a seção ativa
			if (isNavigating) return;

			// Obtém dinamicamente a altura do header
			const headerHeight = getHeaderHeight();

			// Se estiver no topo da página, definir "home" como ativa
			if (window.scrollY < 100) {
				setActiveSection("home");
				return;
			}

			const activeSection = getActiveSection(sections, headerHeight);
			setActiveSection(activeSection);
		};

		// Definir "home" como seção ativa inicial se estiver no topo da página
		if (window.scrollY < 100) {
			setActiveSection("home");
		} else {
			handleScroll();
		}

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isNavigating]);

	return (
		<nav className={`hidden lg:block ${className}`}>
			<ul className="flex gap-8">
				<li>
					<span>
						<a
							href="#home"
							className={
								activeSection === "home"
									? "text-[#e60000]"
									: "hover:text-[#e60000]/80"
							}
							onClick={(e) => handleNavigate("home", e)}>
							Início
						</a>
					</span>
				</li>
				<li>
					<span>
						<a
							href="#about"
							className={
								activeSection === "about"
									? "text-[#e60000]"
									: "hover:text-[#e60000]/80"
							}
							onClick={(e) => handleNavigate("about", e)}>
							Sobre Nós
						</a>
					</span>
				</li>
				<li>
					<span>
						<a
							href="#menu"
							className={
								activeSection === "menu"
									? "text-[#e60000]"
									: "hover:text-[#e60000]/80"
							}
							onClick={(e) => handleNavigate("menu", e)}>
							Cardápio
						</a>
					</span>
				</li>
				<li>
					<span>
						<a
							href="#location"
							className={
								activeSection === "location"
									? "text-[#e60000]"
									: "hover:text-[#e60000]/80"
							}
							onClick={(e) => handleNavigate("location", e)}>
							Localização
						</a>
					</span>
				</li>
				<li>
					<span>
						<a
							href="#contact"
							className={
								activeSection === "contact"
									? "text-[#e60000]"
									: "hover:text-[#e60000]/80"
							}
							onClick={(e) => handleNavigate("contact", e)}>
							Contato
						</a>
					</span>
				</li>
			</ul>
		</nav>
	);
}
