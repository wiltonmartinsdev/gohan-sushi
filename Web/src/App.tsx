import clockIcon from "@/assets/clockIcon.svg";
import facebookIcon from "@/assets/facebookIcon.svg";
import instagramIcon from "@/assets/instagramIcon.svg";
import locationIcon from "@/assets/locationIcon.svg";
import logoSushi from "@/assets/logo-sushi.png";
import whatsAppIcon from "@/assets/whatsappIcon.svg";

import { Carousel } from "./Components/Carousel";
import { Footer } from "./Components/Footer";
import { HamburgerMenu } from "./Components/HamburgerMenu";
import { MenuCarousel } from "./Components/MenuCarousel";

export function App() {
	return (
		<>
			<header className="h-28 text-white bg-black/90 flex justify-between items-center px-10">
				<img
					src={logoSushi}
					alt="Logo Gohan Sushi"
				/>

				<HamburgerMenu />

				{/* <nav>
					<ul className="">
						<li>Início</li>
						<li>Sobre Nós</li>
						<li>Cardápio</li>
						<li>Localização</li>
						<li>Contato</li>
					</ul>
				</nav> */}
			</header>

			<main>
				<Carousel />

				<div className="px-8 py-14 space-y-14">
					<section id="about">
						<h2 className="relative text-center text-3xl font-extrabold  text-[#e60000] mb-14 after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:transform after:-translate-x-1/2 after:w-[70px] after:h-[3px] after:bg-[#e60000] after:rounded-xl">
							Sobre Nós
						</h2>

						<div className="bg-[#f5f3f2] rounded-lg px-10 py-12">
							<div className="flex justify-center mb-8">
								<img
									src={logoSushi}
									alt=""
								/>
							</div>

							<p>
								O Gohan Sushi traz para Oiapoque o verdadeiro
								sabor da culinária japonesa com um toque
								amazônico. Nosso empreendimento combina técnicas
								tradicionais japonesas com ingredientes frescos
								da região do Amapá.
							</p>

							<p className="mt-4 mb-4">
								Aberto de terça a domingo, das 19:00 até 23:30,
								oferecemos uma experiência gastronômica única
								que vai além do comum.
							</p>

							<p className="text-[#e60c00] font-extrabold w-[175px] border-l-[3px] border-l-[#e60000] pl-4">
								"Descubra a felicidade em cada mordida! Quem
								disse que felicidade não se compra nunca
								experimentou nosso sushi."
							</p>
						</div>
					</section>

					<section id="menu">
						<h2 className="relative text-center text-3xl font-extrabold  text-[#e60000] mb-8 after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:transform after:-translate-x-1/2 after:w-32 after:h-[3px] after:bg-[#e60000] after:rounded-xl">
							Nosso Cardápio
						</h2>

						<MenuCarousel />
					</section>

					<section id="location">
						<h2 className="relative text-center text-3xl font-extrabold  text-[#e60000] mb-14 after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:transform after:-translate-x-1/2 after:w-36 after:h-[3px] after:bg-[#e60000] after:rounded-xl">
							Nossa Localização
						</h2>

						<div className="bg-[#f5f3f2] rounded-lg px-10 py-12">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15923.44338967811!2d-51.83913424065305!3d3.8400343381398288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d6cc54253bb1367%3A0x8c2f602bd1cd2f75!2sOiapoque%2C%20AP%2C%2068980-000!5e0!3m2!1spt-BR!2sbr!4v1745845385526!5m2!1spt-BR!2sbr"
								width="100%"
								height="450"
								style={{ border: 0, borderRadius: 10 }}
								allowFullScreen={true}
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"></iframe>

							<div className="bg-white rounded-lg mt-8 p-8 space-y-4">
								<h3 className="text-[28px] font-extrabold text-[#e60000] text-center">
									Endereço
								</h3>
								<div className="flex gap-2 items-center">
									<img
										src={locationIcon}
										alt="Ícone de localização"
									/>
									<p className="text-lg">
										Rua Principal, 123, Centro, Oiapoque-Ap
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
										Das 19h até às 23h:30
									</p>
								</div>
							</div>
						</div>
					</section>

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
									rel="noopener noreferrer" className="text-[#e60000] font-bold">
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
									rel="noopener noreferrer" className="text-[#e60000] font-bold">
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
									rel="noopener noreferrer" className="text-[#e60000] font-bold">
									@gohan_sushi_ap
								</a>
							</div>
						</div>
					</section>
				</div>

				<Footer />
			</main>
		</>
	);
}
