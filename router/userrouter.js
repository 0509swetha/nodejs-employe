"use strict"
const express=require("express");
const router=express.Router();
router.use(express.json());
//description:::create employee
//method::post
//url::http://localhost:2000/createEmployee
router.post("/createEmployee",(req,res)=>{
    ("REQ===::::",req);
    
    res.send(req.body);
});

//description::get employee details
//method::get
//url::http://localhost:2000/getEmployeedetails
router.get("/getEmployeedetails",(req,res)=>{
    console.log("REQ===::::",req);
    let employees=[{
        "name":"swetha",
        "company":"infosys",
        "salary":"20k"
    },{
        "name":"priya",
        "company":"accenture",
        "salary":"50k" 
    },{
        "name":"swarupa",
        "company":"wipri",
        "salary":"80k"
    }]
    res.send(employees);
});

//description::get one student details
//method::get
//url::http://localhost:2000/getOneEmployeedetails
router.get("/getOneEmployeedetails/:salary",(req,res)=>{
    console.log("REQ===::::",req.params.salary);
    let employs=[{
        "name":"swetha",
        "company":"infosys",
        "salary":"20k"
    },{
        "name":"priya",
        "company":"accenture",
        "salary":"50k" 
    },{
        "name":"swarupa",
        "company":"wipri",
        "salary":"80k"
    }]
    let employ=employs.filter((a)=>{
        if(a.salary===req.params.salary){
            return a;
        }
        
    })
    res.send(employ);
})
    
    router.get("/getOneEmployeedetails",(req,res)=>{
        console.log("REQ===::::",req.query.name);
    let employe=[{
        "name":"swetha",
        "company":"infosys",
        "salary":"20k"
    },{
        "name":"priya",
        "company":"accenture",
        "salary":"50k" 
    },{
        "name":"swarupa",
        "company":"wipri",
        "salary":"80k"
    }]
    let result=employe.filter((b)=>{

        if(b.name===req.query.name){

            return b;

        }else if(b.company===req.query.company){
            return b;

        }else if(b.salary===req.query.salary){

            
            return b;

        }

    })

    

    res.send(result)
});

let employe=[{
    "name":"swetha",
    "company":"infosys",
    "salary":"20k"
},{
    "name":"priya",
    "company":"accenture",
    "salary":"50k" 
},{
    "name":"swarupa",
    "company":"wipri",
    "salary":"80k"
}]


router.delete("/deleteemployee/:name", (req, res) => {
    let name = req.params.name;
    let index = employe.findIndex(user => user.name === name);
    
    if (index >= 0) {
    let employ = employe[index];
    employe.splice(index, 1);
    res.json(employe);
    } else {
    res.status(404).send("employee not found");
    }
    });
    
    router.put("/updateemployes/:name", (req, res) => {
        let employes=[{
            "name":"swetha",
            "company":"infosys",
            "salary":"20k"
        },{
            "name":"priya",
            "company":"accenture",
            "salary":"50k" 
        },{
            "name":"swarupa",
            "company":"wipri",
            "salary":"80k"
        }]
     let name=req.params.name
            let index = employes.findIndex(a => a.name === req.body.name);
            if (index >= 0) {
              let result= employes.splice(index,1)
            result.salary = req.body.salary;
            console.log(result.salary)
            res.json(result);
            } 
            
        });
        module.exports=router;

            
