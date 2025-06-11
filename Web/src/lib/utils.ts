import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/**
 * Função utilitária para obter a altura do header da página
 * @returns number - A altura do header em pixels
 */
export function getHeaderHeight(): number {
	const header = document.querySelector("header");
	return header ? header.getBoundingClientRect().height : 112; // Valor padrão de 112px caso não encontre o header
}

/**
 * Função utilitária para obter o espaçamento adicional para seções específicas
 * @param sectionId - ID da seção para calcular o espaçamento
 * @param defaultTolerance - Tolerância padrão (opcional)
 * @returns number - O espaçamento adicional em pixels
 */
export function getSectionSpacing(
	sectionId: string,
	defaultTolerance: number = 0
): number {
	// Adiciona espaçamento extra para Menu e Contato
	if (sectionId === "menu" || sectionId === "contact") {
		return defaultTolerance + 40; // Valor padrão + 40px de espaçamento adicional
	}
	return defaultTolerance;
}

/**
 * Função para detectar qual seção está mais ativa baseada na posição do scroll
 * Prioriza a seção que está mais próxima do centro da viewport
 * @param sections - Array de IDs das seções
 * @param headerHeight - Altura do header
 * @returns string - ID da seção ativa
 */
export function getActiveSection(
	sections: string[],
	headerHeight: number
): string {
	const viewportCenter = window.innerHeight / 2 + headerHeight;
	const scrollPosition = window.scrollY;

	let closestSection = sections[0];
	let smallestDistance = Infinity;

	for (const sectionId of sections) {
		const element = document.getElementById(sectionId);
		if (!element) continue;

		const { offsetTop, offsetHeight } = element;
		const sectionCenter = offsetTop + offsetHeight / 2;
		const distanceFromViewportCenter = Math.abs(
			sectionCenter - (scrollPosition + viewportCenter)
		);

		// Para a seção de contato, dar uma vantagem extra quando estiver visível
		let adjustedDistance = distanceFromViewportCenter;
		if (sectionId === "contact") {
			// Se a seção de contato está significativamente visível, reduza a distância
			if (scrollPosition + headerHeight + 100 >= offsetTop) {
				adjustedDistance = distanceFromViewportCenter * 0.7; // Dar prioridade
			}
		}

		if (adjustedDistance < smallestDistance) {
			smallestDistance = adjustedDistance;
			closestSection = sectionId;
		}
	}

	return closestSection;
}

/**
 * Função utilitária para scrollar até uma seção com compensação do header
 * e espaçamento adicional para seções específicas
 * @param sectionId - ID da seção para scrollar
 * @returns void
 */
export function scrollToSection(sectionId: string): void {
	const element = document.getElementById(sectionId);
	if (!element) return;

	// Obtém dinamicamente a altura do header usando a função utilitária
	const headerHeight = getHeaderHeight();

	// Obtém o espaçamento adicional usando a função utilitária
	const additionalSpacing = getSectionSpacing(sectionId);

	const elementPosition =
		element.getBoundingClientRect().top + window.scrollY;

	// Para a seção de contato, scroll mais agressivo para garantir que ela seja detectada como ativa
	let scrollOffset = headerHeight + additionalSpacing;
	if (sectionId === "contact") {
		scrollOffset = headerHeight + 20; // Reduzir o offset para a seção de contato
	}

	// Scroll para a posição da seção menos a altura do header e espaçamento adicional
	window.scrollTo({
		top: elementPosition - scrollOffset,
		behavior: "smooth",
	});
}
