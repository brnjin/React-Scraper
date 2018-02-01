import axios from "axios";

export default {
	//Gets all articles 
	getArticles: function () {
		return axios.get("/api/articles");
	},
	//Gets book with matching id
	getArticles: function() {
		return axios.get("/api/aricles" + id);
	},
	//Deletes article with matching id 
	deleteArticles: function() {
		return axios.delete("/api/articles" + id);
	},
	//Save the article to the DB
	saveArticle: function() {
		return axios.post("/api/books", aricleData);
	}
};