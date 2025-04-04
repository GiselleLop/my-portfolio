import React, { useEffect, useState } from "react";
import style from "./menu-header.module.css";
import { menuOptions } from "./types";
import { useNavigate } from "react-router-dom";

type MenuHeaderProps = {
	idRoute: string | null
};

export const MenuHeader = React.forwardRef<HTMLInputElement, MenuHeaderProps>(
	({ idRoute }) => {
		const navigate = useNavigate();
		const [activeButton, setActiveButton] = useState<string | null>(null);
		const [isScrolled, setIsScrolled] = useState<boolean>(false);

		useEffect(() => {
			setActiveButton(idRoute);
			if (idRoute !== "home") {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}, [idRoute]);

		const handleButtonClick = (value: string) => {
			setActiveButton(value);
			navigate(`/${value}`, { replace: true });

			const section = document.getElementById(value);
			if (section) {
				section.scrollIntoView({ behavior: "smooth", block: "start" });
			}
		};

		return (
			<>
			<div 
			className={style.menu_container}
			//className={`${style.menu_container} ${isScrolled ? style.scrolled_header : ""}`}
			>
					<div 
					//className={style.button_container}
					className={`${style.button_container} ${isScrolled ? style.scrolled_header : ""}`}
					>
						{menuOptions.map((option) => (
							<button
								key={option.value}
								className={`${style.menu_button} ${activeButton === option.value ? style.selected : ""}`}
								onClick={() => handleButtonClick(option.value)}
							>
								
								<h1 className={`${style.text_btton} ${activeButton === option.value ? style.selected_text : ""}`}>{option.name}</h1>
							</button>
						))}
					</div>

				</div>
			</>
		);
	},
);