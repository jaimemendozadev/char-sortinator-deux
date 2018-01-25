function sortinator(req, res){
  console.log("req is ", req.body.formInput)  
  
  let inputArr = req.body.formInput.split(" ");  
  
  inputArr = inputArr.sort();  
  
  let finalResponse = inputArr.join(" ")
  
  res.send(finalResponse);
      
}
  
module.exports = {
  sortinator
}