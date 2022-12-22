"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Comments_1 = __importDefault(require("../../db/schemas/Comments"));
// Router of /comments
const router = (0, express_1.Router)();
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
router.post("/", (req, res) => {
    const newComment = new Comments_1.default(req.body);
    newComment.save((err, result) => {
        if (err) {
            return res.status(500).send({
                message: err.message || "Some error occurred while retrieving data."
            });
        }
        else
            return res.status(201).json({
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
router.get("/", (req, res) => {
    Comments_1.default.find({}).limit(10).then((data) => {
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
router.get("/:id", (req, res) => {
    Comments_1.default.findById(req.params.id).then((data) => {
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
router.patch("/:id", (req, res) => {
    Comments_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true }).then((data) => {
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
router.delete("/:id", (req, res) => {
    Comments_1.default.remove({ _id: req.params.id }).then(() => {
        res.sendStatus(200);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving data."
        });
    });
});
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBpL3JvdXRlcy9jb21tZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUFvRDtBQUNwRCx5RUFBaUQ7QUFFakQsc0JBQXNCO0FBQ3RCLE1BQU0sTUFBTSxHQUFXLElBQUEsZ0JBQU0sR0FBRSxDQUFDO0FBRWhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4Qkc7QUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF1QkU7QUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUNoRCxNQUFNLFVBQVUsR0FBRyxJQUFJLGtCQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDL0IsSUFBSSxHQUFHLEVBQUU7WUFDUixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMzQixPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU8sSUFBSSw0Q0FBNEM7YUFDcEUsQ0FBQyxDQUFDO1NBQ0g7O1lBQU0sT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDbEMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFO2FBQ2IsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQztBQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrQkU7QUFDRixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUMvQyxrQkFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxD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