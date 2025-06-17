import facebookIcon from "@/assets/facebookIcon.svg";
import instagramIcon from "@/assets/instagramIcon.svg";
import logoSushiWhiteSm from "@/assets/logo-sushi-white-sm.png";
import whatsAppIcon from "@/assets/whatsappIcon.svg";

export const Footer = () => {
	return (
		<div className="bg-black flex flex-col items-center py-12 space-y-6">
			<img
				src={logoSushiWhiteSm}
				alt="Logo Gohan Sushi Pequena"
                className="mr-3"
			/>

			<div className="flex gap-4 items-center">
				<a
					href="https://wa.me/+5596981108122"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="WhatsApp"
					title="Delivery"
					className="hover:scale-125 transition-transform duration-200">
					<img
						src={whatsAppIcon}
						alt="Ícone do WhatsApp"
					/>
				</a>

				<a
					href="https://www.facebook.com/share/1Fbmd8fwJg/?mibextid=wwXIfr"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Facebook"
					title="Gohan Sushi"
					className="hover:scale-125 transition-transform duration-200">
					<img
						src={facebookIcon}
						alt="Ícone do Facebook"
					/>
				</a>

				<a
					href="https://www.instagram.com/gohansushi_ap?igsh=cGswNHN2aWd1ZzJz"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Instagram"
					title="@gohan_sushi_ap"
					className="hover:scale-125 transition-transform duration-200">
					<img
						src={instagramIcon}
						alt="Ícone do Instagram"
					/>
				</a>
			</div>

			<div className="flex flex-col items-center">
				<p className="text-white">Copyright &copy; 2025</p>

				<p className="text-white">Todos os direitos reservados</p>

				<p className="text-white"> Oiapoque - Amapá - Brasil</p>
			</div>

			<a
				href="https://devwiltonmartins.vercel.app/"
				target="_blank"
				rel="noopener noreferrer"
				className="text-white hover:text-[#e60000]">
				Desenvolvido pelo dev: Wilton Lira Martins
			</a>
		</div>
	);
};
