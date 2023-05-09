import User from "../../models/UserModel";
import { connectToMongo } from "../../libs/MongoConnect";

async function handlePostRequest(req, res) {
	const {
		fullName,
		email,
		password,
		role,
		vumId,
		cardiffId,
		program,
		courses,
	} = req.body;

	try {
		await connectToMongo();
		const createdUser = await User.create({
			fullName,
			email,
			password,
			role,
			vumId,
			cardiffId,
			program,
			courses,
		});
		res.status(201).send(createdUser);
	} catch (error) {
		console.log(error);
		res.status(400).send({ message: "Something went wrong" });
	}
}

async function handleGetRequest(req, res) {
	const { query } = req;
	const queryParams = query.userId;

	try {
		await connectToMongo();

		var ObjectId = require("mongodb").ObjectId;

		const users = await User.find({
			_id: new ObjectId(queryParams),
		}).populate("courses");
		res.status(200).send(users);
	} catch (error) {
		console.log(error);
		res.status(400).send({ message: "Something went wrong" });
	}
}

async function handleDeleteRequest(req, res) {
	const { query } = req;
	const queryParams = query.userId;

	try {
		await connectToMongo();

		var ObjectId = require("mongodb").ObjectId;

		const deletedUser = await User.deleteOne({
			_id: new ObjectId(queryParams),
		});
		res.status(200).send(deletedUser);
	} catch (error) {
		console.log(error);
		res.status(400).send({ message: "Something went wrong" });
	}
}

async function handlePutRequest(req, res) {
	const { query } = req;
	const queryParams = query.userId;
	const {
		fullName,
		email,
		password,
		role,
		vumId,
		cardiffId,
		program,
		courses,
	} = req.body;

	try {
		await connectToMongo();

		var ObjectId = require("mongodb").ObjectId;

		const updatedUser = await User.findOneAndUpdate(
			{ _id: new ObjectId(queryParams) },
			{
				fullName,
				email,
				password,
				role,
				vumId,
				cardiffId,
				program,
				courses,
			},
			{ new: true }
		);
		res.status(200).send(updatedUser);
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
