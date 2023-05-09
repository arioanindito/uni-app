import { connectToMongo } from "@/libs/MongoConnect";
import Schedule from "@/models/ScheduleModel";

async function handlePostRequest(req, res) {
	const { title, deadline, status } = req.body;

	try {
		await connectToMongo();
		const createdSchedule = await Schedule.create({
			title,
			deadline,
			status,
		});
		res.status(201).send(createdSchedule);
	} catch (error) {
		console.log(error);
		res.status(400).send({ message: "Something went wrong" });
	}
}

async function handleGetRequest(req, res) {
	const { query } = req;
	const queryParams = query.scheduleId;

	try {
		await connectToMongo();

		var ObjectId = require("mongodb").ObjectId;

		const schedules = await Schedule.find({
			_id: new ObjectId(queryParams),
		});
		res.status(200).send(schedules);
	} catch (error) {
		console.log(error);
		res.status(400).send({ message: "Something went wrong" });
	}
}

async function handleDeleteRequest(req, res) {
	const { query } = req;
	const queryParams = query.scheduleId;

	try {
		await connectToMongo();

		var ObjectId = require("mongodb").ObjectId;

		const deletedSchedule = await Schedule.deleteOne({
			_id: new ObjectId(queryParams),
		});
		res.status(200).send(deletedSchedule);
	} catch (error) {
		console.log(error);
		res.status(400).send({ message: "Something went wrong" });
	}
}

async function handlePutRequest(req, res) {
	const { query } = req;
	const queryParams = query.scheduleId;
	const { title, deadline, status } = req.body;

	try {
		await connectToMongo();

		var ObjectId = require("mongodb").ObjectId;

		const updatedSchedule = await Schedule.findOneAndUpdate(
			{ _id: new ObjectId(queryParams) },
			{
				title,
				deadline,
				status,
			},
			{ new: true }
		);
		res.status(200).send(updatedSchedule);
	} catch (error) {
		console.log(error);
		res.status(400).send({ message: "Something went wrong" });
	}
}

export default async function handler(req, res) {
	switch (req.method) {
		case "POST":
			await handlePostRequest(req, res);
			break;
		case "GET":
			await handleGetRequest(req, res);
			break;
		case "DELETE":
			await handleDeleteRequest(req, res);
			break;
		case "PUT":
			await handlePutRequest(req, res);
			break;
		default:
			res.status(405).send({ message: "Method not allowed" });
			break;
	}
}
