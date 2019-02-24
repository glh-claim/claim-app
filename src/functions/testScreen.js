var output = require('./output.js');

data = {
  customerName: "We the Team", // text
  phoneNumber: "+852 99999999", // text
  email: "email@gmail.com", // text
  companyName: "Bad Company", // text
  category: "Electronic and Appliances", // dropdown
  description: "Looks so ugly compared to the photo", // text
  grounds: "Booking confirmation did not match the order specification", // dropdown - based on category
  transactionDate: "24 Feb 2019", // text
  claimAmount: 3200, // number
  wantApology: true, // boolean - dropdown
  customerLocation: "Hong Kong", // text
  companyLocation: "Hong Kong" // text
}

var text = output.createDemandLetter(data);
console.log(text);
