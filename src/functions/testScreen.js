var output = require('./output.js');

data = {
  customerName: "Sean Chok", // text
  phoneNumber: "+852 99999999", // text
  email: "email@gmail.com", // text
  companyName: "Bad Company", // text
  category: "Electronic and Appliances", // dropdown - db.categories
  itemType: "goods", // drop down services
  description: "Looks so ugly compared to the photo", // text
  grounds: "Not of satisfactory quality", // dropdown
  transactionDate: "24 Feb 2019", // text
  claimAmount: 3200, // number
  wantApology: true,
  customerLocation: "Hong Kong", // text
  companyLocation: "Hong Kong" // text
}

var text = output.createDemandLetter(data);
console.log(text);
