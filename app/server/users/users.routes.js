import express from "express";
import request from "request";

let router = express.Router();

const url = "http://eac-orbit-staging.eac.ad.ea.com:8086";

router.get("/", (req,res) => {
  res.render("users/users");
});

router.get("/api/:search", (req,res) => {
  request(`${url}/search/${req.params.search}`, (err, response, body) =>{
    res.json(JSON.parse(body));
  });
});


export default router;
