import { Button } from "@/Components/ui/button";
import { useNavigate } from "react-router-dom";

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
	const navigate = useNavigate();

	return (
		<Button
			onClick={() => navigate(to)}
			variant="outline"
			className={`border-[#e60000] text-white hover:bg-[#e60000] hover:text-white cursor-pointer ${className}`}>
			{label}
		</Button>
	);
}
