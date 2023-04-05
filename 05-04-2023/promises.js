let onFulfilment = (result) => {
  console.log(result);
};
let onRejection = (error) => {
  console.log(error);
};

var prom = new Promise(function (resolve, reject) {
  var name = "anil";
  if (name == "anil") resolve(" Promise implemented, successfully ! ");
  else reject(" Failure Case ! ");
});
prom.then(onFulfilment);
prom.catch(onRejection);

