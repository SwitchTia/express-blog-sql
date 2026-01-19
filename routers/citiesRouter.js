import express from "express";
import { cityBlogArray } from "../data/data.js";
import cityController from "../controllers/cityController.js";

const router = express.Router();



//INDEX
router.get("/", cityController.index)


//SHOW
router.get("/:id", cityController.show)


// STORE
router.post("/", cityController.store);


// UPDATE
router.put("/:id", cityController.update);


//MODIFY
router.patch("/:id", cityController.modify);



//DESTROY
router.delete("/:id", cityController.destroy);

export default router;