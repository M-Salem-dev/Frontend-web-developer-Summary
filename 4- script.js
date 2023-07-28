// وهكذه marginBottom او backgroundColor او borderRadius كمل كيس مثلا cssبستخدم عناصر ال jsفي ال cssملحوظه ان لم بستخدم ال 
window; // ده بيتعمل مع المتصفح windowال
document; // htmlده بيتعمل مع كود ال windowال
document.getElementById("demo").innerHTML = "Hello World"; // Hello World كلمه demo اللي اسم idانا كده بقول اكتب جوه ال innerHTML

// Date
var myDate = new Date(); 

/*
jsضغط ملف ال 
javascript-minifier.com 
*/
<body>
	<script src="js/script.js"></script>	/* bodyهو اخر سطر قبل الhtmlتحسن مكان اكتب في اللينك في صفحه ال  */
</body>

window; // ده بيتعمل مع المتصفح windowال
console; // او لعرض بيانات لي انا errorده بيتعمل مع ال windowال
document; // htmlده بيتعمل مع كود ال windowال

// var userName = Fatma; //ومينعش اعمل اسبيس ع الكلمه 	$_ ممكن تبدا بس ب الغلامه ده	 3!@#%^&*)(- كمل كس ومينفعش اكتب اسم محجوز للنظام او العلامات ده  variable تكتب اسم ال 

let y;	//Global
// DataTypes

// DataTypes primitive
// Number -> var productPrice = 300;		// 2.5, -400, 5, Number اي رقم 
// String -> var userName = "Ahmed Salem";	// String اي حاجه في دبل كوت او سنجل كوت 
// boolean -> var isLogin = true;	// يعني صحيح 
// boolean -> var isLogin = false;	// يعني خطا 
// undefined -> var x;				// ده كده يعني لسه مخدش قيمه undefined ده كده نوع 
// null -> var airBags = null;		// jsده اصلا غلطه في ال object بس هيطلع كلمه null ده يعني فاضي والمفروض يطلع كلمه null
// // feMaleل انوع ال null ان لو عمل موقع وبنت سجلت بعمل الموقف من التجنيد ب nullمثلا ل ال

// ``	واي حاجه كذه سطر  forعلامه الباك تك ده بستخدمها في ال 	

//typeof هيبقي من DataTypesلو عايز اعرف نوع ال 
console.log(typeof(userName));	// String هيظهر 

// DataTypes non primitive
// object   // ده بيقي معلومات لشخصه واحد 
var user = {}
var user = {
	name: "ahmed",
	age: 25,
	gender: "male",
	wife: {
		name: "aya",
		age: 22,
		gender: "female",
	},
	drive: function (speed) {
		console.log("you drive on " + speed);
	}
};

console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user.wife.name);
console.log(user.wife.age);
user.drive(120);

//---------------------------------
// Array	// ده بيقي مجموعه من الاشخاص 
// Array => list 	// من الالون او من عربيات او من الاصدقاء list مثلا dataمن نفس ال list بيقي Arrayال 

var friends = [];

//	index =>  [	  0,		1,	   	  2,	  3,	   4,	  5,	 6,	   7  ]
var friends = ['Fatma', 'Mohamed', 'Ahmed', 'hazem', 'aya', 'hpipa', 12, false]

console.log(friends);
// Fatma // هيطبع كده 
// Mohamed
// Ahmed
// hazem
// aya
// hpipa
// huda

console.log(friends[2]);		// Ahmed هيطبع كده 

// كلها friendsطيب لو عايز اطبع ال 
// length =>  length مع for لو عايز اجيب الاسم كلها يبقي اعمل 
for (var i = 0; i < friends.length; i++) {
	console.log(friends[i]);
}

// Array جوه object مثلا تاني ان اعمل 
var user = [									// index
	{ name: "Ahmed", age: 25, Gender: "Male" },	// 1
	{ name: "mai", age: 24, Gender: "feMale" },	// 2
	{ name: "abdo", age: 23, Gender: "Male" },		// 3
	{ name: "Fatma", age: 20, Gender: "feMale" },	// 4
]
console.log(user[0]);	// {name:"Ahmed", age: 25, Gender: "Male",} هيطبع كده 
console.log(user[1].age);	// 24 هيطبع كده 

user.push({ name: "huda", age: 40, Gender: "feMale" })	// Array جوه object انا كده بضاف 

for (var i = 0; i < user.length; i++) {
	console.log(user[i]);
}
// هيطبع كده 
// {name:"Ahmed", age: 25, Gender: "Male"},
// {name:"mai", age: 24, Gender: "feMale"},
// {name:"abdo", age: 23, Gender: "Male"},
// {name:"Fatma", age: 20, Gender: "feMale"},
// {name:"huda", age: 40, Gender: "feMale"},

// طيب لو عايز اطبع الاسم فقط
for (var i = 0; i < user.length; i++) {
	console.log(user[i].name);
}
// هيطبع كده 
// Fatma 
// Mohamed
// Ahmed
// hazem
// aya
// hpipa
// huda
//------------------------------
window.alert('Hello World'); // ده بيتعمل مع المتصفح windowال
window.print();

console.log("Hello World"); // consoleبيظهر في ال error ده لو في

// document.	// htmlده بيتعمل مع كود ال documentال
var elements1 = document.getElementById("demo");	//elements1 اللي اسم varجوه ال demo اللي اسم idانا كده مسكت ال getElementByIdال
var elements2 = document.getElementsByClassName("test");	//Array و بيشبها HTMLمن ال Classده بيجيب ال
var elements3 = document.getElementsByTagName("h2");	//Array و بيشبها HTMLمن ال  span , h1 , div ده بيمسك اي تاج
var elements4 = document.getElementsByName("gender");	//Array و بيشبها HTMLمن ال input اللي بيبقي في Nameمن ال item اللي اسم Attributeانا بقول هات ال

var elements5 = document.querySelectorAll("h1");	//Array في الموقع و بيشبها h1 وبيجيب اي element ممكن اعمل ب css ده بيشتغل بطريقه ال 
var elements5 = document.querySelectorAll(".services span");	//Array في الموقع و بيشبها span وبيجيب اي class ممكن اعمل ب css ده بيشتغل بطريقه ال 
var elements5 = document.querySelectorAll("#services span");	//Array في الموقع و بيشبها span وبيجيب اي id ممكن اعمل ب css ده بيشتغل بطريقه ال 

var elements6 = document.querySelector("h1");	// بيمسك اول واحد بس span بس لو في كذه class ممكن اعمل ب css ده بيشتغل بطريقه ال 
var elements6 = document.querySelector(".services span");	// بيمسك اول واحد بس span بس لو في كذه class ممكن اعمل ب css ده بيشتغل بطريقه ال 
var elements6 = document.querySelector("#services span");	// بيمسك اول واحد بس span بس لو في كذه id ممكن اعمل ب css ده بيشتغل بطريقه ال 

// title
let title = document.title;
title = 'Fatma'	// titleانا كده بغير ال 

document.getElementById("demo").innerHTML = "Hello World"; // Hello World كلمه demo اللي اسم idانا كده بقول اكتب جوه ال innerHTML

var userName = "Ahmed"
document.getElementById("demo").innerHTML = userName;	// Ahmed هيظهر 
document.getElementById("demo").innerHTML = 'Hello ' + userName;	// Hello Ahmed هيظهر 
//=========================================================================================================================================
// conditional statments -> ده يعني الجمال الشرطيه
// if condition	->	لو متحققش elseده يعني لو اتحقق  وال if

// no لو مش = ال10 قول yes ال 10 قول = x انا كده بقول لو 
var x = 10;
if (x == 10) {
	console.log("yes");
} else {
	console.log("no");
}


// جديده if طريقه 
var x = 10;
x == 10 ?
	console.log("yes");		// بس if ده كده 

x == 10 ?
	console.log("yes")		// if ده كده 
	: console.log("no");		// else ده كده 

// لو عابز اعمل اكتر من شرط 
x == 10 ?				// if ده كده 
	console.log("yes")
	: x == 18 ?				// else if ده كده 
		console.log("yes")
		: console.log("no");		// else ده كده 

// طريقه تانيه 
var x = 10;
let result = x >= 10 ?	//  if ده كده 
	'yes'
	: x => 20 ?		// else if ده كده 
		'yes 20'
		: 'no no';	// else ده كده 

console.log(result);
// ----------
// yes قول gender == female او gender == male انا كده بقول اكبر من 20 واصغر من 30 وكمان ال 
var age = 30;
var gender = "male";
if (age >= 20 && age <= 30 && (gender == male || gender == female)) {
	window.alert("yes")
}
else {
	window.alert("no")
}

// جديده if طريقه 
age >= 20 ?
	console.log("yes")
	: console.log("no")

// ------------
// no لو بيساوي متحققش الشرط وقول yes انا كده بقول لو مش بيساوي ال40 حقق الشرط وقول 
var x = 40;
if (x != 40) {
	window.alert("yes")
}
else {
	window.alert("no")
}

// ----------
// اكتر من مره else و if مثلا ان ممكن اعمل اكتر 
// else if بس لو نفس العنصر بعمل 
var userName = "ahmed";
if (userName == "ali") {				//welcome ali طلع ali بيساوي userNameانا كده بقول لو ال
	window.alert("welcome ali");
}
else if (userName == "sayed") {		//welcome sayedطلع sayed بيساوي userNameانا كده بقول لو ال
	window.alert("welcome sayed");
}
else if (userName == "mohamed") {	//welcome mohamedطلع mohamed بيساوي userNameانا كده بقول لو ال
	window.alert("welcome mohamed");
}
else {								// welcome fatma لو محققش الشروط ده اظهر 
	window.alert("welcome fatma");
}
// --------------
// switch	// ده بتشتغل بس في حاله ال === فقط زي المثلا ده switchوال switch ده بطريقه ال 
var userName = "ahmed";

switch(userName)
{
	case "ali":
	console.log("welcome ali ");
	break;
	
	case "sayed":
	console.log("welcome sayed ");
	break;
	
	case "mohamed":
	console.log("welcome mohamed ");
	break;
	
	default:
	console.log("welcome fatma");
}
// ---------
// لوحده if عناصر مختلفه بعمل كل واحده if لو بعمل 

if(userName == 'ali'){
	window.alert("welcome ali");
}
if(age== 12){
	window.alert(24);
}
if(salary== 3000){
	window.alert(4000);
}

// ----------------------------------------
// ifاختصر ال 
var temp=120,	// red انا كده بقول لو اكبر من 100 اظهر 
newvar=(temp>100)?"red":"blue"; // red اظهر true لو رجع ب 

temp=20,	// blue انا كده بقول لو اكبر من 100 اظهر 
newvar=(temp>100)?"red":"blue";	// blue اظهر false لو رجع ب 

// ----------
// --x
// ++x
// +	// String و بيلازق في Numberده بيجمع في ال
// =	// assignment operator 
// ==	// valueبيقران ب ال 
// ===	// datatypeوبيقران ب ال valueبيقران ب ال
// >	// ده اكبر 
// >=	// ده اكبر او بيساوي 
// <	// ده اصغر 
// =<	// ده اصغر او بيساوي 
// &&	//	true لازم يكون كل ب false هيطلع ب false لو عندي اكتر من شرط وشرط واحد ب and ده يعني و كذه 
// ||	//	true هيطلع ب true لو عندي اكتر من شرط وشرط واحد ب or ده يعني او كذه 
// !	// false بيخالي true ده بيعكس لو كان 
// !=	// ده يعني لا يساوي 
// +=	// انا كده بضاف غ الحاجه 

// console.log(5 + 7 )	//12 
// console.log("5" + "7" )	//57	
//لو عايز احولهم ل ارقام بعمب كالاتي 
// console.log( +"5" +  +"7" );
// console.log(Number("5" + "7"));	//12
// console.log(parseFloat("5.5" + "7"))	//12.5

// Number.isInteger(5)	//false لو جوه دبل يبقي هيظهر true بيظهر Number لو Number ولا مش Number ده بتشيك اذا كان isInteger
// console.log( Number.isInteger(5) );	// true
// console.log( Number.isInteger("5") );	// false

// console.log(x.toUpperCase());	// ده بيحول الكلام للكبتل 
// console.log(x.toLowerCase());	// ده بيحول الكلام ل اسموال 

// console.log(x.toUpperCase().trim());	//ده بيشال اي مسافه من الشمال ومن اليمين trim
// trim	 // ده بيشيل اس اسبيس 
var myStr = "  hi Sc fatma Sc-mohamed     "
console.log(myStr.trim()) // ده بيشيل اس اسبيس 

//---------------------------
// +	// String و بيلازق في Numberده بيجمع في ال
let x = 10;
let y = 10;

let xy =  x + y;
console.log(xy)

// Number ل Stringلتحويل ال 
let x2 = "20";
let y2 = "20";

let xy2 = Number(x2) + Number(y2) ;
console.log(xy2);
//---------------------------


//================================================================================================================
// loops -> ده بيكرار عناصر	loops		// do while او while او forفي ثلاث طرق للكتب ب ال
// for(var i=0; i<friends.length; i++){}		// ده بيجب العناصر كلها  Arrayده بتشتغل مع ال  length

// html
<ul id="myUl">
</ul>

// js
var Box = '';
for (var i=0; i<10; i+=1) {
	Box += "<li>Home</li>";	//<li>Home</li> ال Boxانا كده بضاف ع ال +=
}
document.getElementById('myUl').innerHTML = Box;	// Home li هيطبع 10

// -----------------
// html
<div class="">
	<table class="table table-hover">
		<thead>
			<tr>
				<th>#</th>
				<th>Name</th>
				<th>e-mail</th>
				<th>fon</th>
			</tr>
		</thead>
		<tbody id="demo">
			// jsالكود اللي كان هنا بيكتب في ال
		</tbody>
	</table>
</div>

// js
var Box = '';
for (var i = 0; i < 10; i++) {
	Box += `<tr>
				<td>+i+</td>
				<td>ahmed</td>
				<td>ahmed.com</td>
				<td>010</td>
			</tr>`
}
document.getElementById('demo').innerHTML = Box;

// ------------------
// html
<div class="container my-5">
	<div id="myRow" class="row">
		// jsالكود اللي كان هنا بيكتب في ال
	</div>
</div>

// js
var Box = '';
for (var i = 0; i < 20; i++) {
	Box += `<div class="col-md-4">	
				<div class="items text-center">
					<img class="w-100" src="images/logo.png" alt="">
					<h1>lorem, ipsum dolor</h1>
					<p>lorem, ipsum dolor lorem, ipsum dolor lorem,</p>
				</div>
			</div>`;
}
document.getElementById('myRow').innerHTML = Box;

// -------------
// html
<select id="mySelect">
</select>

// js
var Box = '';
for (var i = 1950; i < 2020; i++) {		// هيبداء من 1950 ل 2020 
	Box += '<option>' + i + '</option>'
}
//for (var i = 2020; i >= 1950 ; i--){	//هيبداء من 2020 ل 1950
//Box += '<option>' +i+ '</option>'
//}
document.getElementById('mySelect').innerHTML = Box;


//------------------
// بلعكس for مثل 
for (var i = 20; i > 0; i--) {
	console.log(i);	// هيطبع 20 19 18 من الاكبر للصغر 
}

//----------------
//  nasted loop  مثل 	// loop جوه loop
let cars = ['BMW', 'Mercedes', 'Honde'];
let models = [2020, 2021, 2022];

for (let i = 0; i > cars.length; i++) {
	console.log(`Car: ${cars[i]}`);
	for (let j = 0; j > models.length; j++) {
		console.log(`Model: ${models[j]}`);
	}
	cosole.log('______________');
}

//======================================================================================================================================
// Function -> 		re-use يعني بتعيد استخدم الكود 

function sum(x=0, y=0) { //حاجه هيساوي اللي موجود prmter كده لو مدخلش في 
	console.log(x + y);
}
sum(1, 2);	// هيطبع كده 3
sum(5, 4);	// هيطبع كده 9

// ----------------------------
function wek(userName) {
	console.log("Welcome " + userName);
}
wek("Fatma");	// Welcome Fatma هيطبع كده

// ---------------------------
function calcProduct(price, tex, profit, ads) {

	var mesult1 = price + profit;
	var result2 = mesult1 * tex;
	var sesult3 = result2 + ads;
	var xesult4 = sesult3 / 3;

	console.log(xesult4); // انا كده بعرض فقط 
}
calcProduct(100, 10, 20, 20);	//406.6666666666667 هيطبع 

// --------------------
// --------------------
// 		variables اقدر اسويها في return اللي فيها function و ال return تاتي بعمل functionلو عايز استخدم ال 
// return علشان استخدمها تاني بعد كده يبقي اعمل yلو عايز ال 
// return تعرض وتعمل function وممكن
function test() {
	var y = 10;
	// console.log(y);	// انا كده بعرض فقط هنا 
	return y;	// تاني بره عادي function انا كده هستخدم ال 
	// مش بيشتغل ومش بيظهر حاجه خالص returnاي حاجه تكتب بعد ال 
	// function لو عمل return اللي هيشتغل بس بعد ال 
}
let xx = test();
console.log(xx);

// علشان اعرف اشتغل عليا بعد كده variables لو هستخدمها تاتي اروح استلام في return لو عايز امسك رقم 10 لازم اعمل 

// ------------
// -----------------
// self invoked ->	function اتوماتك ل ال coll ده بتعمل 
(function () {
	console.log("Hello");
})();

// ------------------------------
// جاهز paramter انا بكون مجهز paramter ده في حاله ان لو المستخدم مدخلش 

12/7
// template literal 	// `${}`	// `` لازم وانا بستخدم ال العلامه ده لازم يكون معاه علامه الباك تك ${}
// 2 -> default paramter
function welcome(userName = 'mohamed', age = 25, salary = 9000) {	// هو هيدخل اتوماتك paramterمدخلش حاجه مكان ال userده في حاله لو ال
12/7
console.log(`Hello ${userName} your Age is ${age} your salary is ${salary}`);	
// `` لازم وانا بستخدم ال العلامه ده لازم يكون معاه علامه الباك تك ${}
}
welcome("Fatma", 150, 50000) // Hello Fatma your Age is 150 your salary is 50000 
welcome()	// Hello mohamed your Age is 25 your salary is 9000  paramter مداخلش حاجه خالص بيخد الحاجات الجاهزه اللي في userلو ال 

// -------
// مثل تاني 
function hello(...numb) {
	console.log(numb)
}
hello(mohamed, fatma);		// [mohamed,fatma] Array هيطبع 

// -------
//ومعرفش هم ايه Array مثل تاني ان عايز اجمع الارقام جاي من 
function hello(...numbs) {
	let result = 0;
	for (let i = 0; i < numbs.length; i++) {
		result += numbs[i];
	}
	console.log(result);
}
hello(5, 10, 5, 20);		// 40 هيطبع 

// ----------------
// --------------------
// Arrow function

let x = function () {	// عاديه function ده 
	return 1;
}
console.log(x());

// Arrow
let x = () => {
	return 1;
}
console.log(x());

// Arrowطريقه تانيه لل
let x = () => 1;	// حاجه واحده فقط returnالطريقه ده في حاله ال 
console.log(x());

// paramter مع ال Arrowطريقه تانيه لل
let x = (name) => {
	return 'hello';
}
console.log(x(mohamed));	// hello mohamed 

// مثل تاني 
function demo(name) {		// عاديه function ده 
	return 'welcome ' + name;
}
let x = demo('Ahmed');
console.log(x);

// Arrowطريقه ال
let demo = (name) => {
	return 'welcome ' + name;
}
let x = demo('Ahmed');
console.log(x);

// Arrowطريقه تانيه ل 
// ل سطر واحد بس return واحد بس ولم تعمل permtr لو في 
let demo = (name) => 'welcome ' + name;
let x = demo('Ahmed');
console.log(x);

// --------------------------
// Hoisting -> رفع 

// function فوق coll واقدر اعمل Hoisting وكمان ده بيعمل function بيبداء ب stament
wek("fatma");	// هنا هيشتغل collال 
function wek(userName) {
	console.log("Welcome " + userName);
}
wek("mohamed");

// error هيطلع function فوق coll ولو عملت Hoisting مش بيعمل function مش بيبداء ب expression
var wek = function (userName) {
	console.log("Welcome " + userName);
}
wek("mohamed");


// 1 -> var || let || const //  es6 وكمان ظهر في for و ifالفرق م بينهم الاسكوب بتاع ال 
// let معمول للحاجات الثابته مثلا لو واخد 1000جرام ده مش هيتغير و لو هيتغير يبقي const ال const و letوالفرق م بين ال
let y;	//Global
var y = 10;	//Global		// Hoisting وده غلط  وده بيعمل Global بيبقي forوال ifلم بيدخل جوه ال
let y = 10; //Global		// Hoisting وده الصح ده مش بيعمل Local بيبقي forوال ifلم بيدخل جوه ال
const brqg = 10; //Global 	// Hoisting ده علشان العناصر الثابته ده مش بيعمل const لو مش هعدل عليا استخدم

function welcome() {
	var y = 10;	//Local
	let y = 10; //Local
}

if(true) {
	var y = 10;	//Global
	let z = 10; //Local
}

for(let i=0; i<10; i++){
	var y = 10;	//Global
	let y = 10; //Local
}


//======================================================================
// object ->  {} objectده علامه ال	// ده عباره عن معلومات لحاجه واحده object
// masod اسمها object جوه ال function

var user = {	// علشان ده معلومات ل نفس الشخص object انا عملت 
	name: "Ahmed",
	age: 25,
	Gender: "Male"
};
console.log(user);			//{name:"Ahmed", age: 25, Gender: "Male",}هيطبع معايا كده 
console.log(user.name);	//Ahmed بعمل كالاتي وهيطبع nameلو عايز اطبع بس ال

// -------------------------
// object جوه function و object مثلا ان ممكن اعمل 
var user = {
	name: "Ahmed",
	age: 25,
	Gender: "Male",

	wife: { name: "aya", age: 23, Gender: "feMale" },	// object 

	drive: function (speed) {	// Methods كده اسمها object اللي تبقي جوه جوه function 
		console.log("you wicm " + speed);
	},
};
console.log(user.wife);		// {name:"aya", age: 23, Gender: "feMale"} هيطبع
console.log(user.wife.name);	//aya كده هيطبع userاللي جوه wifeاللي جوه name انابطبع
user.drive(Ruqe);	// you wicm Ruqe هيطبع 

// --------------------
// objectجوه Array مثلا ان ممكن اعمل 
var user = {
	name: "Ahmed",
	age: 25,
	Gender: "Male",
	friends: ['Fatma', 'Mohamed']	// Array
};
console.log(user.friends);	// [Fatma Mohamed] ده كده هيطبع 
console.log(user.friends[0]);	//فقط Fatma ده كده هيطبع 

for (var i = 0; i < user.friends.length; i++) {
	console.log(user.friends[i]);
}

//==============================================================================================================
// Array =>  [] Arrayده علامه ال

//	index =>  [	  0,		1,	   	  2,	  3,	   4,	  5,	 6,	   7  ]
var friends = ['Fatma', 'Mohamed', 'Ahmed', 'hazem', 'aya', 'hpipa', 12, false]

console.log(friends[2]);		// Ahmed هيطبع كده 

// Array Methods	// Methodsده اسم ال 
friends.sort();			// Z ل A ده بيرتب العناصر من حرف
friends.reverse();		// بيخلي الاخير في الاول والاول في الاخير Arrayده بيشلب ال
friends.push("salma", "ibrhem");	// ممكن اضافه اكتر من اسم مثلا salma هيطبع hpipa بعد Arrayده بيعمل اضافه في اخر ال
friends.unshift("Ali");	// Ali هيطبع Fatma قبل Arrayده بيعمل اضافه في اول ال
friends.pop();			// hpipa كده تم حذف Arrayده بيعمل حذف في اخر ال
friends.shift();		// Fatma كده تم حذف Arrayده بيعمل حذف في الاول ال
friends.splice(2, 3);	// 2عنصر مش بيخد ال3 ع طول Arrayده كده بيختر من رقم 2 في ال  'Ahmed', 'hazem', 'aya', يعني كده انا حذفت
friends.includes("Fatma");		// false لو مش موجوده true موجوده بيطلع Fatma لو search ده بيعمل 
friends.slice(0, 4);				// ['Fatma', 'Mohamed', 'Ahmed']	مثلا عملت من (0,4)هيطبع Array ده بيقطع جزءمن
friends.concat(["hany", "kendr"]);	// Array علي Array ده بيضافه 
friends.join(" ");					//قليل ان استخدمها  String ل Array ده بيحول من  

// includes // ده بيعمل بحث اذا موجود ولا لا
[1,2,3,4,5,6].includes(2);	// true
[1,2,3,4,5,6].includes(20);	// false

// length =>  length مع for لو عايز اجيب الاسم كلها يبقي اعمل 
for (var i = 0; i < friends.length; i++) {
	console.log(friends[i]);
}

// بس انا عرض في المتصفح  forنفس المثلا مع ال 
// html
<div class="container my-5">
	<div id="myRow" class="row">
		// jsالكود اللي كان هنا بيكتب في ال
	</div>
</div>

// js
var Box = '';
for (var i = 0; i < friends.length; i++) {
	Box += `<div class="col-md-4">	
				<div class="items text-center">
					<h1>${friends[i]}</h1>
				</div>
			</div>`;
}
document.getElementById('myRow').innerHTML = Box;

// ---------------------
// Array جوه object مثلا تاني ان اعمل 
var user = [
	{ name: "Ahmed", age: 25, Gender: "Male" },
	{ name: "mai", age: 24, Gender: "feMale" },
	{ name: "abdo", age: 23, Gender: "Male" },
	{ name: "Fatma", age: 20, Gender: "feMale" },
]
console.log(user[0]);	// {name:"Ahmed", age: 25, Gender: "Male",} هيطبع كده 
console.log(user[1].age);	// 24 هيطبع كده 

user.push({ name: "huda", age: 40, Gender: "feMale" })	// Array جوه object انا كده بضاف 

for (var i = 0; i < user.length; i++) {
	console.log(user[i]);
}
// {name:"Ahmed", age: 25, Gender: "Male"},	// هيطبع 
// {name:"mai", age: 24, Gender: "feMale"},
// {name:"abdo", age: 23, Gender: "Male"},
// {name:"Fatma", age: 20, Gender: "feMale"},
// {name:"huda", age: 40, Gender: "feMale"},

// طيب لو عايز اطبع الاسم فقط
for (var i = 0; i < user.length; i++) {
	console.log(user[i].name);
}
// Fatma // هيطبع كده 
// Mohamed
// Ahmed
// hazem
// aya
// hpipa
// huda

//===============================================================================================================
//LocalStorage -> 	// Local Storage ثم Application ثم اضغط f12 و بضغط Data ده علشان اخزن في  

//						"Key" , "Value"		// string بيخد قامتين ودول من نوع localStorageال
localStorage.setItem("userName", "Fatma")	// Local Storageده بيخزن جوه ال setItem


// ---------
let ay7ga = localStorage.getItem("userName")	//localStorage ده بيجيب المتخزن من getItem


console.log(ay7ga)	//Fatma 	هيظهر

// ----------------------------------
//JSON.stringify()	// Array of object  ده يعني JSON و string ل JSON ده بيحول من
products=[];
localStorage.setItem("userName", JSON.stringify(products))	//  string ل array ده بيحول من JSON.stringify()
// string بيخد ع هئيه localStorage علشان ال string ل JSON ده بيحول من
// string ع هيئه productsال Array ال localStorageهيظهر ليا في ال


//JSON.parse()	// Array of object يعني JSON و JSON ل string ده بيحول من
let ay7ga = JSON.parse(localStorage.getItem("userName"))	//array ل string ده بيحول من

// ------------------------------------
localStorage.removeItem('userName')	//localStorageده بيمسح عنصر واحد من ال
localStorage.clear()	//localStorageده بيمسح كل اللي في ال

//=============================================================================================================== 
// Validation
// Regx --> Regular expression => Validation => inputده يعني التحقق في ال 
// https://regex101.com/ اسم Regular expressionفي موقع ل تجربه ال
// Validationل ال test ده بيعمل test اسمها method في 
// [] العلامه ده يعني ده او ده 
// \s 	//اسموال s ده بيعمل اسبيس	=> / /
// \S 	// كبتل S ده ممنوع من الاسبيس حرف 
// \d 	// اسموال d ده يدخل الارقام 
// \D 	// كبتل D ده ممنوع من الارقام 
// \w 	//   ده يدخل ارقام او حروف او اندراسكول		=> /[0-9a-zA-Z_] /
// ? 	// ده يعني ممكن الحاجه تيجي او لا
// ^M 	// M انا كده بقول ابداء برقم او حرف مثلا 
// {8}$	// انا كده بقول اخرك 8 ارقام فقط 

// test()
// false او true بيرجع اذا كان boolean وده test() اسمها masod في 

//
/dv/	//  fatmadv جنب بعض مثلا dv انا كده بقول لازم تكتب كلمه يكون فيها 
/[dr]/	// r او d انا كده بقول لازم تكتب كلمه يكون فيها حرف 
/[a-z]/	// اسموال z لحد a انا كده بقول داخل من حرف ال 
/[A-Z]/		//  كبتل z لحد a انا كده بقول داخل من حرف ال
/[3a-z]/	//  اسموال او رقم 3z لحد a انا كده بقول داخل من حرف ال
/[a-z_]/	//  _ اسموال او z لحد a انا كده بقول داخل من حرف ال
/[0-9]/	// انا كده بقول من رقم 0 لحد فوق 
/[a-zA-Z0-9_-~!@#$%^&* ]{3,9}$/	//ميقلش عن 3 واخر 9	 _-~!@#$%^&* اسموال او كبتل او ارقام او مسافه او z لحد a انا كده بقول داخل من  
/[a-z][A-Z][0-9]/	// انا كده بقول ابتداء بحرف اسموال وحرف كبتل ورقم 

/[a-z]{ 5,} /		// انا كده بقول داخل 5 حروف لحد فوق
/[a-z]{ 5, 8 } /	// انا كده بقول داخل 5 حروف لحد رقم 8
/^[a-zA - Z0 - 9@]{ 3, 9 } $ /	//ميقلش عن 3حروف وميذدش عن 9 حروف 
/^[a-zA-Z0-9@]{3,}$/	//ميقلش عن 3حروف ويكتب بم فوق 
/^[A-Z][a-z]{3,8}$/	//انا كده ابتداء بحرف كبتل وبعد كده اسموال ويقلش عن 3 حروف وميذدش عن 8

/[]/ // ده بيتعمل حرف حرف 
/()/ // ده بيتعمل كلمه كلمه 

/web(design | development) /		// development او design الاول وبعد كده بدخل web دخل كلمه userالعلامه ده بتستخدم في الكلمه وده | يعني بقول دخل ده او ده و انا كده بقول ل ال (|)
/web2?(design|development)/	// انا كده بقول ممكن رقم 2 ده تيجي او متجيش 
/web\s?(design|development)/	// \s? كده العميل داخل اسبيس او لا 
/(web)?\s?(design|development)/	// او لا web او يدخل كلمه \s? كده العميل داخل اسبيس او لا 

// داخل تليفون 0101551224 او 012 او 015 او 011 userانا كده بقول ل ال 
/^ 01[0125][0 - 9]{ 8, 8 } $ /	// العلامه ده ^ كده بقول لازم يبداء ب 010 او 011 او 012 او 015 وعلامه ال$ كده اخرك 8 ارقام 

/^(002)?01[0125][0-9]{8}$/	//داخلت 01145696009 او 02201145696009 userانا كده بقول ل ال 

/^ (\+2 | 002)?01[0125][0 - 9]{ 8 } $ /	//+201145696009 داخلت 01145696009 او 02201145696009 او userانا كده بقول ل ال 

// -----------------------
// اللي يستخدم الموقع يكون من سن 10 ل 79 userانا عايز ال
/^[1-7][0-9]$/	//بعمل كالاتي 1 في اول كوس و0في تاني كوس يبقي 10وال79 ال7في اول كوس وال9 في تاني كوس يبقي 79

// طيب لو عايز من 10لحد 80 اعمل كالاتي
/^ ([1 - 7][0 - 9] | 80)$ /	//بعمل كالاتي 1 في اول كوس و0في تاني كوس يبقي 10وال79 ال7في اول كوس وال9 في تاني كوس يبقي 79 و لو داخل ال80هيقبل 

// ------------------------
/^[a-zA-Z]+$/									-- > name
/^\w +@[a - zA - Z_]+?\.[a - zA - Z]{ 2, 3 } $ / --> email
/^ (\+2 | 002)?01[0125][0 - 9]{ 8 } $ / --> phone-- > +20101234567 0220102234558 010232345667
/^ ([2 - 9][0 - 9] | 100)$ / --> age
/^ (?=.* [A - Za - z])(?=.*\d)[A - Za - z\d]{ 10,} $ / --> password
/^ (?=.* [A - Za - z])(?=.*\d)[A - Za - z\d]{ 10,} $ / --> password
/^ (https: \/\/)?(www\.)?[a-zA-Z0-9_\.]{1,}\.[a-zA-Z]{3}$/	-- > url-- > https://regex101.com	 regex101.com

// -------------------------------
// ب العربي و الانجليزي Validation بعمل 
let regex = /^([\u0621-\u064A]|[a-z]|[A-Z])/	// انا كده بقول اكتب حروف عربي او انجليزي كبتل او اسمول 
//====================================================================================================
//jsوال htmlما بين ال class ده بيتعمل مع
productNameInput.classList.add("is-invalid");//htmlفي صفحه ال classده بيضافه في ال add
productNameInput.classList.remove("is-valid");// htmlفي صفحه ال classده بشيل ال remove
userNameAlert.classList.replace("is-valid", "test");// test ويحط is-valid بيشيل jsال classبيبدل مع ال htmlمن ال classبيجيب ال classده بيعمل تبدل ل ال replace
userNameAlert.classList.toggle("is-valid"); // موجود بيشال لو مش موجود بيحط بيعكس classده لو ال

// navbarمثل عن ال 
// html
<button class="hide" id ="opens">open</button>
<button id ="closes">close</button>
<div class="sider">
	<P>Home1</P>
	<P>Home2</P>
	<P>Home3</P>
	<P>Home4</P>
	<P>Home5</P>
</div>

// css
.sider{
	width: 120px;
	height: 100vh;
	backgroundColor:#00f;
	color:#fff;
}
#closes{
	position: absolute;
	left: 125px;
}
.hide{
	display:none;
}
// js
let opens = document.getElementById('opens');
let closes = document.getElementById('closes');
let sider = document.getElementById('sider');

closes.addEventListener("click", function () {
	sider.classList.add('hide');
	this.classList.add('hide');		// closes.classList.add('hide');	// thisاو ال closeاعمل ال 
	opens.classList.remove('hide');
})

opens.addEventListener("click", function () {
	this.classList.add('hide');		// opens.classList.add('hide');	// thisاو ال closeاعمل ال 
	closes.classList.remove('hide');
	sider.classList.remove('hide');
})


	// getAttribute	ده بتجيب 
	// setAttribute ده بضاف 
	< img id = "imgDemo" class="" src"imges/toe.png" alt = "" >
		<h1 id="demo">web</h1>

{/* // htmlلو عايز اغير في ال  */ }
{/* // setAttribute لو عايز اغير في الصوره بغير ب  */ }
var myImg = document.getElementById("imgDemo");
document.addEventListener("click", function () {
	myImg.setAttribute("class", "rounded-circle w-100");
	myImg.setAttribute("src", "images/three.png");
})

// getAttribute ده بيمسك العنصر 
document.addEventListener("click", function () {
	var x = eventInfo.target.getAttribute("src");	// src انا كده مسكت العنصر بتاع 
	console.log(x)
}

{/* // cssلو عايز اغير في ال / */ }
<h1 id="demo">web</h1>

var h1s = document.getElementById("demo");
h1s.addEventListener("click", function () {
	h1s.style.backgroundColor = "red";	// red backgroundColor اعمل demo انا كده بقول لم اضغط ع
	h1s.style.marginTop = "10px";	// 10px marginTop اعمل demo انا كده بقول لم اضغط ع 
})

	// مثل لتحويل العمله 
	< input type = "number" placeholder = "USD" id = "dollar" >
		<input type="number" placeholder="EGP" id="pound">

			let dollar = document.getElementById('dollar');
			let pound = document.getElementById('pound');

			dollar.addEventListener("keyup" , function(){
				pound.value = dollar.value * 18;
})

			pound.addEventListener("keyup" , function(){
				dollar.value = pound.value / 18;
})
{/* //========================================================================================================================================== */}
{/* //Dom	-> action و event و element عباره عن ثلاث حاجات 
// Object ل htmlيروح المتصفح يحول كود ال  htmlمش بتعرف تتعمل مع كود ال jsال
//element =>	1-> امسك العنصر	==> DOM ب ال elementامسك ال
//event =>		2-> ده كده لم ادوس 
//action =>		3-> actionاطلع خصائص معاينه ده يبقي ال	//d-flexاحول ل lightBoxContainerانا هدخل علي ا */}

{/* // jsب ال html امسك كود ال jsمع ال htmlطريقه ازي اربط ال */}
var elements = document.getElementById("demo");	// HTMLمن ال idده بيجيب ال
var elements = document.getElementsByClassName("test");//Array و بيشبها HTMLمن ال Class ده بيجيب اكتر من
var elements = document.getElementsByTagName("h2");//Array و بيشبها HTMLمن ال  span , h1 , div ده بيجيب اي تاج زي
var elements = document.getElementsByName("gender");//Array و بيشبها HTMLمن ال input اللي بيبقي في Nameمن ال item اللي اسم Attributeانا بقول هات ال

var elements = document.querySelectorAll(".services");
var elements = document.querySelectorAll(".services span");//Array و بيشبها HTMLمن ال servicesاسم Classاللي جوه ال spanده لو عايز اجيب عنصر جوه عنصر انا كده بقول هات ال
var elements = document.querySelectorAll(".services .min");//Array و بيشبها HTMLمن ال servicesاسم Classاللي جوه ال spanده لو عايز اجيب عنصر جوه عنصر انا كده بقول هات ال

var elements = document.querySelector(".services span");//فقط span هيبجيب اول servicesجوه ال spanده بيجيب اول عنصر فقط لو في كذه

{/* Array ده يحول  Array.from اسمها masod هي Arrayل Arrayملحوظه ممكن احول اي حاجه من اللي تشبها ال  */}
{/* ------------------------- */}
//event =>		2-> ده كده لم ادوس
// elementعلي ال event طريقه ازي اعمل

{/* // mous */}
myH1.addEventListener("click" , function(){}	//ده لم اضغط مره واحده ده ب الماوس
myH1.addEventListener("dbclick" , wek)//ده لم اضغط مرتين ب الماوس
myH1.addEventListener("mouseenter" , wek)//ده كل م ادخل علي العنصر يشتغل
myH1.addEventListener("mouseleave" , wek)//ده لم بيقي علي العنصر واتحرك بيعد عن العنصر بيشتغل
myH1.addEventListener("mousemove" , wek)//ده طول م انت بتتخرك جوه العنصر بيشتغل
myH1.addEventListener("mouseover" , wek)	//ده بيشتغل لم بدخل علي العنصر ب الماوس
myH1.addEventListener("mouseout" , wek)	//ده بيشتغل لم بخرج من علي العنصر  ب الماوس

{/* contextmenu		ده بيشتغل بكليك اليمين  */}
myH1.addEventListener("contextmenu" , wek)	// ده بيشتغل لم بضغط كليك يمين ب الماوس 
myH1.oncontextmenu = function () {}	// ده بيشتغل لم بضغط كليك يمين ب الماوس 

{/* // keyperd	// Keycode.info او موقع console بجيب اكود الكيبورد من ال */}
var inputs = document.getElementsByTagName("demo");

/* inputده بستخدم في ال  */
inputs.addEventListener("keydown" , function(){})		//بيطبع inputده طول م انا شغل ب الكيبورد جوه ال
inputs.addEventListener("keyup" , function(){})		//مش بيطبع غير لم اشيل ايدي واكتر حاجه بستخدمها inputده لو كتب جوه
inputs.addEventListener("keypress" , function(){})		// Alt و Shift و Ctrl مش بيطبع غير لم اشيل ايدي ومش بيشتغل مع inputده لو كتب جوه

/* inputده بستخدم في ال  */
inputs.addEventListener("focus" , wek)//بيشتعل inputلم بقف علي ال	//inputده مش بيشتغل غير في ال
inputs.addEventListener("blur" , wek)//ده كده بيشتغل inputواشيل ايدي من inputولم باجي اضغط علي ال	//inputده مش بيشتغل غير في ال


{/* // change او onchange ممكن يكون  */}
inputs.addEventListener("onchange" , wek) // file بتاع type اللي inputده بستخدم فقط في ال 


window.addEventListener("scroll" , function()		// scroll لم بعمل windowده بيشتغل مع ال
window.addEventListener("resize" , function() 	// ده بيشتغل لم الموقع بيصغر او بيكيبر 
window.addEventListener("ready" , function() 	// كلها اتحملت ولا لسه document ده بيتاكد ان 
document.addEventListener("click" , function()		// function اعمل الخصائص اللي جوه ال documentده انا كده بقول لم اضغط ع ايحاجه في ال

//--------------------
{/* onload */} {/* ده يعني لم الموقع يحمل  اعمل الخصائص ده */}
window.addEventListener("load" , function()	{}
window.onload("load" , function()	{}

{/* مثل */}
let inp = document.getElementById('inp');
window.onload = function () {
	inp.focus();
}
//--------------------

// input
{/* // focusمن ال input انا بغير شكل ال */}
let inp = document.getElementById('inp');
inp.addEventListener("focus" , function(){
	inp.style.border = '2px solid #f00';
})

// --------------
{/* // keyperd و mous امثلا عن  */}
{/* في حته تاني coll ده من غير اسم مش هعرف اعمها function  */}
var myH1 = document.getElementById("demo");
myH1.addEventListener("click" , function(){		//function()اعمل خصائص ال myH1 علي ال clickانا كده بقول لم اضغط ب
	window.alert("Hello");		// Hello اعمل click انا كده بقول لم 
})

// --------------
{/* في اي مكان coll ب اسم اقدر اعملها function ده  */}
{/* // في حته تانيه يبقي اعمل ده coll تاني او بعمل functionده في حاله لو استخدم ال wek() اللي اسمها function و اكول  demo اللي اسم idلو عايز اضغط ع ال  */}
var myH1 = document.getElementById("demo");
function wek() {
	window.alert("Hello");		//Hello اعمل click انا كده بقول لم 
})
myH1.addEventListener("click" , wek)	// wek اللي اسمها functionكول ال myH1 انا كده بقول لم اضغط ع ال 

// --------------
{/* // parameter واعمل wek اللي اسمها function و اكول demo اللي اسم idلو عايز اضغط ع ال  */}
var myH1 = document.getElementById("demo");
myH1.addEventListener("click" , function(){
	wek('Fatma');	//وبعمل كول هنا 
})
function wek(userName) {
	window.alert("Hello" + userName);
}

//--------------------
{/* //منهم يعملها الخصائص element و عايز لم اضغط ع اي element لو عندي كذه  */}
var h1s = document.getElementsByTagName("h1");
for (var i=0 ; i < h1s.length ; i++) {	//يعمل الخصائص ده h1 اللي هو ال element ده علشان لم اضغط علي اي 
	h1s[i].addEventListener("click", wek)	//addEventListenerكل و هاخد ال elementده كده انا مسكت ال h1s[i]
}

function wek(){
	window.alert("Hello");		// h1 ده هيظهر لم اضغط علي عناصر الalertكده ال
}


// --------------------------------------
// scrollمثل عن ال 
<button id="btn">^</button>

#btn{
width:20px;
height:20px;
background: #fa0;
cursor:pointer;
position:fixed;
bottom:10px;
right:10px;
display:none;
}

var btn = document.getElementById("btn");
window.onscroll=function(){
	if(scrollY >=400){
		btn.style.display= 'block';
	}
	else{
		btn.style.display= 'none';
	}
}

btn.onclick =function(){
	scroll({
		left:0,
		top:0,
		behavior:"smooth",	// بنوعومه scrollده بيحرك ال 
	})
}

//--------------------
//url Location href
https://www.youtube.com/mohamed/
https: ==> protocol
www.youtube.com ==> host name
/mohamed/ ==> path name 
// object Locationيبقي اتعامل مع ال urlلم اتعمل مع ال 
// جوه حاجات مثل locationيمجرد ان افتح ال 
console.log(location.href)
location.protocol
location.hostname
location.pathname
location.reload()	// اتوماتك reload ده بيعمل 
location.assign('https://www.youtube.com/mohamed/')	// هيرجع للصفحه اللي كنت فيها back ده لو عملت assign
location.replace('https://www.youtube.com/mohamed/')	// مش هيرجع ع حاجه back ده لو عملت replace

location.href	= 'https://www.fb.com/'	// كده انا بقول افتح لينك الفيس بوك 
//--------------------

//-------------------------------------------------------
// css انا بغير هنا في خصائص ال 
// background-Colorيغير ال h1 انا كده لم اجي اضغط علي ال
var h1s = document.getElementById("demo");
h1s.addEventListener("click" , function(){
	h1s.style.backgroundColor = "red";	// ب الكمل كيس styleانا بكتب ال 
})
// بطريقه تانيه 
var h1s = document.getElementById("demo");
function wek() {
	h1s.style.backgroundColor = "red";
	h1s.style.marginTop = "10px";
});
h1s.addEventListener("click" , wek);

//----------------
// مثلا تاني ان كل م اتحرك ب الماوس الصوره تتحرك معايا
var myImg = document.getElementById("imgDemo");
document.addEventListener("mousemove" , function(eventInfo){	//mousemoveده شايل الeventInfo
	console.log(eventInfo);
	myImg.style.left = eventInfo.clientX + "px";	// انا كده بقول اول م اتحرك ب الماوس حرك معايا صوره بعرض
	myImg.style.top = eventInfo.clientY + "px";	// انا كده بقول اول م اتحرك ب الماوس حرك معايا صوره بطول
})

// css اشيل شكل الماوس في cssو اروح ل ال 
*{
	cursor: none;
}
#myImg{
	position:absolute;
	left:10px;
	// top:10px;
}

// html 
<img id="myImg" src="./imges/toe.png" alt="img">

//-----------------------------------------------------------
// html مثلا تاني ان اول م اضغط علي صوره يظهر صوره تانيه بغير كود 
var myImg = document.getElementById("imgDemo");
img.addEventListener("click" , function(){
// افضل  setAttribute
	myImg.setAttribute("src", "images/team-1.jpg");	// غير الصوره click لم اضغط
	myImg.setAttribute("class", "w-100 text-info");	// class بشتغل ع 
	// myImg.src = src="images/team-1.jpg";	// ده طريقه تانيه بس مش بشتغل بيها ده للمعرفه 
	// getAttribute	// ده بيجيب العنصر 
})

// -----------------------
// event انا كده بستحدم كذه 
var events = [ "click" , "mouseenter" , "mousemove"]; 

for (var i=0 ; i < events.length ; i++) {
	nextBtn.addEventListener(events[i], nextSlide);
}

function nextSlide() {
	console.log("hi")
});
// -----------------------

// Keycode.info او موقع console بجيب اكود الكيبورد من ال
document.addEventListener("keydown" , function(eventInfo){
console.log(eventInfo);
//الكيبوردcode واخد منها code افتحها و الاقي كلمه KeyboardEvent واضغط علي اي زرار في الكيبورد ف هيظهر consoleوهيفتح ال f12 ده علشان يبان معايا كود الكيبورد بضغط علي 
}


//===================================================================================================================================================
// ES6

array -> Array.from	// Array ده علشان احول اي حاجه انا عايزه ل

let imgs = document.querySelectorAll(".item img");

// من اللي راجع من هنا Array انا كده بقول اعمل 
let imgs = Array.from(document.querySelectorAll(".item img"));
// Arrayعلشان استخدم عناصر ال 

//--------------------------
// array -> new set
let oldFriends = ["Ahmed" , "Fatma" , "Mohamed" , "Ahmed" , "Fatma"];

let friends = new set(oldFriends); // new set() غير مع hasوال addهيطبع كل الاسم ماعد الاسم المكراره ومش بعرف استخدم ال new set()
console.log(friends);	// {"Ahmed", "Fatma", "Mohamed"} ده هيطبع فقط

friends.add("Adam");	// pushده يعني اضافه زي ال add
console.log(friends);	// {"Adam", "Ahmed", "Fatma", "Mohamed"} ده هيطبع فقط

friends.has("Fatma");	// false لو مش موجوده true لو موجوده Fatma search ده بيعمل
console.log(friends.has("Fatma"));		// search ده بيعمل

friends.delete("Fatma");// Fatma ده كده بيمسح delete ده بيعمل
friends.clear();		// ده بيسمح كل clear

for (let x of friends) { // array ع for لو عايز اعمل // friends لو عايز اطبع 
	console.log(x);
}



// ---------------------
// map -> object	// length وكمان اقدر اعمل for loop اقدر اعمل 
let user = new Map(); // الجديده objectطريقه كتبت ال

user.set('name' , 'Ahmed');
user.set('age' , 25);
user.set('salary' , 9000);
user.set('gender' , 'male');
user.set(['userName' , 'userName2'] , ['Fatma' , 'Mohamed']);	// object جوه Array واعمل

// objectاللي جوه ال methodده ال
user.has('name');		// name ع search ده بيعمل
user.clear();			// ده بتمسحها كلها
user.delete('age');	// 25
user.get('gender');	// male

console.log(user);	//{"name" => "Ahmed" ,"age" => 25, salary =>9000 , "gender" => "male"}  هيطبع كالاتي
user.size	// objectبتاع ال length ده بيجيب 
console.log(user.size);	// عدد العناصر 4

for (let p of user) {
console.log(p);	// valueوال keyده هيطبع ال
// console.log(p[0]);	// gender و age و nameفقط اللي هو ال keyهيطبع معابا ال 
}

// mapبحولها ل object جاي ع Api لو ال 
let person1 = {
	name: 'ahmed',
	age: 25,
	salary: 9000,
	gender: 'male'
}
let person = new Map(Object.entries(person1));	// mapل objectانا كده بحول ال
console.log(person);

//===================================================================================================================================================
// Ajax	-> JSON -> backendاللي جاي من ال dataده علشان اعرف اتعمل مع ال JSONال 
// test بعمل  https://jsonplaceholder.typicode.com/ ده موقع 
// JSON.parse	// JSONوده بيحول ل String اللي بتيجي بتجي dataعلشان ال JSON ده بيرجع 

200 // جاي مظبوط  response كده ال
404 // url كده الصفحه مش موجوده كده مفيش 
403 // من دوله تانيibممنوع من دوله معاينه وال urlكده انا ممنوع من الدخول  مثلا لو في تسجيل دخول لازم اسجل او ممكن يكون ال 
500 // ده كده في مشكله مع السيرفر

// html
<div class="container">
	<div class="row" id="myRow">

	</div>
</div>

// json ل string فلازم احول من string اللي جاي بتيجي dataال
var posts = []; // Array علشان هو جاي ع هيئه dataعلشان استلام ال Arrayال

var myRequest = new XMLHttpRequest();

myRequest.open("GET", "https://jsonplaceholder.typicode.com/posts");// ده اللي بتفتح م بين الباك والفرونت open

myRequest.send();//url من ال dataانا كده بقول هات ال

myRequest.addEventListener("readystatechange" , function(){
	if(myRequest.readyState == 4 && myRequest.status == 200) {
		// posts = JSON.parse(myRequest.response).results
		posts = JSON.parse(myRequest.response)
		// posts بستلم الداتا في 
		// JSON.parse بطريقه json ل string ف بحولها من ال for مش هعرف اعمل string ده بيجي ع هيئه response
		console.log(posts);
		displayPosts();	//  هنا علشان بعض م اجيب الداتا يعرضها coll لازم اعمل 
	}
})

function displayPosts() {
var cartoona =``;

for (var i=0; i<posts.length; i++)
	{
	cartoona += ` <div class="col-md-3">
			<div class="post">
				<h4>${posts[i].title}</h4>
				<p>${posts[i].body}</p>
				<img src="${posts[i].imgUrl}">
			</div>
		</div> `
	}
	document.getElementById("myRow").innerHTML = cartoona;
}

//////////////////////////////////////////////
// Async	// جاين مع بعض ده بيعرض اللي بيخلص الاول ع طول Api لم يضغط ع عنصر معاين ومثل لو في اتنين event اللي جاي من بره مثل Api ده الحاجات اللي بتشغل ب حاجات تاني مثل 
// Sync		// ده الحاجات اللي بتشغل ع طول من غير حاجه  

// callback ال then و بديل then بديل async await
// Sync و Async في نوعين 

//-----------------
// callback
// من 1995 لحد 2015 
async function Pizza(callback) {
	if(myRequest.readyState == 4 && myRequest.status == 200) {
		callback();
	}
};

async function pasta(callback) {
	cif(myRequest.readyState == 4 && myRequest.status == 200) {
		callback();
	}
};

async function Beef(callback) {
	if(myRequest.readyState == 4 && myRequest.status == 200) {
		callback();
	}
};

function finish(){
	console.log("finish")
}

// Async انا كده خلتها تشتغل بطريقه ال 
// finish ثم Pizza ثم Beef ثم pasta بترتيب coll انا كده بعمل 
pasta(function(){
	Beef(function(){
		Pizza(function(){
			finish();
		})
	})
}) 

//--------------------
// then - Promise // الاول callbackاحسن من ال callback علشان اقدر اعمل Async انا بستخدم في 
// then اقدر اعمل  Promise ل return اللي بتعمل function وال 
// ES6

async function Pizza() {
	return new Promise(function(callback){
		if(myRequest.readyState == 4 && myRequest.status == 200) {
			callback();
		}
	})
};

async function pasta() {
	return new Promise(function(callback){
		if(myRequest.readyState == 4 && myRequest.status == 200) {
			callback();
		}
	})
};

async function Beef() {
	return new Promise(function(callback){
		if(myRequest.readyState == 4 && myRequest.status == 200) {
			callback();
		}
	})
};

function finish(){
	console.log("finish")
}

// Async انا كده خلتها تشتغل بطريقه ال 
// finish ثم Pizza ثم Beef ثم pasta بترتيب coll انا كده بعمل 
pasta()	// Promise ده مش بيشتغل غير مع thenال
.then(function(){return Beef();})
.then(function(){return Pizza();})
.then(function(){finish();})

// ------------------
// ES6 	->	fetch
// async & await في طريقه افضل و هشتغل بيها ع طول طريقه ال 
// await	-> ده يعني استنا لم تيجي الداتا واشتغل 
// async ومعها ال awaitلازم اشتغل ب ال 
// fetch // تحت coll ل then علشان اقدر اعمل Promise ل return ده بيعمل fetch
// بترتيب اللي انا عايز واتحكم مين اللي يجي في الاول وفي الاخر ومين يجي في التاني Async اللي جاي ب ال Apiو ارتب ال 

async function Pizza() {
	let apiResponse =  await fetch(`https://forkify-api.herokuapp.com/api/search?&q=Pizza`);	// let apiResponse =  await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef" , {method:"GET"})	// {method:"POST"} اعمل POST اتوماتك لو الباك قالي GET ده fetch
	let allRecipes = await apiResponse.json();
	allRecipes = allRecipes.recipes;	// .recipes فلازم اعمل Array هو اللي recipesوال object ده علشان بيجي
	// console.log(allRecipes);
};

async function pasta() {
	let apiResponse =  await fetch(`https://forkify-api.herokuapp.com/api/search?&q=pasta`);
	let allRecipes = await apiResponse.json();
	allRecipes = allRecipes.recipes;
};

async function Beef() {
	let apiResponse =  await fetch(`https://forkify-api.herokuapp.com/api/search?&q=Beef`);
	let allRecipes = await apiResponse.json();
	allRecipes = allRecipes.recipes;
};

function finish(){
	console.log("finish")
}

// Async انا كده خلتها تشتغل بطريقه ال 
// finish ثم Pizza ثم Beef ثم pasta بترتيب coll انا كده بعمل 
async function getData() {
	await pasta();
	await Beef();
	await Pizza();
	await finish();
};
getData();

// (async function() {	// اتوماتك coll بيعمل self invoked و ممكن اعمل 
	// await Pizza();	
	// await pasta();
	// await Beef();
// })();

// ==================================================================================================================================================
// OOP	=> Simulate Reality	يعني بحكي الواقع 
// يعني مثلا لو عندي مستشفي ده واقع عايز احولها ل سوفت وير 
 
// prototypedو بتشتغل ب ال jsوال OOP فيها  jsال
 // يعني طريقه كتابه حلوه sugar syntax عباره عن Class وال 
// prototyped Based	{}=>{}

let user = function(name , gender , age , salary , title) {
	this.pName = name;	//userال objectده بتعود ع ال thisال
	this.pGender = gender;
	this.pAge = age;
	this.pSalary = salary;
	this.pTitle = title;
}

// user ال object من object انا كده بعمل 
let u1 = new user('Ahmed' , 'male' , '36' ,'899' , 'engineer' ); // userال objectانا كده بعمل نسخه جديده من ال new
let u2 = new user('Fatma' , 'Female' , '5' ,'8119' , 'doctor' );

console.log(u1,u2);
// user {name : "Ahmed", Gender : "male", Age : 36, Salary : 899, Title = "engineer"}	//هيطبع كالاتي
// user {name : "Fatma", Gender : "Female", Age : 5, Salary : 8119, Title = "doctor"}	//هيطبع كالاتي

console.log(u1.pName);	// Ahmed هيطبع كالاتي

// user من ال u1 و u2 علشان هو شايف prototype اعملها ب function لو عايز اعمل 
user.prototype.welc = function() {	// function لو عايز اعمل 
	console.log("hello from");	// hello from هطبع
}
u1.welc();	// coll انا ب

user.prototype.friend = ["sara", "nada"];	// Array انا كده ضافت Array لو عايز اعمل
console.log("u1.friend");	// ["sara", "nada"] هطبع

u2.friend.push('rqau');	// ["sara", "nada" , "rqau" ] u2 و u1 هيظهر في rqau
console.log("u1.friend");	// ["sara", "nada" , "rqau" ]
// مع نفس Array هيبقي كل thisفي ال Arrayده كده يظهر في الكل اما لو عمل ال 

// ----------------------
// class Based 	
// اللي تحت test() زي ال method لو عايز اكتب اي حاجه لازم تكون داخل let x = vip او for او if او function مينفعش اعمل هنا 
// prototyped شغل ب class
// prototypedو بتشتغل ب ال jsوال OOP فيها  jsال
 // يعني طريقه كتابه حلوه sugar syntax عباره عن Class وال 

// html
<div id="demo"></div>


class User{
	constructor(name, gender, age, salary, title)	// coll ده بتشتغل اتوماتك من غير م اعمل constructor
	{
		this.pName = name;
		this.pGender = gender;
		this.pAge = age;
		this.pSalary = salary;
		this.pTitle = title;
	}
	
	walk() {
		console.log("Hello")
	}
	
	walk(lName) {	// prmter  وكمان اعمل function لو عايز اعمل 
		console.log(`Hello ${this.pName} ya ${lName}`)	//Hello Fatma ya Mohamed
	}

	walk2() {
		console.log(`Hello ${this.pName}`)	//Hello rqau
	}

	test() {
		let x = 'vip';	// مهم
		console.log(x);

		if(){

		}
	}
	state(){
		let log = 'route';
		return log;
	}
	render(s){
		return `<h1>${s}</h1>`
	}
}

let u1 = new User("Fatma" , 'feMale' , 25 , 5000 , 'doctor' );	// user ال class من object انا كده بعمل
let u2 = new User("rqau" , 'feMale' , 28 , 5000 , 'doctor' );	// user ال class من object انا كده بعمل

console.log(u1);	//User {name : "Fatma", Gender : "Female", Age : 25, Salary : 5000, Title = "doctor"}
console.log(u1.pName);	// Fatma
u1.walk();	// Hello Fatma
u1.walk("Mohamed");	// Hello Fatma ya Mohamed
u2.walk2();	// hello rqau
ul.test()	// vip


let nam = ul.state();	// route ده في nam
console.log(nam);	// route
ul.render(nam);	// route h1 هيطبع جوه ال

document.getElementById("demo").innerHTML = ul.render(nam);	// route h1 هيطبع divهيطبع جوه ال

// --------------
// extends ->  class ده علشان اورث من ال 

class person {
	constructor(name, gender, age, salary, title)
	{
		this.pName = name;
		this.pGender = gender;
		this.pAge = age;
		this.pSalary = salary;
		this.pTitle = title;
	}
	walk() {
		console.log("Hello")
	}
	
}

class Employee extends person {		// person ال class انا كده بورث من extends
	constructor(name, gender, age, salary, title, id, uni)
	{
		super(name, gender, age, salary, title); // uniو ال idما عده ال person بتاع ال constructorده بيخد الحاجات بتاعت ال superال

		this.id = id;	// uniو ال idال caret انا كده ب
		this.uni = uni;
	}
}

let e1 = new Employee("Ahmed", 'Male', 23, 5000, 'doctor' , 'civil', 'cairo');
console.log(e1)	// Employee {name : "Ahmed", Gender : "Male", Age : 23, Salary : 5000, Title = "doctor", id ="civil" , uni="cairo"}

let ps1 = new person("Fatma", 'feMale' , 25, 5000, 'doctor' )
console.log(ps1)	//person {name : "Fatma", Gender : "Female", Age : 25, Salary : 5000, Title = "doctor"}

//---------------------------------------
// Module لو عايز اعمل الاكود ده 
// Live Server فيها ميزه كويسه ان ممكن اشغل ع سيرفر Visual Studio Code ده لو شغلت ع المتصفح مش هيشتغل غير لازم ارفع ع سيرفر في Module ال 
// user.js هعمل ملف اسم 
export default class User{
	test() {
		let x = 'vip';	// مهم
		console.log(x);
	}
	state(){
		let log = 'route';
		return log;
	}
	render(s){
		return `<h1>${s}</h1>`
	}
}

let worh = 8;
export function calc(hour){
	return (worh * 30 * 54 -55)
}

// script.js 
import User, {calc} from './user.js';	
// export default كلمه user.js كده من غير الكوسين علشان عمل في صفحه User عملت ال 
// فقط export كلمه user.js ب كوسين علشان في صفحه  الcalc عملت ال 

let u1 = new User();
let nam = ul.state();
ul.render(nam);
console.log(calc(100));
document.getElementById("demo").innerHTML = ul.render(nam);	// route h1 هيطبع divهيطبع جوه ال


// imdex.html واروح ل ملف ال 
<script type="module" src="script.js"></script>


// ================================================================================================================================
//  setInterval & clearInterval
//  setTimeOut & clearTimeout
// jsموجوده في ال masod  دول 

// setInterval( , ) // ده بتشغل العنصر كل ثانيه setInterval
setInterval(function(){ console.log('hello') } , 2000); // كل 2 ثانيه function انا كده بقول شغل ال 


// clearInterval()  // ده بيعمل ايقاف للعنصر 
let x = setInterval(function(){ console.log('hello') } , 1000); // كل 1 ثانيه function انا كده بقول شغل ال 

$(document).click(function (){
    clearInterval(x);   // functionانا كده بقول لم اضغط ع اي حطه في الصفحه اعمل ايقاف ل 
})

// ------------------------------------------------------------------
// setTimeOut   // ده بيشغل مره واحده بعد ثانيه setTimeOut
setTimeout(function(){ console.log('hello') } , 5000);  // مره واحده functionانا كده بقول بعد 5 ثواني شغل ال 
// مره واحده animation اعلان مره واحده او اعمل userده مثل بستدم في ايه ان اظهر لل


// clearTimeout      // ده بيعمل ايقاف للعنصر قبل تنفذها 
let x = setTimeout(function(){ console.log('hello') } , 5000);  // مره واحده functionانا كده بقول بعد 5 ثواني شغل ال 

$(document).click(function (){
    clearTimeout(x);   // functionانا كده بقول لم اضغط ع اي حطه في الصفحه اعمل ايقاف ل 
})
// ------------------------------
// مثل تاني ان يطبع كل مره ب رقم 
<h2 id="demo"></h2>

let counter = 0;

function counterUp(){ // كل ثانيه functionده كده هتفضل مشغل ال 
	counter++;
    
	console.log(counter);
	
	$("#demo").html(counter);
};
setInterval(counterUp, 1000)

// ------------------------------
// مثل تاني ان يطبع كل مره ب رقم 
<h2 id="demo"></h2>

let counter = 0;
let hello = setInterval(function(){ // كل ثانيه functionده كده هتفضل مشغل ال 
	counter++;
    
	console.log(counter);
	
	$("#demo").html(counter);
},1000);


// -----------------------------
// functionمثل تاني ان اسيبها تشتغل و اول م توصل ل رقم 10 وقف ال 
function iUp(){
	let counter = 0;
	let x = setInterval(function(){ // كل ثانيه functionده كده هتفضل مشغل ال 
		counter++
		$("#demo").html(counter);
		if(counter==10){
			clearInterval(x);
		}
	},1000);
}
iUp();

//--------------------------------------------------------------
// مثل 
// html
<button onclick="startAlert()">button_1</button>
<button onclick="stopAlert()">button_2</button>


// ------------------------
// js
var timerID;
function startAlert(){ // انا كده بشغل كل 2 ثانيه 
	var timerID = setInterval(function(){
		window.alert("Hi");
	},2000);
}

function stopAlert(){	// stopAlert انا كده بعمل اقف لم اضغط ع 
	clearInterval(timerID);
}

// ===================================================================================================================
// Data
let x = new Date();	//
console.log(x.getHours()) // بيجيب الساعه
console.log(x.getHours()-12) // بيجيب الساعه بنظام ال12 ساعه 
console.log(x.getMinutes()) // بيجيب الدقائق 
console.log(x.getSeconds())  // بيجيب 

// -----
// مثلا ع الساعات 
function getDate() {
  let x = new Date();
  let hours = x.getHours();
  let minutes = x.getMinutes();
  let seconds = x.getSeconds();

  if (hours > 12) {
    hours -= 12;
  }

  $("#demo1").text(hours);
  $("#demo2").text(minutes);
  $("#demo3").text(seconds);
}

setInterval(getDate, 1000);
// ===================================================================================================================
//react.js
// filter
// انا عايز اظهر الارقم اللي فوق الفوق ال 0
let nums = [2, 4, 5, 6, 8, 5, 8, 2, 1, 0, -1, -5];

let positiveNums = [];
for (let i = 0; i < nums.length; i++) {
  // console.log(nums[i]);
  if (nums[i] > 0) { // انا عايز اظهر الارقم اللي فوق الفوق ال 0
    console.log(nums[i]);
    positiveNums.push(nums[i]);
  }
}
console.log(positiveNums);

//-----------------
// filter

 // nums.(function(x){});	//واحده واحده nums ده بيلف ع xال

let positiveNums2 = nums.filter(function (x) {
  // واحده واحده  numsال Array ده بيلف ع  x
  if (x > 0) {
    return x;
  }
});

console.log(positiveNums2); // هيظهر الارقام اللي فوق ال 0 x هيظهر اللي راجع من positiveNums2

// ---------
// Arrow Function

let positiveNums2 = nums.filter( (x)=> {
  // واحده واحده  numsال Array ده بيلف ع  x
  if (x > 0) {
    return x;
  }
});

console.log(positiveNums2); // هيظهر الارقام اللي فوق ال 0 x هيظهر اللي راجع من positiveNums2

// ========================================================================================
// map
 // nums.(function(x){});	//واحده واحده nums ده بيلف ع xال

const colors = ["red", "green", "blue"];
let col = colors.map((color) => {
  return `<li>${color}</li>`;
});
console.log(col);

//---------------------
let users = [
  { name: "Ahmed", age: 25, gender: "male" },
  { name: "mai", age: 5, gender: "female" },
  { name: "sara", age: 12, gender: "female" },
  { name: "mohamed", age: 20, gender: "male" },
  { name: "fatma", age: 40, gender: "female" },
];

// ---------------
// لوحد filter 
// let postUsers = users.filter((n) => {
//   if (n.age > 15) {
//     return n;
//   }
// });

// ---------------
// Arrow Function
// لوحد  filter
let adultUser = users.filter((user) => user.age > 16);
console.log(adultUser);

// لوحد map
let x = users.map((user) => {
  if (user.gender === "male") {
    user.name = `mr / ${user.name}`;
    return user;
  } else {
    user.name = `mrs / ${user.name}`;
    return user;
  }
});
console.log(x);

// --------
// map مع ال filter انا كده عمل ال 
let x = adultUser.map((user) => {
  if (user.gender === "male") {
    user.name = `mr / ${user.name}`;
    return user;
  } else {
    user.name = `mrs / ${user.name}`;
    return user;
  }
});
console.log(x);

//---------
// map مع ال filter انا كده عمل ال 
let adultUser2 = users
  .filter((user) => user.age > 16)
  .map((user) => {
    if (user.gender === "male") {
      user.name = `mr / ${user.name}`;
      return user;
    } else {
      user.name = `mrs / ${user.name}`;
      return user;
    }
  });
console.log(adultUser2);

// var v = 10;

// v = 20;
// const cc = 10;
// cc = 20;

// ========================================================================================
// spread operator  // Objectو ال Array بتشتغل ع
let nums2 = [10, 20, 30, 40, 50];
function sum(x, z, y, a, g) {
  console.log(x + z + y + a + g);
}
sum(...nums2);

// --------------------------
let arr1 = [7, 8, 9];
let arr2 = [1, 2, 3];
var res = [...arr1, ...arr2];
console.log(res);

// -------------------------- 
var obj1 = {name: "Ahmed",age: 27,};

var obj2 = obj1

var res2 = {...obj2 };
console.log(res2);

// ------------------------
// destruct operator
let person = {
  name: "Mohamed",
  age: 25,
  gender: "male",
};

person.name;
person.age;
console.log(person.name);

// بدل اللي فوق destruct operator ده طريقه 
let { name, age, gender } = person;
console.log(name);

// --------------------------