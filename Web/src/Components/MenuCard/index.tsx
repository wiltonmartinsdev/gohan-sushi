import { Button } from "../ui/button";

interface MenuCardProps {
	image: string;
	title: string;
	description: string;
	price: number;
	isPopular?: boolean;
}

export const MenuCard = ({
	image,
	title,
	description,
	price,
	isPopular = false,
}: MenuCardProps) => {
	// Função para gerar link do WhatsApp com os detalhes do sushi
	const generateWhatsAppLink = () => {
		const phoneNumber = "+5596981108122"; // Número atual do estabelecimento

		// Formata a mensagem com os dados do produto
		const message = encodeURIComponent(
			`Olá, *Gohan Sushi!* Gostaria de fazer um pedido: \n\n` +
				`*Produto:* ${title}\n\n` +
				`*Descrição:* ${description}\n\n` +
				`*Preço:* R$ ${price.toFixed(2)}\n\n` +
				`Por favor, pode confirmar meu pedido?`
		);

		// Retorna a URL formatada
		return `https://wa.me/${phoneNumber}?text=${message}`;
	};

	return (
		<div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg border border-gray-200 xl:mx-7 hover:scale-115 transition-transform duration-300">
			<div className="relative">
				<img
					src={image}
					alt={title}
					className="w-full h-48 object-cover"
				/>
				{isPopular && (
					<div className="absolute top-0 right-0 bg-[#e60000] text-white py-1 px-3 rounded-bl-lg font-medium text-sm">
						Mais Pedido
					</div>
				)}
			</div>
			<div className="p-4">
				<h3 className="text-xl font-bold mb-2 text-[#e60000]">
					{title}
				</h3>
				<p className="text-gray-700 mb-4 text-sm">{description}</p>
				<div className="flex justify-between items-center">
					<span className="text-[#e60000] font-bold text-lg">
						R$ {price.toFixed(2)}
					</span>

					<Button className="bg-black hover:bg-[#e60000] text-white px-3 py-1 rounded-md text-sm transition-colors duration-300 cursor-pointer">
						<a
							href={generateWhatsAppLink()}
							target="_blank"
							rel="noopener noreferrer">
							Pedir
						</a>
					</Button>
				</div>
			</div>
		</div>
	);
};
