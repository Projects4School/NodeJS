import { Router, Request, Response } from "express";
import Comments from "../../db/schemas/Comments";

const router: Router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     NewUser:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The user's name.
 *           example: Leanne Graham
 *     User:
 *       allOf:
 *         - type: object
 *           properties:
 *             id:
 *               type: integer
 *               description: The user ID.
 *               example: 0
 *         - $ref: '#/components/schemas/NewUser'
 */
router.post("/", (req: Request, res: Response) => {

});

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: A list of users.
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
	Comments.find({}).limit(10).then(data => {
      	res.json(data);
    }).catch(err => {
		res.status(500).send({
			message: err.message || "Some error occurred while retrieving data."
		});
    });
});

/**
 * @swagger
 * /hello:
 *   get:
 *     description: Returns the homepage
 *     responses:
 *       200:
 *         description: hello world
 */
router.get("/:id", (req: Request, res: Response) => {
  
});

router.patch("/:id", (req: Request, res: Response) => {
  
});

router.delete("/:id", (req: Request, res: Response) => {
  
});

router.get('/', (req: Request, res: Response) => {
    res.send('hello');
});

export default router;