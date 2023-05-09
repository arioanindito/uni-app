import mongoose from "mongoose";

const infoSchema = new mongoose.Schema({
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

const Info = mongoose.models.News || mongoose.model("Info", infoSchema);

export default Info;
