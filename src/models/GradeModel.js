import mongoose from "mongoose";

const gradeSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	mark: {
		type: Number,
		required: true,
	},
});

const Grade = mongoose.models.Grade || mongoose.model("Grade", gradeSchema);

export default Grade;
