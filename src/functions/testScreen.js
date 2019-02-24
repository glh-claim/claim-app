var output = require('./output.js');

data = {
  customerName: "Sean Chok",
  phoneNumber: "+852 99999999",
  email: "email@gmail.com",
  companyName: "Bad Company",
  category: "Electronic and Appliances",
  itemType: "goods",
  description: "Looks so ugly compared to the photo",
  grounds: "Not of satisfactory quality",
  transactionDate: "24 Feb 2019",
  claimAmount: 3200,
  customerLocation: "Hong Kong",
  companyLocation: "Hong Kong"
}

var text = output.createDemandLetter(data);
console.log(text);
