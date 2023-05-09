import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	deadline: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		required: true,
	},
});

const Schedule =
	mongoose.models.Schedule || mongoose.model("Schedule", scheduleSchema);

export default Schedule;
