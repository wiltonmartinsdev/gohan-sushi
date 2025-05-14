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

	// Usando useScroll com a referência da seção específica
	// offset ajustado para garantir que o efeito comece exatamente no topo da seção
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"],
	});

	// Criando efeito de movimento parallax usando useTransform
	// Ajustando os valores para garantir que a imagem comece alinhada ao topo da seção
	const y = useTransform(
		scrollYProgress,
		[0, 1],
		["-28%", `${parallaxSpeed * 100 - 28}%`]
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
					backgroundPosition: "top center", // Alterado para garantir alinhamento ao topo
					backgroundRepeat: "no-repeat",
					zIndex: -1,
				}}
			/>

			{/* Conteúdo da seção */}
			<div className="relative z-10">{children}</div>
		</section>
	);
}
