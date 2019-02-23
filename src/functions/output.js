module.exports = {
  createDemandLetter: (data) => {
    // var date="";
    // var customerName="";
    // var companyName="";
    // var goodsServices="";
    // var description="";
    // var grounds="";
    // var transactionDate="";
    // var claimedAmount="";
    // var customerLocation="";
    // var companyLocation="";
    // var sectionExtract="";
    // var email="";
    // var phoneNumber="";
    var text="Date: "+ data.date +
            "\n\nRe: "+ data.customerName +"’s claim against you on CLAIMate" +
            "\n\nDear "+ data.companyName +" Customer Service Team," +
            "\n\nI write to claim in relation to the "+ data.goodsServices +" supplied by your company as evidenced by the attached invoice, receipt and/or payment record containing the identifying details." +
            "\n\nParticulars of the claim: " +
            "\n\n(1)Description of facts: "+ data.description +
            "\n(2)Grounds for Claim: "+ data.grounds +
            "\n(3)Transaction Date: "+ data.transactionDate +
            "\n(4)Claimed Amount: "+ data.claimedAmount +
            "\n*The Claimant also kindly requests a written apology from your company." +
            "\n(5)Location of Claimant: The claimant was located in "+ data.customerLocation +" when the claimant received the "+ data.goods_services +
            "\n(6)Location of Company: These "+ data.goods_services +" were acquired from a branch registered in "+ data.companyLocation +
            "\n-----------------------" +
            "\n\nYour company has breached your statutory duty. "+ data.sectionExtract +
            "\n\n-----------------------" +
            "\nIn any event, it is trite that contracts shall be honoured in full and breaches shall be remedied in all cases, including the present case. In the spirit of cooperation and pragmatism, it is in our mutual interest that your company entertains the aforementioned complaints ASAP." +
            "\n\nThank you for your time and cooperation, I look forward to your response." +
            "\n\nYours sincerely," +
            "\n"+ data.customername +
            "\n\nLEGAL AND REGULATORY NOTICE BY CLAIMMATE"+
            "\n\n(1)CLAIMate is a tech-driven platform promoting access to justice by assisting claimants in their recovery of meritorious petty claims and, in parallel, leverages fair reviews of online vendors and service providers." +
            "\n\n(2)This letter of demand is automatically generated on CLAIMate for "+ data.customername +" of "+ data.location_customer +" who acts in a personal capacity.  CLAIMate is not a law firm and does not provide legal advice." +
            "\n\n(3)This email is sent through the CLAIMate server.  By replying directly to this email, you agree and fully understand that your response may be published in part or in whole on our public platform www.claimate.com.hk.  If you desire to pursue private correspondence with [NAME] you may do so through his/her email correspondence: "+ data.email +"or telephone: "+ data.phoneNumber +
            "\n\n(4)Please be aware that upon the expiry of a TWO-week period from the date of submission of this letter of demand, the users of our platform, in this case, "+ data.customername +" have the option to publish this demand letter and its contents in any form.";
    return text;
  }
}
