import {
	scrollToSection,
	getHeaderHeight,
	getSectionSpacing,
} from "./lib/utils";
import { useEffect, useState, useCallback } from "react";

import clockIcon from "@/assets/clockIcon.svg";
import facebookIcon from "@/assets/facebookIcon.svg";
import imageSushiAbout from "@/assets/image-sushi-about.jpg";
import imageSushiLocation from "@/assets/image-sushi-location.jpg";
import instagramIcon from "@/assets/instagramIcon.svg";
import locationIcon from "@/assets/locationIcon.svg";
import logoSushi from "@/assets/logo-sushi.png";
import logoSushiMd from "@/assets/logo-sushi-md.png";
import whatsAppIcon from "@/assets/whatsappIcon.svg";

import { Carousel } from "./Components/Carousel";
import { Footer } from "./Components/Footer";
import { HamburgerMenu } from "./Components/HamburgerMenu";
import { MenuCarousel } from "./Components/MenuCarousel";
import { ParallaxSection } from "./Components/ParallaxSection";

export function App() {
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

			// Restaura o estado de navegação após a animação terminar
			setTimeout(() => {
				setIsNavigating(false);
			}, 1000); // Um segundo é geralmente suficiente para a animação de rolagem
		},
		[]
	);

	// Ajuste para navegação direta por hash (por exemplo: #menu, #contact)
	useEffect(() => {
		const handleHashNavigation = () => {
			if (window.location.hash) {
				// Esperar um momento para garantir que a página carregou completamente
				setTimeout(() => {
					const sectionId = window.location.hash.substring(1); // Remove o # do hash
					scrollToSection(sectionId);
				}, 300);
			}
		};

		// Realizar o ajuste no carregamento inicial da página
		handleHashNavigation();

		// Adicionar ouvinte para mudanças no hash (navegação interna)
		window.addEventListener("hashchange", handleHashNavigation);

		// Limpeza ao desmontar o componente
		return () => {
			window.removeEventListener("hashchange", handleHashNavigation);
		};
	}, []);

	// Detectar seção ativa ao rolar a página
	useEffect(() => {
		const sections = ["home", "about", "menu", "location", "contact"];

		const handleScroll = () => {
			// Se estamos no meio de uma navegação por clique, não atualiza a seção ativa
			if (isNavigating) return;

			// Obtém dinamicamente a altura do header
			const headerHeight = getHeaderHeight();

			// Verificar qual seção está visível
			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const { offsetTop, offsetHeight } = element;

					// Adicionar uma tolerância específica baseada na seção
					const defaultTolerance = 20;
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
	}, [isNavigating]);

	return (
		<>
			<header className="h-28 text-white bg-black/90 flex justify-between items-center px-10 fixed top-0 left-0 right-0 z-50">
				<img
					src={logoSushi}
					alt="Logo Gohan Sushi"
				/>

				<HamburgerMenu />

				<nav className="hidden lg:block">
					<ul className="flex gap-8">
						<li>
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
						</li>
						<li>
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
						</li>
						<li>
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
						</li>
						<li>
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
						</li>
						<li>
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
						</li>
					</ul>
				</nav>
			</header>

			<main>
				<section id="home">
					<Carousel />
				</section>

				<div className="space-y-10">
					<ParallaxSection
						id="about"
						imageUrl={imageSushiAbout}>
						<div className="px-8 py-14 mx-auto sm:w-3/4 md:w-[70%]">
							<h2 className="relative text-center text-3xl font-extrabold text-[#e60000] mb-14 after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:transform after:-translate-x-1/2 after:w-[70px] after:h-[3px] after:bg-[#e60000] after:rounded-xl">
								Sobre Nós
							</h2>

							<div className="bg-[#f5f3f2]/90 backdrop-blur-sm rounded-lg px-10 py-12 lg:flex lg:gap-8 xl:items-center">
								<div className="flex justify-center mb-8 w-full lg:w-[1200px]">
									<img
										src={logoSushi}
										alt=""
										className="lg:hidden"
										loading="lazy"
									/>

									<img
										src={logoSushiMd}
										alt=""
										className="hidden lg:flex"
										loading="lazy"
									/>
								</div>

								<div className="xl:text-xl">
									<p>
										O Gohan Sushi traz para Oiapoque o
										verdadeiro sabor da culinária japonesa
										com um toque amazônico. Nosso
										empreendimento combina técnicas
										tradicionais japonesas com ingredientes
										frescos da região do Amapá.
									</p>

									<p className="mt-4 mb-4">
										Aberto de terça a domingo, das 19h até
										23h30, oferecemos uma experiência
										gastronômica única que vai além do
										comum.
									</p>

									<p className="text-[#e60c00] font-extrabold w-[175px] sm:w-auto border-l-[3px] border-l-[#e60000] pl-4">
										"Descubra a felicidade em cada mordida!
										Quem disse que felicidade não se compra
										nunca experimentou nosso sushi."
									</p>
								</div>
							</div>
						</div>
					</ParallaxSection>

					<div className="px-8">
						<section id="menu">
							<h2 className="relative text-center text-3xl font-extrabold mb-5 text-[#e60000] after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:transform after:-translate-x-1/2 after:w-32 after:h-[3px] after:bg-[#e60000] after:rounded-xl">
								Nosso Cardápio
							</h2>

							<MenuCarousel />
						</section>
					</div>

					<ParallaxSection
						id="location"
						imageUrl={imageSushiLocation}>
						<div className="px-8 py-14">
							<h2 className="relative text-center text-3xl font-extrabold text-[#e60000] mb-14 after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:transform after:-translate-x-1/2 after:w-36 after:h-[3px] after:bg-[#e60000] after:rounded-xl">
								Nossa Localização
							</h2>

							<div className="bg-[#f5f3f2]/90 backdrop-blur-sm rounded-lg px-10 py-12 lg:flex lg:gap-8 lg:w-[910px] lg:h-[550px] xl:w-[1160px] xl:mx-auto">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15923.44338967811!2d-51.83913424065305!3d3.8400343381398288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d6cc54253bb1367%3A0x8c2f602bd1cd2f75!2sOiapoque%2C%20AP%2C%2068980-000!5e0!3m2!1spt-BR!2sbr!4v1745845385526!5m2!1spt-BR!2sbr"
									width="100%"
									height="450"
									style={{ border: 0, borderRadius: 10 }}
									allowFullScreen={true}
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"></iframe>

								<div>
									<div className="bg-white rounded-lg mt-8 p-8 space-y-4 lg:mt-0 lg:h-full xl:w-[395px]">
										<h3 className="relative text-[28px] font-extrabold text-[#e60000] text-center mb-10 after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:transform after:-translate-x-1/2 after:w-14 after:h-[3px] after:bg-[#e60000] after:rounded-xl">
											Endereço
										</h3>
										<div className="flex gap-2 items-center">
											<img
												src={locationIcon}
												alt="Ícone de localização"
											/>
											<p className="text-lg">
												Rua Principal, 123, Centro,
												Oiapoque-Ap
											</p>
										</div>

										<div className="flex gap-4 items-center">
											<img
												src={clockIcon}
												alt="Ícone de relógio"
											/>
											<p className="text-lg">
												Aberto de terça a domingo
											</p>
										</div>

										<div className="flex gap-4 items-center">
											<img
												src={clockIcon}
												alt="Ícone de relógio"
											/>
											<p className="text-lg">
												Das 19h até às 23h30
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</ParallaxSection>

					<div className="px-8 py-14">
						<section id="contact">
							<h2 className="relative text-center text-3xl font-extrabold  text-[#e60000] mb-14 after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:transform after:-translate-x-1/2 after:w-36 after:h-[3px] after:bg-[#e60000] after:rounded-xl">
								Entre em Contato
							</h2>

							<div className="bg-[#f5f3f2] rounded-lg px-10 py-12 space-y-8">
								<div className="bg-white rounded-lg p-8 space-y-4 flex flex-col items-center">
									<img
										src={whatsAppIcon}
										alt=""
									/>

									<p className="font-extrabold text-xl">
										Delivery
									</p>

									<a
										href="https://wa.me/+5596981108122"
										target="_blank"
										rel="noopener noreferrer"
										className="text-[#e60000] font-bold">
										(96) 98110-8122
									</a>
								</div>

								<div className="bg-white rounded-lg p-8 space-y-4 flex flex-col items-center">
									<img
										src={facebookIcon}
										alt=""
									/>

									<p className="font-extrabold text-xl">
										Facebook
									</p>

									<a
										href="https://www.facebook.com/share/1Fbmd8fwJg/?mibextid=wwXIfr"
										target="_blank"
										rel="noopener noreferrer"
										className="text-[#e60000] font-bold">
										Gohan Sushi
									</a>
								</div>

								<div className="bg-white rounded-lg p-8 space-y-4 flex flex-col items-center">
									<img
										src={instagramIcon}
										alt=""
									/>

									<p className="font-extrabold text-xl">
										Instagram
									</p>

									<a
										href="https://www.instagram.com/gohansushi_ap?igsh=cGswNHN2aWd1ZzJz"
										target="_blank"
										rel="noopener noreferrer"
										className="text-[#e60000] font-bold">
										@gohan_sushi_ap
									</a>
								</div>
							</div>
						</section>
					</div>
				</div>

				<Footer />
			</main>
		</>
	);
}
