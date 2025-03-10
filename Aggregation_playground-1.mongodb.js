use ("sampledb")
db.createCollection("samplecollection");
db.Employee.insertMany([
    { "_id": 1001, "Name": "John", "Department": "IT", "Salary": 35000, "Gender": "Male", "Age": 25, "City": "London" },
    { "_id": 1002, "Name": "Smith", "Department": "HR", "Salary": 45000, "Gender": "Female", "Age": 27, "City": "Mumbai" },
    { "_id": 1003, "Name": "James", "Department": "Finance", "Salary": 50000, "Gender": "Male", "Age": 28, "City": "Delhi" },
    { "_id": 1004, "Name": "Mike", "Department": "Finance", "Salary": 50000, "Gender": "Male", "Age": 28, "City": "London" },
    { "_id": 1005, "Name": "Linda", "Department": "HR", "Salary": 75000, "Gender": "Female", "Age": 26, "City": "Mumbai" },
    { "_id": 1006, "Name": "Anurag", "Department": "IT", "Salary": 35000, "Gender": "Male", "Age": 25, "City": "London" },
    { "_id": 1007, "Name": "Priyanla", "Department": "HR", "Salary": 45000, "Gender": "Female", "Age": 27, "City": "Mumbai" },
    { "_id": 1008, "Name": "Sambit", "Department": "IT", "Salary": 50000, "Gender": "Male", "Age": 28, "City": "London" },
    { "_id": 1009, "Name": "Pranaya", "Department": "IT", "Salary": 50000, "Gender": "Male", "Age": 28, "City": "London" },
    { "_id": 1010, "Name": "Hina", "Department": "HR", "Salary": 75000, "Gender": "Female", "Age": 26, "City": "Mumbai" }
  ]);


  db.addressBook.insertMany([
    {
        "_id": 101,
        "address": "2100 Jupiter Spot",
        "zipCode": "9036325"  // Stored as a string
    },
    {
        "_id": 102,
        "address": "25 Moon Place",
        "zipCode": 26237  // Stored as an integer
    },
    {
        "_id": 103,
        "address": "2324 Neptune Ring",
        "zipCode": NumberLong(77622222)  // Stored as 64-bit long integer
    },
    {
        "_id": 104,
        "address": "33 Saturns Moon",
        "zipCode": NumberInt(117)  // Stored as 32-bit integer
    },
    {
        "_id": 105,
        "address": "1044 Venus Lane",
        "zipCode": [
            "99883637232",
            "73488976234"
        ]  // Stored as an array of strings
    }
]);


db.Course.insertMany([
    { _id: 10, CourseName: "Oracle", CourseFee: 3500 },
    { _id: 20, CourseName: "MySQL", CourseFee: 3000 },
    { _id: 30, CourseName: "SQL Server", CourseFee: 4500 }
  ]);
  
  db.Student.insertMany([
    { _id: 1001, StudentName: "James", CourseId: 10 },
    { _id: 1002, StudentName: "Smith", CourseId: 20 },
    { _id: 1003, StudentName: "Warner", CourseId: 30 },
    { _id: 1004, StudentName: "Sara", CourseId: 10 },
    { _id: 1005, StudentName: "Pam", CourseId: 20 }
  ]);


  db.Employee.find({"Age":{"$gte":20}});


  db.Employee.find({"Age":{"$eq":25}});



  db.Employee.aggregate([
    {
        $group:{
            _id: null,
            totalsalary:{$sum: "$Salary"},
            minsalary : {$min: "$Salary"},
            maxsalary : {$max: "$Salary"},
            avgsalary : {$avg: "$Salary"}
        }
    }
  ]);

var pipeline[

]

db.Employee(

);