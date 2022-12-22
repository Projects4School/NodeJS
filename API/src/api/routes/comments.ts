import { Router, Request, Response } from "express";
import Comments from "../../db/schemas/Comments";

// Router of /comments
const router: Router = Router();

router.post("/", (req: Request, res: Response) => {
	const newComment = new Comments(req.body);
	newComment.save((err, result) => {
		if (err) {
			return res.status(500).send({
				message: err.message || "Some error occurred while retrieving data."
			});
		} else return res.json({
			id: result.id
		});
	});
});

router.get("/", (req: Request, res: Response) => {
	Comments.find({}).limit(10).then((data) => {
      	res.json(data);
    }).catch(err => {
		res.status(500).send({
			message: err.message || "Some error occurred while retrieving data."
		});
    });
});

router.get("/:id", (req: Request, res: Response) => {
	Comments.findById(req.params.id).then((data) => {
		res.json(data);
	}).catch(err => {
		res.status(500).send({
			message: err.message || "Some error occurred while retrieving data."
		});
	});
});

router.patch("/:id", (req: Request, res: Response) => {
	Comments.findByIdAndUpdate(req.params.id, req.body, { new: true }).then((data) => {
		res.json(data);
	}).catch(err => {
		res.status(500).send({
			message: err.message || "Some error occurred while retrieving data."
		});
	});
});

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