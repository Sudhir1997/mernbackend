import express from "express";
import userSchema from "./../datamodel/user.mjs";
import jwt from "jsonwebtoken";
const router = express.Router();

router.post("/", async (req, res) => {
  let result = await userSchema.find({ email: req.body.email });
  console.log(req.body,result.length,result[0].email)
  if(result.length>0){
    if(result[0].password===req.body.password){
        let token=jwt.sign({
            data: req.body.email
          }, 'secret', { expiresIn: '1h' });
        res.json({token:token,value:"Valid Password"});
    }
    else{
        res.json({value:"Not a Valid Password"});
    }
  }
  else{
      res.json({value:"No Record Found"});
  }
});

export default router;
