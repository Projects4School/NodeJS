import { Router, Request, Response } from "express";
import Comments from "../../db/schemas/Comments";

// Router of /comments
const router: Router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     NewComment:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The user's name.
 *           example: Leanne Graham
 * 		   text:
 * 		     type: string
 * 		     description: The user's comment text.
 *           example: Nice movie ! I love the main character !
 * 		   email:
 * 			 type: string
 * 			 description: The user's email adress.
 * 			 example: leanne.graham@email.org
 * 		   movie_id: 
 * 			 type: ObjectId
 * 		   	 description: The movie's ID.
 *     Comment:
 *       allOf:
 *         - type: object
 *           properties:
 *             id:
 *               type: ObjectID
 *               description: The user ID.
 *         - $ref: '#/components/schemas/NewComment'
 */

/**
 * @swagger
 * /comments:
 *   post:
 *     summary: Create a comment.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewComment'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   id:
 * 					   type: ObjectId
 * 					   description: Id of the new comment.
*/
router.post("/", (req: Request, res: Response) => {
	const newComment = new Comments(req.body);
	newComment.save((err, result) => {
		if (err) {
			return res.status(500).send({
				message: err.message || "Some error occurred while retrieving data."
			});
		} else return res.status(201).json({
			id: result.id
		});
	});
});

/**
 * @swagger
 * /comments:
 *   get:
 *     summary: Retrieve a list of comments.
 *     description: Retrieve a list of comments of movies.
 *     responses:
 *       200:
 *         description: A list of comments.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
*/
router.get("/", (req: Request, res: Response) => {
	Comments.find({}).limit(10).then((data) => {
      	res.json(data);
    }).catch(err => {
		res.status(500).send({
			message: err.message || "Some error occurred while retrieving data."
		});
    });
});

/**
 * @swagger
 * /comments/{id}:
 *   get:
 *     summary: Retrieve a single comment.
 *     description: Retrieve a single comment by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ObjectId of the comments to retrieve.
 *         schema:
 *           type: ObjectId
 *     responses:
 *       200:
 *         description: A single user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/Comment'
*/
router.get("/:id", (req: Request, res: Response) => {
	Comments.findById(req.params.id).then((data) => {
		res.json(data);
	}).catch(err => {
		res.status(500).send({
			message: err.message || "Some error occurred while retrieving data."
		});
	});
});

/**
 * @swagger
 * /comments/{id}:
 *   patch:
 *     summary: Create a comment.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ObjectId of the comments to update.
 *         schema:
 *           type: ObjectId
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comment'
 *     responses:
 *       200:
 *         description: Updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/User'
*/
router.patch("/:id", (req: Request, res: Response) => {
	Comments.findByIdAndUpdate(req.params.id, req.body, { new: true }).then((data) => {
		res.json(data);
	}).catch(err => {
		res.status(500).send({
			message: err.message || "Some error occurred while retrieving data."
		});
	});
});

/**
 * @swagger
 * /comments/{id}:
 *   delete:
 *     summary: Delete a comment.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ObjectId of the comments to delete.
 *         schema:
 *           type: ObjectId
 *     responses:
 *       200:
 *         description: Deleted
*/
router.delete("/:id", (req: Request, res: Response) => {
	Comments.remove({ _id: req.params.id }).then(() => {
		res.sendStatus(200);
	}).catch(err => {
		res.status(500).send({
			message: err.message || "Some error occurred while retrieving data."
		});
	});
});

export default router;