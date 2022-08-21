const express = require("express");
const bodyParser = require("body-parser");

let state = [ "Andhra Pradesh",
                "Arunachal Pradesh",
                "Assam",
                "Bihar",
                "Chhattisgarh",
                "Goa",
                "Gujarat",
                "Haryana",
                "Himachal Pradesh",
                "Jammu and Kashmir",
                "Jharkhand",
                "Karnataka",
                "Kerala",
                "Madhya Pradesh",
                "Maharashtra",
                "Manipur",
                "Meghalaya",
                "Mizoram",
                "Nagaland",
                "Odisha",
                "Punjab",
                "Rajasthan",
                "Sikkim",
                "Tamil Nadu",
                "Telangana",
                "Tripura",
                "Uttarakhand",
                "Uttar Pradesh",
                "West Bengal",
                "Andaman and Nicobar Islands",
                "Chandigarh",
                "Dadra and Nagar Haveli",
                "Daman and Diu",
                "Delhi",
                "Lakshadweep",
                "Puducherry"];

const app=express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  res.render("index");
  });
app.get("/home",function(req,res){
  res.render("index");
});

app.get("/about",function(req,res){
  res.render("about");
});

app.get("/Backtest-Portfolio",function(req,res){
  res.render("tools/backtest");
});
app.get("/Factor-Analysis",function(req,res){
  res.render("tools/factor");
});
app.get("/Asset-Analytics",function(req,res){
  res.render("tools/assets");
});
app.get("/Monte-Carlo-Simulation",function(req,res){
  res.render("tools/monte");
});
app.get("/Portfolio-Optimization",function(req,res){
  res.render("tools/port");
});
app.get("/Timing-Models",function(req,res){
  res.render("tools/timing");
});

app.get("/Contact-Us",function(req,res){
  res.render("contact",{states:state});
});

app.get("/Backtest1",function(req,res){
  res.render("func/backtest1");
});
app.get("/FAQ",function(req,res){
  res.render("faq");
});

// no data found on assets amd timing

// app.post("/",function(req,res){
//   let item=req.body.playg;
//   // console.log(item);
  
//   res.render("game",{g1link:links[item-1]});

// });

// app.get("/game",function(req,res){
//   res.render("game");
// });



// app.post("/gallery",function(req,res){
//   res.render("gallery");
// });

// app.post("/blog",function(req,res){
//   let item=req.body.playg;
//   // console.log(item);
  
//   res.render("blog",{Title:blogt[item-1],img1:blogi[item-1],body:blogb[item-1]});

// });

// app.post("/home",function(req,res){
//   res.redirect("/");
// });


// app.post("/videos",function(req,res){
//   res.render("videos");
// });

// app.post("/blog-page",function(req,res){
//   res.render("blog-1");
// });


// app.listen(port,()=>{  // do not add localhost here if you are deploying it
//   console.log("server listening to port "+port);
// });


app.listen(3000,function(){
  console.log("server started at 3000");
});




// app.get("/",function(req,res){
//   res.render("home",{startingContent: homeStartingContent});
// });

// app.get("/contact",function(req,res){
//   res.render("contact",{contactContent: contactContent});
// });

// app.get("/compose",function(req,res){
//   res.render("compose");
// });

// app.post("/compose",function(req,res){
// console.log (req.body.postTitle);  

// });

