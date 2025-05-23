// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { MenuCard } from "../MenuCard";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

// Dados de exemplo para o cardápio
const menuItems = [
	{
		id: 1,
		image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070&auto=format&fit=crop",
		title: "Combo Especial",
		description:
			"20 peças variadas de sushi e sashimi com molhos especiais da casa.",
		price: 89.9,
		isPopular: true,
	},
	{
		id: 2,
		image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=2069&auto=format&fit=crop",
		title: "Sashimi de Salmão",
		description: "10 fatias de salmão fresco importado com molho ponzu.",
		price: 45.9,
		isPopular: false,
	},
	{
		id: 3,
		image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=2070&auto=format&fit=crop",
		title: "Uramaki Filadélfia",
		description: "8 peças de uramaki com salmão, cream cheese e cebolinha.",
		price: 32.9,
		isPopular: true,
	},
	{
		id: 4,
		image: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=2025&auto=format&fit=crop",
		title: "Temaki Camarão",
		description:
			"Temaki recheado com camarão empanado, cream cheese e alface.",
		price: 28.9,
		isPopular: false,
	},
	{
		id: 5,
		image: "https://images.unsplash.com/photo-1635012529371-352600ce6d3f?q=80&w=1974&auto=format&fit=crop",
		title: "Hot Roll",
		description:
			"10 peças de hot roll com recheio de salmão e cream cheese.",
		price: 36.9,
		isPopular: false,
	},
];

export const MenuCarousel = () => {
	const navigate = useNavigate();

	return (
		<>
			<Swiper
				spaceBetween={20}
				slidesPerView={1}
				navigation={true}
				pagination={{
					clickable: true,
				}}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				}}
				breakpoints={{
					640: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
				}}
				modules={[Autoplay, Navigation, Pagination]}
				className="mySwiper">
				{menuItems.map((item) => (
					<SwiperSlide key={item.id}>
						<div className="py-8 px-2">
							<MenuCard
								image={item.image}
								title={item.title}
								description={item.description}
								price={item.price}
								isPopular={item.isPopular}
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<div className="flex justify-center mt-10 mb-5">
				<Button
					className="bg-[#e60000] hover:bg-[#e60000]/80 text-white px-6 py-3 rounded-md text-base font-medium transition-colors duration-300 flex items-center gap-2 cursor-pointer"
					onClick={() => navigate("/menu/completo")}>
					Ver Cardápio Completo
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round">
						<path d="m9 18 6-6-6-6" />
					</svg>
				</Button>
			</div>
		</>
	);
};
