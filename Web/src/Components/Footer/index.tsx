import logoSushi from "@/assets/logo-sushi.png";

export const Footer = () => {
	return (
		<div className="bg-black flex flex-col items-center py-12 space-y-6">
			<img
				src={logoSushi}
				alt=""
			/>

			<div className="flex flex-col items-center">
				<p className="text-white">Copyright &copy; 2025</p>

				<p className="text-white">Todos os direitos reservados</p>

				<p className="text-white"> Oiapoque - Amapá - Brasil</p>
			</div>

			<div className="flex gap-4 items-center">
				<a
					href="https://wa.me/+5596981108122"
					target="_blank"
					rel="noopener noreferrer">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="40"
						height="40"
						viewBox="0 0 24 24">
						<g
							fill="none"
							fillRule="evenodd">
							<path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
							<path
								fill="#e60000"
								d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 20.2A1.01 1.01 0 0 0 3.8 21.454l3.032-.892A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2M9.738 14.263c2.023 2.022 3.954 2.289 4.636 2.314c1.037.038 2.047-.754 2.44-1.673a.7.7 0 0 0-.088-.703c-.548-.7-1.289-1.203-2.013-1.703a.71.71 0 0 0-.973.158l-.6.915a.23.23 0 0 1-.305.076c-.407-.233-1-.629-1.426-1.055s-.798-.992-1.007-1.373a.23.23 0 0 1 .067-.291l.924-.686a.71.71 0 0 0 .12-.94c-.448-.656-.97-1.49-1.727-2.043a.7.7 0 0 0-.684-.075c-.92.394-1.716 1.404-1.678 2.443c.025.682.292 2.613 2.314 4.636"
							/>
						</g>
					</svg>
				</a>

				<a
					href="https://www.facebook.com/share/1Fbmd8fwJg/?mibextid=wwXIfr"
					target="_blank"
					rel="noopener noreferrer">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 16 16">
						<path
							fill="#e60000"
							d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131c.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
						/>
					</svg>
				</a>

				<a
					href="https://www.instagram.com/gohansushi_ap?igsh=cGswNHN2aWd1ZzJz"
					target="_blank"
					rel="noopener noreferrer">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="38"
						height="38"
						viewBox="0 0 24 24">
						<g
							fill="none"
							stroke="#e60000"
							strokeWidth="2">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
							/>
							<path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z" />
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m17.5 6.51l.01-.011"
							/>
						</g>
					</svg>
				</a>
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
