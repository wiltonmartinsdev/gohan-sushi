import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface BackButtonProps {
	to?: string;
	label?: string;
	className?: string;
}

export function BackButton({
	to = "/",
	label = "Voltar ao Início",
	className = "",
}: BackButtonProps) {
	return (
		<Button
			asChild
			variant="outline"
			className={`border-[#e60000] text-white hover:bg-[#e60000] hover:text-white cursor-pointer ${className}`}>
			<Link to={to}>{label}</Link>
		</Button>
	);
}
