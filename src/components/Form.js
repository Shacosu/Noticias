import React from "react";
import useSelect from "../hooks/useSelect";
import PropTypes from "prop-types";
// Styles
import styles from "../styles/Form.module.css";

const Form = ({ setCategory }) => {
	const OPTIONS = [
		{ value: "general", label: "General" },
		{ value: "business", label: "Negocios" },
		{ value: "entertainment", label: "Entretenimiento" },
		{ value: "health", label: "Salud" },
		{ value: "science", label: "Ciencia" },
		{ value: "technology", label: "Tecnologia" },
	];
	const [category, SelectNews] = useSelect("technology", OPTIONS);
	const searchNews = (e) => {
		e.preventDefault();
		setCategory(category);
	};
	return (
		<div className={`${styles.buscador} row`}>
			<div className="col s12 m8 offset-m2">
				<form onSubmit={searchNews}>
					<h2 className={styles.heading}>Encuentra noticias por categoria</h2>
					<SelectNews />
					<div className="input-field col s12">
						<input
							type="submit"
							className={`${styles["btn-block"]} btn-large`}
							value="Buscar"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

Form.propTypes = {
	setCategory: PropTypes.func.isRequired,
};

export default Form;
