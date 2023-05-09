import { connectToMongo } from "@/libs/MongoConnect";
import Course from "@/models/CourseModel";

async function handlePostRequest(req, res) {
	const {
		lecturer,
		programme,
		module,
		year,
		word,
		module_book,
		referencing_instructions,
		schedules,
		grades,
	} = req.body;

	try {
		await connectToMongo();
		const createdCourse = await Course.create({
			lecturer,
			programme,
			module,
			year,
			word,
			module_book,
			referencing_instructions,
			schedules,
			grades,
		});
		res.status(201).send(createdCourse);
	} catch (error) {
		console.log(error);
		res.status(400).send({ message: "Something went wrong" });
	}
}

async function handleGetRequest(req, res) {
	const { query } = req;
	const queryParams = query.courseId;

	try {
		await connectToMongo();

		var ObjectId = require("mongodb").ObjectId;

		const courses = await Course.find({
			_id: new ObjectId(queryParams),
		});
		res.status(200).send(courses);
	} catch (error) {
		console.log(error);
		res.status(400).send({ message: "Something went wrong" });
	}
}

async function handleDeleteRequest(req, res) {
	const { query } = req;
	const queryParams = query.courseId;

	try {
		await connectToMongo();

		var ObjectId = require("mongodb").ObjectId;

		const deletedCourse = await Course.deleteOne({
			_id: new ObjectId(queryParams),
		});
		res.status(200).send(deletedCourse);
	} catch (error) {
		console.log(error);
		res.status(400).send({ message: "Something went wrong" });
	}
}

async function handlePutRequest(req, res) {
	const { query } = req;
	const queryParams = query.courseId;
	const {
		lecturer,
		programme,
		module,
		year,
		word,
		module_book,
		referencing_instructions,
		schedules,
		grades,
	} = req.body;

	try {
		await connectToMongo();

		var ObjectId = require("mongodb").ObjectId;

		const updatedCourse = await Course.findOneAndUpdate(
			{ _id: new ObjectId(queryParams) },
			{
				lecturer,
				programme,
				module,
				year,
				word,
				module_book,
				referencing_instructions,
				schedules,
				grades,
			},
			{ new: true }
		);
		res.status(200).send(updatedCourse);
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
