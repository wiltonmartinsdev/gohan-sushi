import { useEffect, useState, useRef } from "react";

import { MenuCard } from "@/components/MenuCard";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Header, BackButton } from "@/components/Header";
import hotRollImg from "@/assets/hot-roll.png";
import salmonTemakiImg from "@/assets/salmon-temaki.png";

// Dados do cardápio completo
const fullMenuItems = [
	{
		id: 1,
		image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070&auto=format&fit=crop",
		title: "Combo Especial",
		description:
			"20 peças variadas de sushi e sashimi com molhos especiais da casa.",
		price: 89.9,
		isPopular: true,
		category: "Combos",
	},
	{
		id: 2,
		image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=2069&auto=format&fit=crop",
		title: "Sashimi de Salmão",
		description: "10 fatias de salmão fresco importado com molho ponzu.",
		price: 45.9,
		isPopular: false,
		category: "Sashimis",
	},
	{
		id: 3,
		image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=2070&auto=format&fit=crop",
		title: "Uramaki Filadélfia",
		description: "8 peças de uramaki com salmão, cream cheese e cebolinha.",
		price: 32.9,
		isPopular: true,
		category: "Uramakis",
	},
	{
		id: 4,
		image: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=2025&auto=format&fit=crop",
		title: "Temaki Camarão",
		description:
			"Temaki recheado com camarão empanado, cream cheese e alface.",
		price: 28.9,
		isPopular: false,
		category: "Temakis",
	},
	{
		id: 5,
		image: hotRollImg,
		title: "Hot Roll",
		description:
			"10 peças de hot roll com recheio de salmão e cream cheese.",
		price: 36.9,
		isPopular: false,
		category: "Hot Roll",
	},
	{
		id: 6,
		image: "https://images.unsplash.com/photo-1562802378-063ec186a863?q=80&w=2070&auto=format&fit=crop",
		title: "Combo Família",
		description:
			"40 peças variadas para compartilhar entre 3-4 pessoas com molhos especiais.",
		price: 149.9,
		isPopular: true,
		category: "Combos",
	},
	{
		id: 7,
		image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?q=80&w=2071&auto=format&fit=crop",
		title: "Niguiri Mix",
		description:
			"8 peças de niguiri variados (salmão, atum, camarão e peixe branco).",
		price: 38.9,
		isPopular: false,
		category: "Niguiris",
	},
	{
		id: 8,
		image: salmonTemakiImg,
		title: "Temaki Salmão",
		description:
			"Temaki recheado com salmão fresco, cream cheese e cebolinha.",
		price: 26.9,
		isPopular: true,
		category: "Temakis",
	},
];

// Lista de categorias do cardápio
const categories = [...new Set(fullMenuItems.map((item) => item.category))];

export function FullMenu() {
	const [activeCategory, setActiveCategory] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isChangingCategory, setIsChangingCategory] = useState(false);
	const [showSvgIcon, setShowSvgIcon] = useState(false);
	const filterContainerRef = useRef<HTMLDivElement>(null);

	// Filtrar itens pela categoria selecionada
	const filteredItems = activeCategory
		? fullMenuItems.filter((item) => item.category === activeCategory)
		: fullMenuItems;

	// Função para verificar se há overflow horizontal no container de filtros
	const checkForOverflow = () => {
		if (filterContainerRef.current) {
			const { scrollWidth, clientWidth } = filterContainerRef.current;
			setShowSvgIcon(scrollWidth > clientWidth);
		}
	};

	// Função para mudar categoria com efeito de carregamento
	const handleCategoryChange = (category: string | null) => {
		if (category === activeCategory) return;

		setIsChangingCategory(true);
		setTimeout(() => {
			setActiveCategory(category);
			setIsChangingCategory(false);
		}, 300);
	};

	// Rola para o topo da página ao carregá-la e simula um tempo de carregamento
	useEffect(() => {
		window.scrollTo(0, 0);

		// Simular um tempo de carregamento dos dados
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 500);

		return () => clearTimeout(timer);
	}, []);

	// Monitorar redimensionamento e overflow das categorias
	useEffect(() => {
		// Verificar overflow inicial após o carregamento
		const initialCheck = () => {
			if (!isLoading) {
				checkForOverflow();
			}
		};

		// Verificar sempre que a janela for redimensionada
		const handleResize = () => {
			checkForOverflow();
		};

		// Adicionar event listeners
		initialCheck();
		window.addEventListener("resize", handleResize);

		// Limpar event listeners
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [isLoading]);

	return (
		<>
			<Header>
				<BackButton />
			</Header>

			<main>
				<div className="pt-36 pb-14 px-8 bg-[#f5f3f2] min-h-screen">
					<div className="container mx-auto">
						<div className="flex flex-col items-center justify-between sm:gap-2 sm:justify-center mb-6">
							<h2 className="relative text-center text-3xl font-extrabold mb-5 text-[#e60000] after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:transform after:-translate-x-1/2 after:w-32 after:h-[3px] after:bg-[#e60000] after:rounded-xl">
								Cardápio Completo
							</h2>

							<h2 className="text-sm">
								Conheça todas as nossas deliciosas opções
							</h2>
						</div>

						{isLoading ? (
							// Indicador de carregamento
							<div className="flex flex-col items-center justify-center py-16">
								<div className="w-16 h-16 border-4 border-[#e60000] border-t-transparent rounded-full animate-spin"></div>
								<p className="mt-4 text-lg text-[#e60000] font-medium">
									Carregando cardápio...
								</p>
							</div>
						) : (
							<>
								{showSvgIcon && (
									<div className="flex justify-center mb-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="-2 -6 24 24"
											className="animate-pulse">
											<path
												fill="#e60000"
												d="M3.423 4.996h13.154L14.04 2.46a1 1 0 1 1 1.415-1.414l4.242 4.243a1 1 0 0 1 0 1.414l-4.242 4.242a1 1 0 0 1-1.415-1.414l2.536-2.535H3.423L5.96 9.53a1 1 0 1 1-1.415 1.414L.302 6.703a.997.997 0 0 1 0-1.414l4.242-4.243A1 1 0 1 1 5.96 2.46z"
											/>
										</svg>
									</div>
								)}

								{/* Filtros por categoria */}
								<div className="mb-8 overflow-x-auto">
									<div
										ref={filterContainerRef}
										className="flex gap-3 pb-3">
										<Button
											variant="ghost"
											className={`border-2 ${
												!activeCategory
													? "bg-[#e60000] text-white"
													: "border-[#e60000] text-[#e60000]"
											} hover:bg-[#e60000] hover:text-white whitespace-nowrap cursor-pointer`}
											onClick={() =>
												handleCategoryChange(null)
											}>
											Todos
										</Button>
										{categories.map((category) => (
											<Button
												key={category}
												variant="ghost"
												className={`border-2 ${
													activeCategory === category
														? "bg-[#e60000] text-white"
														: "border-[#e60000] text-[#e60000]"
												} hover:bg-[#e60000] hover:text-white whitespace-nowrap cursor-pointer`}
												onClick={() =>
													handleCategoryChange(
														category
													)
												}>
												{category}
											</Button>
										))}
									</div>
								</div>

								{/* Grid de itens do cardápio */}
								<div
									className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 transition-opacity duration-300 ${
										isChangingCategory
											? "opacity-30"
											: "opacity-100"
									}`}>
									{isChangingCategory
										? // Mostra os mesmos itens enquanto muda a categoria para manter o layout
										  filteredItems.map((item) => (
												<div
													key={item.id}
													className="bg-white rounded-lg overflow-hidden shadow-md h-[350px]"></div>
										  ))
										: filteredItems.map((item) => (
												<MenuCard
													key={item.id}
													image={item.image}
													title={item.title}
													description={
														item.description
													}
													price={item.price}
													isPopular={item.isPopular}
												/>
										  ))}
								</div>

								{filteredItems.length === 0 && (
									<div className="text-center py-8">
										<p className="text-xl text-gray-600">
											Nenhum item encontrado nesta
											categoria.
										</p>
									</div>
								)}
							</>
						)}
					</div>
				</div>

				<Footer />
			</main>
		</>
	);
}
