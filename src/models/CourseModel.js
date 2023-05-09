import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
	lecturer: {
		type: String,
		required: true,
	},
	programme: {
		type: String,
		required: true,
	},
	module: {
		type: String,
		required: true,
	},
	year: {
		type: String,
		required: true,
	},
	word: {
		type: String,
		required: true,
	},
	module_book: {
		type: String,
		required: true,
	},
	referencing_instructions: {
		type: String,
		required: true,
	},
	schedules: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Schedule",
		},
	],
	grades: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Grade",
		},
	],
});

const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);

export default Course;
