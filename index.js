const express=require("express");
const cors=require("cors");
const mysql=require("mysql2");

const app=express();
app.use(express.json());
app.use(cors());

const con=mysql.createConnection({
	host:"sql12.freesqldatabase.com",
	user:"sql12754107",
	password:"wpUaAdLfGs",
	database:"sql12754107"

});



app.post("/ss",(req,res)=>{
	let sql="INSERT INTO studentmarks (rno, name, marks) VALUES (?,?,?);";
	let data=[req.body.rno,req.body.name,req.body.marks];
	con.query(sql,data,(err,result)=>{
		if(err)	res.send(err);
		else	res.send(result);
	});

});

app.get("/gs",(req,res)=>{
	let sql="select * from studentmarks";
	con.query(sql,(err,result)=>{
		if(err)	res.send(err);
		else	res.send(result);
	});
});

app.delete("/ds",(req,res)=>{
	let sql="delete from studentmarks where rno=?";
	let data=[req.body.r];
	con.query(sql,data,(err,result)=>{
		if(err)	res.send(err);
		else	res.send(result);
	});
	
});

app.put("/us",(req,res)=>{
	let sql="update studentmarks set name=?, marks=? where rno=?";
	let data=[req.body.name,req.body.marks,req.body.rno];
	con.query(sql,data,(err,result)=>{
		if(err)	res.send(err);
		else	res.send(result);
	});
});

app.listen(9000,()=>{console.log("ready to serve @ 9000");});