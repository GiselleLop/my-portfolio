import React, { useEffect, useState } from "react";
import style from "./arrow_bottom.module.css";
import { useNavigate } from "react-router-dom";

type Arrow_bottomProps = {
	idRoute: string | null
};

export const ArrowBottom = React.forwardRef<HTMLInputElement, Arrow_bottomProps>(
	({ idRoute }) => {
        const navigate = useNavigate();
        const [showArrow, setShowArrow] = useState<boolean>(true);
        useEffect(() => {
			if(idRoute === "contact") {
                setShowArrow(false)
            } else {
				setShowArrow(true)
			}			
		}, [idRoute]);

		const handleButtonClick = (value: string) => {
			let valueView: string = ""
			if (value === "home" || "") {
				navigate(`/about`, { replace: true });
				valueView = "about"
			}
			if (value === "about") {
				navigate(`/projects`, { replace: true });
				valueView = "projects"
			}
			if (value === "projects") {
				navigate(`/contact`, { replace: true });
				valueView = "contact"
			}
			const section = document.getElementById(valueView);
			if (section) {
				section.scrollIntoView({ behavior: "smooth", block: "start" });
			}
		};

		return (
		    <div className={style.btn_cont}>
                <button
				className={`${style.button_arrow} ${!showArrow ? style.button_arrow_hide : ""}`}
				onClick={() => handleButtonClick(idRoute || "")}
                >
                    <img src="..\src\assets\images\Arrow.png" className={style.arrow_img} />
                </button>
           </div>
		);
	},
);