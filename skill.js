//Qustion No:1

//create a Nosql Database
use("Bank")

//create a collection as a Branch
db.createCollection("Branch");

//insert values in Branch collection
db.Branch.insertOne({_id:{brach_code:1001}, head_office:"Trichy", brach_details:"main_brach", city:"tiruchirappalli"});

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
//insert jason file



//fetch datails to loan taken by specific customer
db.Customers.find().sort("Customers");
db.Customers.find( { $and: [ { customer_id:1001 }, {loan:true} ] } );