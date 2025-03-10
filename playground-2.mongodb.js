//Qustion No:1

//create a Nosql Database
use("Bank")

//create a collection as a Branch
db.createCollection("Branch");

//insert values in Branch collection
db.Branch.insertOne({
    _id:{brach_code:1001}, 
    head_office:"Trichy", 
    brach_details:"main_brach", 
    city:"tiruchirappalli"
});

//cteate a collection as a Customers
db.createCollection("Customers");

//insert value in a customers collection
db.Customers.insertOne({
    _id:{customer_id:101},
    first_name:"Samson",
    last_name:"paul",
    birth_date:"11-11-2024",
    street_no: 03,
    street_name: "east street",
    unit:"East",
    city: "viragalur",
    state: "tamil nadu",
    zip_code:621722,
    email:"samson@mail.com",
    social_security_number:123,
    brach_cod:1001,
    credit_card:654321789,
    loan: 340
});

//create a collection as a loan
db.createCollection("loan");

//insert value in a loan collection
db.loan.insertOne({
    _id:{loan_number:340},
    loan_amount: 3456,
    loan_type: "personal loan",
    loan_duration_month: 12,
    intrest_rate:1.2,
    monthly_payment_due_date:120
});

//create a collection as a Account
db.createCollection("Account");

//insert value in a Account collection
db.Account.insertOne({
    _id:{account_no:34554345},
    customer_id:101,
    balance:345678845,
    type: "savings",
});




// Qustion no 2
//create a collection for import file
db.createCollection("imported_file");
//import json file
mongoimport --db Bank --collection imported_file --file sample.json;



//Question 3
//embed data
//create a collection for embeded data
db.createCollection("embeded");
db.embeded.insertOne({
  name: "samson",
  address: [{ address: "trichy" }, { address: "thanjavur" }]
});



//Question 4
//get customers who have accounts in a specific brach
db.Customers.find({ branch_code: 1001 });



  //Question no 5
  //fetch datails to loan taken by specific customer
  db.loan.find({ loan_number: 340 });



  //Question no 6
  //fetch only the customer's name and city for all customers
  db.Customers.find({}, { _id: 0, first_name: 1, last_name: 1, city: 1 });



  //Question no 7
  //compute total loan amount issued by each brach
  db.loan.aggregate([
    {
      $group: {
        _id: "$branch_code",
        totalLoanAmount: { $sum: "$loan_amount" }
      }
    }
  ]);
 
  

  //Question no 8
  //count the number of accounts each branch
  db.Account.aggregate([
    {
      $group: {
        _id: "$branch_code",
        accountCount: { $sum: 1 }
      }
    }
  ]);
  

  //Question no:9 
  //create an index on the coustomer name field in the customers collection
  db.Customers.createIndex({ first_name: 1, last_name: 1 });


  //Question no: 10
  //fetch customer details along with their account details from the account collection, with the below constraints
  //match the customer_id field in both collection
  //retrive only customers who have an account balance greater than 5000
  //return customer_id, first_name, last_name,and their accounts
  db.Customers.aggregate([
    {
      $lookup: {
        from: "Account",
        localField: "_id.customer_id",
        foreignField: "customer_id",
        as: "accounts"
      }
    },
    {
      $unwind: "$accounts"
    },
    {
      $match: {
        "accounts.balance": { $gt: 5000 }
      }
    },
    {
      $project: {
        _id: 0,
        customer_id: "$_id.customer_id",
        first_name: 1,
        last_name: 1,
        accounts: "$accounts"
      }
    }
  ]);
  