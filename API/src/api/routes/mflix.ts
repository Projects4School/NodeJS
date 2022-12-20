import { Router, Request, Response } from "express";
import Mflix from "../../db/schemas/Mflix";

const router: Router = Router();

router.post("/create", (req: Request, res: Response) => {

});

router.get("/", (req: Request, res: Response) => {
	Mflix.find({ name: "Mercedes Tyler" }).then(data => {
		console.log(data)
      	res.json(data);
    }).catch(err => {
		res.status(500).send({
			message: err.message || "Some error occurred while retrieving data."
		});
    });
});

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