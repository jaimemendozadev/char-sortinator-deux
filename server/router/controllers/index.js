function sortinator(req, res){
  
  let inputArr = req.body.formInput.split(" ");  
  
  inputArr = inputArr.sort();  
  
  let finalResponse = inputArr.join(" ")
  
  res.send(finalResponse);
      
}
  
module.exports = {
  sortinator
}