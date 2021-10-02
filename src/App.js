import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Form from "./components/Form";
import NewsList from "./components/NewsList";

function App() {
	const [category, setCategory] = useState("");
	const [savednews, setNews] = useState([]);

	useEffect(() => {
		const requestAPI = async () => {
			const url = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/us.json`;
			const res = await fetch(url);
			const newsResponse = await res.json();
			setNews(newsResponse.articles);
		};
		requestAPI();
	}, [category]);
	return (
		<React.Fragment>
			<NavBar title="Buscador de noticias" />
			<div className="container white">
				<Form setCategory={setCategory} />
				<NewsList savednews={savednews} />
			</div>
		</React.Fragment>
	);
}

export default App;
