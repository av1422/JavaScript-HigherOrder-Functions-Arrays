const companies= [
	{name: "Company One", category: "Finance", start: 1981, end: 2005},
	{name: "Company Two", category: "Retail", start: 1992, end: 2008},
	{name: "Company Three", category: "Auto", start: 1999, end: 2007},
	{name: "Company Four", category: "Retail", start: 1989, end: 2010},
	{name: "Company Five", category: "Technology", start: 2009, end: 2014},
	{name: "Company Six", category: "Finance", start: 1987, end: 2010},
	{name: "Company Seven", category: "Auto", start: 1986, end: 1996},
	{name: "Company Eight", category: "Technology", start: 2011, end: 2016},
	{name: "Company Nine", category: "Retail", start: 1981, end: 1989},
	{name: "Company Ten", category: "Technology", start: 1989, end: 1995},
  ];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Lets use for loop first
//   for (i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }

//forEach
// forEach is a better way to loop through an array rather than forloop, like it return
// anything back to you but its much easier and elegant way to loop through the data.

// here the callback  function can take three parameters (company, index, companies)
// 1. a iterator to loop through or something from the array
// 2. get 'index' of the array
// 3. get whole 'companies' array

// companies.forEach (function (company) {
// 	// console.log(company);
// 	console.log(company.start);
// })


// NOT POSSIBLE using forEach, it wont return any array with modified values
let agesTimesTwo = []
ages.forEach(function (age) {
	age * 2;
	agesTimesTwo.push(age);
	// console.log(agesTimesTwo);
});

//filter

// The filter() method creates a new array
// with all elements that pass the test implemented by the provided function.

// from the above ages array, I want to get the ages greater than or equal to 21

// let use first forloop

// let canDrink = []

// for (let i = 0; i < ages.length; i++) {
// 	if(ages[i] >= 21) {
// 		canDrink.push(ages[i]);
// 	}
// }
// console.log(canDrink);

// using forEach

// ages.forEach (function (age) {
// 	if (age >= 21) {
// 		canDrink.push(age)
// 	}
// });
// console.log(canDrink)


// lets filter it using filter

// const canDrink = ages.filter(function (age) {
// 	if (age >= 21){
// 		return true
// 	}
// })


// lets use arrow function write the above code little smarter way

// const canDrink = ages.filter(age => age >=21);

// console.log(canDrink)

 // filter retail companies

//  let retailCompanies = []

// for (let i = 0; i < companies.length; i++){
// 	if (companies[i].category === 'Retail') {
// 		retailCompanies.push(companies[i])
// 	}
// }

// console.log(retailCompanies)

//forEach

// let retailCompanies = []

// companies.forEach(function (company) {
// 	if (company.category === 'Retail') {
// 		retailCompanies.push (company);
// 	}
// })
// console.log(retailCompanies)

// filter

// const retailCompanies = companies.filter(function(company) {
// 	if (company.category === 'Retail') {
// 		return true
// 	}
// })
// console.log(retailCompanies)

// filter using arrow functions

// const retailCompanies = companies.filter(company => company.category === 'Retail')
// console.log(retailCompanies)

//Lets filter all the companies from the 80's

//using for

// let oldCompanies = []

// for (let i=0; i<companies.length; i++) {
// 	if (companies[i].start >= 1980 && companies[i].start <= 1989) {
// 		oldCompanies.push(companies[i])
// 	}
// }
// console.log(oldCompanies)

//using forEach

// let oldCompanies = []

// companies.forEach(function(company) {
// 	if (company.start >= 1980 && company.start <= 1989) {
// 		oldCompanies.push(company);
// 	}
// })
// console.log(oldCompanies)


// using filter and arrow
// const oldCompanies = companies.filter(company => (company.start >= 1980 && company.start <= 1989))
// console.log(oldCompanies)

// get the comapnies that lasted ten years or more

//for

// let companiesLastedTenYears = []

// for (let i=0; i <companies.length; i++) {
// 	if (companies[i].end - companies[i].start >= 10){
// 		companiesLastedTenYears.push(companies[i])
// 	}
// }
// console.log(companiesLastedTenYears);

//using forEach

// companies.forEach(company => {
// 	if (company.end - company.start >= 10) {
// 		companiesLastedTenYears.push(company)
// 	}
// })
// console.log(companiesLastedTenYears);

// using filters and arrow functions

const companiesLastedTenYears = companies.filter(company =>
	(company.end - company.start >= 10)
)

// console.log(companiesLastedTenYears);


//map


// create a array of company name

// const companyNames = companies.map(function (company) {
// 	return company.name;
// })
// console.log(companyNames)

//using arrow functions

// const companyNames = companies.map(company => company.name)
// console.log(companyNames)

//test

// const test = companies.map(company => 1)
// console.log(test)

// need a array with company name and with start to end date
// ${} is template string, es6 syntax for variable
const companyNames = companies.map(company => `${company.name} [${company.start} - ${company.end}]`)
// console.log(companyNames);

//use ages array to mutliple each element with 2

// const agesTimes2 = ages.map(age => age * 2);
// console.log(agesTimes2)

//lets club two maps

// const ageMap = ages
// .map(age => Math.sqrt(age))
// .map(age => age * 2)
// console.log(ageMap)

//sort

//works similar to rest of these functions
//lets sort companies based on thier start date
// basically here the sort needs two paramters to compare then return 1 or -1, so iterates
// through the array by comparies two values in the array

// const sortedCompanies = companies.sort((company1, company2) => company1.start > company2.start ? 1 : -1);
// console.log(sortedCompanies)

// const sortAges = ages.sort() // this looks like it works, if there is a single digit there is a error,so the fix is in the next line

// const sortAges = ages.sort((a, b) => a - b) //ascending order
// const sortAgesDesc = ages.sort((a , b) => b - a) // descending order
// console.log(sortAgesDesc);


//reduce
// The reduce() method reduces the array to a single value.
//let add the elements in the ages array

// using for

// let ageSum = 0
// for (let i = 0; i < ages.length; i++) {
// 	ageSum += ages[i] // ageSum = ageSum + ages[i] // ageSum += ages[i]
// }
// console.log(ageSum)

const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

//get total years of all the companies

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
// console.log(totalYears);

/* Combine Methods */

const combineMethods = ages
.map(ages => ages * 2)
.filter(ages => ages >= 40)
.sort((a, b) => a - b)
.reduce((total, age) => total + age, 0);
console.log(combineMethods);
