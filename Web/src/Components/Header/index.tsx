import { ReactNode } from "react";
import logoSushi from "@/assets/logo-sushi.png";

// Re-exportações
export { BackButton } from "./BackButton";
export { MainNavigation } from "./MainNavigation";

interface HeaderProps {
	children?: ReactNode;
	className?: string;
}

export function Header({ children, className = "" }: HeaderProps) {
	return (
		<header
			className={`h-28 text-white bg-black/90 flex justify-between items-center px-10 fixed top-0 left-0 right-0 z-50 ${className}`}>
			<img
				src={logoSushi}
				alt="Logo Gohan Sushi"
			/>
			{children}
		</header>
	);
}
