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

	// Scroll para a posição da seção menos a altura do header e espaçamento adicional
	window.scrollTo({
		top: elementPosition - headerHeight - additionalSpacing,
		behavior: "smooth",
	});
}
