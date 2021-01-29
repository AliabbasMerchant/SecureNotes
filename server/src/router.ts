import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({message: "YO"});
});

if (process.env.NODE_ENV === "production") {
    router.get("*", (req, res) => {
        res.sendFile(__dirname + '/client/build/index.html');
    })
}

export default router;