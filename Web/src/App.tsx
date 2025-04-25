import logoSushi from "@/assets/logo-sushi.png";

import { Carousel } from "./Components/Carousel";
import { HamburgerMenu } from "./Components/HamburgerMenu";

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
                


			</main>
		</>
	);
}
