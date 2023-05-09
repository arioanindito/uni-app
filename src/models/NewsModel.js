import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	created_at: {
		type: String,
		required: true,
	},
});

const News = mongoose.models.News || mongoose.model("News", newsSchema);

export default News;
