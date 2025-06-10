import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
	children: ReactNode;
	imageUrl: string;
	id: string;
	parallaxSpeed?: number; // Velocidade do efeito (menor = mais lento)
}

export function ParallaxSection({
	children,
	imageUrl,
	id,
	parallaxSpeed = 0.5,
}: ParallaxSectionProps) {
	// Referência para a seção atual
	const sectionRef = useRef<HTMLElement>(null);

	// Usando useScroll sem container específico para usar o scroll da página
	// O alerta foi resolvido com position: relative no CSS global
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"],
	});

	// Criando efeito de movimento parallax usando useTransform
	// Ajustando os valores para garantir que a imagem comece alinhada ao topo da seção
	const y = useTransform(
		scrollYProgress,
		[0, 1],
		["-33%", `${parallaxSpeed * 100 - 28}%`]
	);

	return (
		<section
			id={id}
			ref={sectionRef}
			className="relative overflow-hidden">
			{/* Imagem de fundo com efeito parallax */}
			<motion.div
				className="absolute inset-0 w-full h-full"
				style={{
					y,
					backgroundImage: `url(${imageUrl})`,
					backgroundSize: "cover",
					backgroundPosition: "top center",
					backgroundRepeat: "no-repeat",
					zIndex: -1,
				}}
			/>

			{/* Conteúdo da seção */}
			<div className="relative z-10">{children}</div>
		</section>
	);
}
