

//db connect
mongoose.connect("mongodb://127.0.0.1:27017/data").then(()=>{
    console.log("Database is connected");
  }).catch((err)=>{
      console.log(err);
  })


