const express = require("express");
 

const recordRoutes = express.Router();
 

const dbo = require("../db/conn");
 

const ObjectId = require("mongodb").ObjectId;
 
 

recordRoutes.route("/record").get(function (req, res) {
 let db_connect = dbo.getDb("CreditScore");
 db_connect
   .collection("userDetails")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 

recordRoutes.route("/record/:id").get(function (req, res) {
 let db_connect = dbo.getDb("CreditScore");
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect
   .collection("userDetails")
   .findOne(myquery, function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 

recordRoutes.route("/record/add").post(function (req, response) {
 let db_connect = dbo.getDb("CreditScore");
 let myobj = {
  FullName:req.body. FullName,
  Gender:req.body. Gender,
  EmailAddress:req.body. EmailAddress, 
  PhoneNumber:req.body. PhoneNumber,
  Address:req.body. Address,
  PanNumber:req.body. PanNumber, 
  Amount:req.body. Amount,
  Loan:req.body. Loan ,
  PaidLoanInTime:req.body. PaidLoanInTime


 };
 db_connect.collection("userDetails").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});
 

recordRoutes.route("/update/:id").post(function (req, response) {
 let db_connect = dbo.getDb("CreditScore");
 let myquery = { _id: ObjectId(req.params.id) };
 let newvalues = {
   $set: {
            FullName:req.body. FullName,
            Gender:req.body. Gender,
            EmailAddress:req.body. EmailAddress, 
            PhoneNumber:req.body. PhoneNumber,
            Address:req.body. Address,
            PanNumber:req.body. PanNumber, 
            Amount:req.body. Amount,
            Loan:req.body. Loan ,
            PaidLoanInTime:req.body. PaidLoanInTime
          
   },
 };
 db_connect
   .collection("userDetails")
   .updateOne(myquery, newvalues, function (err, res) {
     if (err) throw err;
     console.log("1 document updated");
     response.json(res);
   });
});
 

recordRoutes.route("/:id").delete((req, response) => {
 let db_connect = dbo.getDb("CreditScore");
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect.collection("userDetails").deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   response.json(obj);
 });
});
 
module.exports = recordRoutes;