import { connectToMongo } from "@/libs/MongoConnect";
import Info from "@/models/InfoModel";

async function handlePostRequest(req, res) {
	const { title, author, content, created_at } = req.body;

	try {
		await connectToMongo();
		const createdInfo = await Info.create({
			title,
			author,
			content,
			created_at,
		});
		res.status(201).send(createdInfo);
	} catch (error) {
		console.log(error);
		res.status(400).send({ message: "Something went wrong" });
	}
}

async function handleGetRequest(req, res) {
	const { query } = req;
	const queryParams = query.infoId;

	try {
		await connectToMongo();

		var ObjectId = require("mongodb").ObjectId;

		const info = await Info.find({
			_id: new ObjectId(queryParams),
		});
		res.status(200).send(info);
	} catch (error) {
		console.log(error);
		res.status(400).send({ message: "Something went wrong" });
	}
}

async function handleDeleteRequest(req, res) {
	const { query } = req;
	const queryParams = query.infoId;

	try {
		await connectToMongo();

		var ObjectId = require("mongodb").ObjectId;

		const deletedInfo = await Info.deleteOne({
			_id: new ObjectId(queryParams),
		});
		res.status(200).send(deletedInfo);
	} catch (error) {
		console.log(error);
		res.status(400).send({ message: "Something went wrong" });
	}
}

async function handlePutRequest(req, res) {
	const { query } = req;
	const queryParams = query.infoId;
	const { title, author, content, created_at } = req.body;

	try {
		await connectToMongo();

		var ObjectId = require("mongodb").ObjectId;

		const updatedInfo = await Info.findOneAndUpdate(
			{ _id: new ObjectId(queryParams) },
			{ title, author, content, created_at },
			{ new: true }
		);
		res.status(200).send(updatedInfo);
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
