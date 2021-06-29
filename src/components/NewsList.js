import React from "react";
import News from "./News";
import PropTypes from "prop-types";

const NewsList = ({ savednews }) => {
	return (
		<div className="row">
			{savednews.map((news) => (
				<News key={news.url} news={news} />
			))}
		</div>
	);
};

NewsList.propTypes = {
	savednews: PropTypes.array.isRequired,
};

export default NewsList;
