// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { Button } from "../ui/button";

export const Carousel = () => {
	return (
		<>
			<Swiper
				navigation={true}
				pagination={true}
				effect={"fade"}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				modules={[Autoplay, Navigation, Pagination, EffectFade]}
				className="mySwiper absolute h-[calc(100vh-112px)] bg-black-50">
				<SwiperSlide>
					{" "}
					<img
						src="https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt=""
						className="object-cover w-full h-full brightness-20"
					/>
				</SwiperSlide>
				<SwiperSlide>
					{" "}
					<img
						src="https://images.unsplash.com/photo-1726824861116-461b71d1fb2b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3VzaGl8ZW58MHx8MHx8fDA%3D"
						alt=""
						className="object-cover w-full h-full brightness-20"
					/>
				</SwiperSlide>
				<SwiperSlide>
					{" "}
					<img
						src="https://images.unsplash.com/photo-1726824863833-e88146cf0a72?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VzaGl8ZW58MHx8MHx8fDA%3D"
						alt=""
						className="object-cover w-full h-full brightness-20"
					/>
				</SwiperSlide>
				<SwiperSlide>
					{" "}
					<img
						src="https://plus.unsplash.com/premium_photo-1668143362936-ce8a84410659?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN1c2hpfGVufDB8fDB8fHww"
						alt=""
						className="object-cover w-full h-full brightness-20"
					/>
				</SwiperSlide>

				<div className="relative bottom-96 text-center space-y-5 z-10 text-white">
					<h1 className="text-4xl font-extrabold">
						O Melhor Sushi do
						<br /> Oiapoque!
					</h1>

					<p>
						Sabores autênticos do Japão, <br /> ingredientes frescos
						do Oiapoque.
					</p>

					<Button className="rounded-2xl hover:bg-transparent hover:border-2 hover:border-[#e60c00] hover:text-[#e60c00] cursor-pointer">
						Conheça nosso Cardápio
					</Button>
				</div>
			</Swiper>
		</>
	);
};
