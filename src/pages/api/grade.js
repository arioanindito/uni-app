import { connectToMongo } from "@/libs/MongoConnect";
import Grade from "@/models/GradeModel";
import Course from "@/models/CourseModel";

async function handlePostRequest(req, res) {
	const { title, mark, courseId } = req.body;

	try {
		await connectToMongo();
		const course = await Course.findById(courseId);
		if (!course) {
			return res.status(400).send({ message: "Course not found" });
		}
		const createdGrade = await Grade.create({
			title,
			mark,
			course_id: courseId,
		});
		course.grades.push(createdGrade._id);
		await course.save();
		res.status(201).send(createdGrade);
	} catch (error) {
		console.log(error);
		res.status(400).send({ message: "Something went wrong" });
	}
}

async function handleGetRequest(req, res) {
	const { query } = req;
	const queryParams = query.gradeId;

	try {
		await connectToMongo();

		var ObjectId = require("mongodb").ObjectId;

		const grades = await Grade.find({
			_id: new ObjectId(queryParams),
		});
		res.status(200).send(grades);
	} catch (error) {
		console.log(error);
		res.status(400).send({ message: "Something went wrong" });
	}
}

async function handleDeleteRequest(req, res) {
	const { query } = req;
	const queryParams = query.gradeId;

	try {
		await connectToMongo();

		var ObjectId = require("mongodb").ObjectId;

		const deletedGrade = await Grade.deleteOne({
			_id: new ObjectId(queryParams),
		});
		res.status(200).send(deletedGrade);
	} catch (error) {
		console.log(error);
		res.status(400).send({ message: "Something went wrong" });
	}
}

async function handlePutRequest(req, res) {
	const { query } = req;
	const queryParams = query.gradeId;
	const { title, mark } = req.body;

	try {
		await connectToMongo();

		var ObjectId = require("mongodb").ObjectId;

		const updatedGrade = await Grade.findOneAndUpdate(
			{ _id: new ObjectId(queryParams) },
			{ title, mark },
			{ new: true }
		);
		res.status(200).send(updatedGrade);
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
