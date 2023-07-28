// https://jquery.com/
// ثم
// Download jQuery
// ثم اضغط ع النسخه المضغط او العاديه انا بختار المضغط اللي هي اول واحده 
// Download the compressed, production jQuery 3.6.0		// ثم اضغط ع اللينك 
// Download the uncompressed, development jQuery 3.6.0
// للملف save علشان اعمل ctrl + s ثم اضغط ع 
// =============================================================================================================

// h1 او .sehen او #dimo مثل cssبشتغل  بنفس ال JQuery
// =============================================================================================================

$(document).click(function(){ // انا كده بقول لم اضغط ع اي حط في المتصفح  
	
});

// Arro function ممكن اعمل 
$(document).click(()=>{	// انا كده بقول لم اضغط ع اي حط في المتصفح 

})

// important ملحوظه لو عايز اعمل 
$("#demo").cssText="background-color:red !important"

// =============================================================================================================

// JQuery Effects

// html
<button id = "btn" class="btn btn-info">click</button><br><br>
<div id="demo">demo3</div>
	
// css
#demo {
	width: 300px;
	height: 300px;
	background-color: #9c0;
	/* display: nane; */
}

// js
// ممكن اعمل عادي 
$("span, h1").hide(1000); $("#demo, .elment , #demo .test").hide(1000); $("*").hide(1000);		// بظبط cssزي ال JQueryبستخدم ال 

jQuery("#demo3").hide(1000);	// jQuery ممكن اكتب 
$("#demo3").hide(1000);			//	$ او ممكن اعمل علامه 

$("#demo3").hide(1000);			// بخفي في 1 ثانيه 

// click ممكن اعمل ب 
$("#btn").click(function(){		// functionاعمل خصائص ال btn لم اضغط ع 
	$("#demo3").hide(1000);			// بخفي في 1 ثانيه 
});
$("#btn").click(function(){
	$("#demo3").show(1000);			// بظهر في 1 ثانيه 
});
$("#btn4").click(function(){
	$("#demo4").toggle(1000);		// لو مخفي بظهر و لو ظهر بيختفي 
});

$("#btn5").click(function(){
	$("#demo5").slideDown(1000);	// بيظهر ع شكل ستارة
});
$("#btn6").click(function(){
	$("#demo6").slideUp(1000);		// بيخفي ع شكل ستارة
});
$("#btn7").click(function(){	
	$("#demo7").slideToggle(1000);	// لو مخفي بظهر و لو ظهر بيختفي ع شكل ستاره 
});

$("#btn9").click(function(){
	$("#demo9").fadeIn(1000);		// Opacity بيظهر ب 
});
$("#btn8").click(function(){
	$("#demo8").fadeOut(1000);		// Opacity بيخفي ب 
});
$("#btn10").click(function(){
	$("#demo10").fadeToggle(1000);	// Opacity لو مخفي بظهر و لو ظهر بيختفي ب 
});
$("#btn").click(function(){
	$("#demo").fadeTo(1000 , 0.5); // و 0.5 ده درجه الشفافيه  Opacity لو مخفي بظهر و لو ظهر بيختفي مره واحده ب
});

//----------------------------------------------------------
{/* Effects ب callback لو عايز استخدم كذه خاصيه او اعمل ال  */}

$("#btn").click(function(){
	$("#demo").slideUp(1000 , function(){ $("#btn").slideUp(1000)}); // btn الاول وبعد كده بخفي ال demoانا كده بخفي ال 
});

$("#btn").click(function(){
	$("#demo").slideUp(1000).slideDown(1000).hide(1000); // demoاللي هو ال elmants انا ممكن اعمل اكتر من خاصيه بس بيحصل ع نفس ال 
});

{/* ------------------------------------------------------------------- */}
// بنفسي Effects لو عايز اعمل 
// animate	// color وال backgroundColor مش بيشغل animate
$("#btn").click(function(){	// كده بيعمل الخصائص مع بعد 
	$("#demo").animate( {width:'100%' , height:'100vh' , borderRadius:'50%'} , 2000); //  في 2 ثانيه height:'100vh'و width:'100%'  انا بقول اعمل 
})

$("#btn").click(function(){// بعد كده heightالاول وال width كده بعمل كل خاصيه لوحده يعني ال 
	$("#demo").animate( {width:'100%' , padding: '10px'} , 2000);	// elmants انا اقدر اعمل الخصايص ده وراه بعض في حالات لو هو نفس ال 
	$("#demo").animate( {height:'100vh'} , 2000);
	$("#demo").animate( {borderRadius:'50%'} , 2000);
	
	// callback مختلفين  يبقي اعمل elmants ده كده 2 
	$("#demo").animate( {width:'100%' , padding: '10px'} , 2000);// في 1 ثانيه padding btn اعمل heightوال widthيخلاص ال demoكده بقول بعد م ال 
	$("#demo").animate({height:'100vh'} , 2000, 
		function(){
			$("#btn").animate({padding:'30px'}, 1000);
		} ); 
})

//------------------------------------------------
// مثلا 
// stop و start button ده علشان اعمل 
// فقط animate ده بتشتغل مع ال stop 
// html
<button id = "start" class="btn btn-info">start</button>
<button id = "stop" class="btn btn-info">stop</button>
<div id="demo"></div>

//css
#demo {
	width: 300px;
	height: 300px;
	background-color: #9c0;
}

// js
$("#start").click(function() {	// بيعمل الخصائص start لم اضغط ع 
	$("#demo").animate( {width:'100%'} , 2000);	 
	$("#demo").animate( {height:'80vh'} , 2000);
	$("#demo").animate( {borderRadius:'50%'} , 2000);
})
$("#stop").click(function() {	// بيوقف الخصائص stop لم اضغط ع 
	$("#demo").stop();		// ده بيعمل اقف للعناصر 
})

//-------------------------------------------
// لم الموقع يفتح section مثلا ان بكون ال
// html
<section id ="demo">
	<h1 class="text-center py-4">Welcome</h1>
	
	<div class="container">
		<div class="row">
			
			<div class="col-md-4 itm-1">
				<img src="images/1.jpg" class="w-100" alt="">
				<h2>Project One</h2>
				<p>Lorem Project One is Dolor Lorem Project One is Dolor Lorem Project One is Dolor Lorem Project One is Dolor </p>
			</div>
		
			<div class="col-md-4 itm-2">
				<img src="images/2.jpg" class="w-100" alt="">
				<h2>Project One</h2>
				<p>Lorem Project One is Dolor Lorem Project One is Dolor Lorem Project One is Dolor Lorem Project One is Dolor </p>
			</div>
			
			<div class="col-md-4 itm-3">
				<img src="images/3.jpg" class="w-100" alt="">
				<h2>Project One</h2>
				<p>Lorem Project One is Dolor Lorem Project One is Dolor Lorem Project One is Dolor Lorem Project One is Dolor </p>
			</div>
			
		</div>
	</div>
</section>

//css
#demo{
	background-color: #198;
	color:#f00;
	width: 30px;
	height: 5px;
}
#demo h1{
	display: none;
}

.itm-1 , .itm-2 , .itm-3 {
	display: none;
}

//js
$("#demo").animate( {width:'100%'} , 1500);
$("#demo").animate( {height:'100vh'} , 1500 , function(){

	$("#demo h1").fadeIn(500 , function(){
		$("#demo .itm-1").slideDown(1000 , function(){
			$("#demo .itm-2").slideDown(1000 , function(){
				$("#demo .itm-3").slideDown(1000)
			})
		})
	});
});

//===================================================================================================================================================
// JQuery HTML
	//getter	==> بجيب حاجه 
	//setter	==> بحط حاجه


// html كود 
<section id ="demo" class="bg-info">
	<h2>Welcome web development</h2>
	<button>OK</button>
</section>

{/* document زي ال .text و .html */}
// .html---------------
$("#demo").click(function(){
	console.log( $("#demo").html() );	// ب التاج demoده بيجيب العناصر اللي جوه ال 	//getter
	let x =  $("#demo").html();
});
$("#demo").click(function(){	// innerHtml ده عمله زي ال	.html
	$("#demo").html("<h1>Fatma</h1>");	// demoل ال html انا كده بحط تاج 	//setter
});

// .text---------------
$("#demo").click(function(){
	console.log( $("#demo").text() );	// اللي جوه التاج textانا كده بقول هات ال	//getter
});
$("#demo").click(function(){
	$("#demo").text("Fatma");			// جوه التاج text انا كده بضاف 	//setter
});

// .value---------------
{/* .value عمله زي .val */}
// value----------------------- input او اجيب من inputده علشان اضاف في 
<section id ="demo" class="py-5">
	<input id="uName" type="text" class="form-control w-50 m-auto" name="">
</section>

 $("#demo").click(function(){	
	$("#uName").val("Hello");		// Hello كلمه inputاظهر في ال demo انا كده لم اضغط ع 	//setter
});
 $("#demo").click(function(){
	console.log( $("#uName").val() )// demo لم اضغط ع input انا كده بقول هات اللي اتكتب في  //getter
});

// setAttribute---------------
{/* setAttribute عمله زي .attr */}
// Attribut--------------- htmlفي ال rel او href او idاو imgال srcده لو هغير ال 
// $("#demo").attr("class","d-flex");// href او id او class انا ممكن اعمل 

<img id="demo" src="images/1.jpg" class="w-100" alt="">

// js
{/* setAttribute */}
 $("#demo").click(function(){
	$("#demo").attr("src","images/2.jpg");	// انا كده بغير الصوره 	//setter
	
	// $("#demo").attr("class","d-flex");// او htrf او a او id او class انا ممكن اعمل 
});

{/* getAttribute */}
 $("#demo4").click(function(){
	let x = $("#demo").attr("src");	//بتاع الصوره srcانا كده بجيب ال 	//getter
	console.log(x);
});


// css ---------------
{/* // .style ده بديل  .css */}
// css----------- backgroundColor او color او margin او font-size او widthاو borderRadius مثلا cssانا كده بتعامل مع ال 
$("#demo").click(function(){
	$("#demo").css("width","100%");	//setter ---- ل100 widthغير ال demoلم اضغط ع ال
	//$("#demo").css({"width":"100%" , "borderRadius" : "50%"})	// css ممكن اعمل اكتر من خصائي
	
	//$("#demo").css("color")	//getter ----- colorانا كده لقول هات ال 
});

// css مع jquery نفس طريقه style مع js ده طريقه 
$("#demo").click(function(){
	let imgs = document.getElementById('demo');
	imgs.style.width = '100%';
});

// Class ---------------
// Class-------------------ممكن اضاف او اشيل cssفي ال Classيعني لو عندي Classده بيتعامل مع ال
<img id="demo" src="images/1.jpg" class="w-100" alt="">
<img id="demo" class="test" src="images/1.jpg" class="w-100" alt="">
	
.test {
	width: 50%;
	border-radius: 50%;
	margin: auto;
}

$(document).click(function(){
	$("#demo").addClass("test")			// demo اللي اسم id بيحط في test اللي اسم cssمن ال classده بيجيب ال
	//$("#demo").removeClass("test")	// Class يتلاغي body ولم اضغط ع test اسم htmlفي ال Class واخد demoلو ال 
	//$("#demo").toggleClass("test")	// ومره اظهر Classيلاغي ال  body لو ضغط ع

	// toggleClassام ممكن اعمل المثل ده بدل ال 
	// ولا لا test ال class ده في demoانا كده بقول شوف ال 
	if( $("#demo").hasClass("test")  ) { // demo بتاع id موجود في testال Class ده زي مثلا بيرقب العناصر اللي قولت عليا مثلا انا قولت شوف hasClass
		$("#demo").removeClass("test")	
	}
	else{
		$("#demo").addClass("test")	
	}

})

{/* /----------------------------------------/ */}
// after before --------- ده بيضاف قبل او بعد 
<h1 id="demo" class="bg-warning">web<h1>

	$(document).click(function(){
		$("#demo").append("<a href='#'>google</a>")		// web بعد كلمه h1 داخل التاج google ده هيضاف 
		//$("#demo").prepend("<a href='#'>google</a>")	// web قبل كلمه h1 داخل التاج google ده هيضاف 

		//$("#demo").after("<a href='#'>google</a>")	// web بعد كلمه h1 خارج تاج google ده هيضاف 
		//$("#demo").before("<a href='#'>google</a>")	// web قبل كلمه  h1 خارج تاج google ده هيضاف 
	})
{/* /----------------------------------------/ */}
// remove empty------------------- demo اسم id او بيمسح جوه التاج اللي واخد documentبيمسح العنصر خالص من 

<h1 id="demo" class="bg-warning"><span>mee</span>>web desing<h1>

$(document).click(function(){
		$("#demo").remove();	// خالص demo ده كده امسح العنصر اللي واخد
//$("#demo").empty();	// بس مكان محفوظ demo ده كده بيفضي العنصر اللي جوه ال
})

{/* /----------------------------------------/ */}
// innerWidth------------------- width + padding + border + marginده بيجيب ال 
<div id="demo"><div>

	#demo{
		width: 100px;
		height: 100px;
		background-color:#09c;
		padding:10px;
		border: 10px solid red;
		margin:10px;
	}

	$(document).click(function(){
		let x = $("#demo").width();		//width
	//let x = $("#demo").innerWidth();	//width + padding
	//let x = $("#demo").outerWidth();	//width + padding + border
	//let x = $("#demo").outerWidth(true);	//width + padding + border + margin
	console.log(x);
});	// height وممكن اعمل نفس الكلام ع ال

//----------------------------------------
// ده مثلا ان بضط ع اي صوره بططلع في العرض 
//html
<div class="w-50 m-auto">
	<img id="mainImage11" src="images/1.jpg" class="w-100" alt="">

	<img class="img-item" src="images/1.jpg" alt="">
	<img class="img-item" src="images/2.jpg" alt="">
	<img class="img-item" src="images/3.jpg" alt="">
	<img class="img-item" src="images/4.jpg" alt="">
	<img class="img-item" src="images/5.jpg" alt="">
</div>

// css
.img-item{
	width: 20%;
	float: left;
	padding: 10px;
	cursor: pointer;
}

//js
$(".img-item").click(function(){	// img-item اللي اسم class لم اضغط ع ال 
	// window.alert('Hello');	// test بعمل 
	
	// let imgSrc = $(this);	// eventInfo.target ده بدل this
	// console.log(imgSrc);
	
	let imgSrc = $(this).attr("src");	// وهات مسار this في srcلم اضغط ع الصوره بيحفظ ال 	//getter ده يعني بجيب

	$("#mainImage11").attr("src" , imgSrc);	// setter	// imgSrc وحط src اللي اسم Attribut تدخل جوه mainImage11ال idانا كده بقول روح ل ال 
});


//===================================================================================================================================================
// scroll لم اعمل navbar تغير لون ال 
// offset	 leftو ال topده بيجيب مسافه العنصر في ال 
// scrollTop // jQuery ده علشان الموقع بطول ده حاجه جهزه في 
// قد ايه في الموقع بظبط scroll اتعملها window ده بيجيب scrollTop
// scrollLeft // من تحت scroll ده علشان الموقع لم بيقي بعرض وفي 


// html
<nav id="main-nav">

</nav>

<section id="about">

</section>

//js
// let aboutOffsetTop = $("#about").offset();

let aboutOffsetTop = $("#about").offset().top;
// بتاع الموقع كل left و top ده بتجيب بعد offset
// topبطول ب ال aboutانا كده هجيب المسافه م بين الموقع من فوق لحد ال offset

console.log(aboutOffsetTop)

$(window).scroll(function(){	// scroll يعمل userانا كده بقول لم ال 
	let wScroll = $(window).scrollTop(); // قد ايه في الموقع بظبط scroll اتعملها window ده بيجيب scrollTop

	if(wScroll > aboutOffsetTop - 50){	// main-nav بتاع backgroundColorغير ال aboutOffsetTop ويوصل scroll انا كده بقول لم يعمل 
	$("#main-nav").css("backgroundColor", "rgba(142, 119, 84,0.9)");
	}
	else{	// transparent ولم يطلع تاني اعمل 
		$("#main-nav").css("backgroundColor", "transparent");
	}
})

------------------------
// section ده علشان السهم اللي علي اليمين لم اضغط عليا يطلع ل اول 
// html
<button id="btnUp">
	<i class="fas fa-arrow-alt-circle-up "></i>
</button>

// css
#btnUp{
	background - color: #8e7754;
	color: #fff;
	font-size: 30px;
	border-radius: 100px;
	padding: 10px;
	border: solid 1px #8e7754;
	position: fixed;
	bottom:10px;
	right:30px;
	display: none;
	z-index: 11111;
}

// js
let arrowOffsetTop = $("#about").offset().top;

$(window).scroll(function(){	// scroll يعمل userانا كده بقول لم ال 
	let wScroll = $(window).scrollTop();	// ده بيجيب السكرور فين بظبط كل م يتحرك 

	if(wScroll > arrowOffsetTop - 50){	// اظهر السهم about لم انزل ع 
		$("#btnUp").fadeIn(500);
	}
	else{	// لم اطلع اخفي السهم 
		$("#btnUp").fadeOut(500);
	}
})

$("#btnUp").click(function(){	// لم اضغط ع السهم اطلع ع اول الموقع في 3 ثواني 
	$("html,body").animate({ scrollTop: 0 }, 3000);
})

------------------
//يتحرك بشكل جميل navbarده علشان لم اضغط علي اي لينك في ال

$("a[href^='#']").click(function() {// اللي بيساوي # اعملي الخصائص ده href اللي جوه aانا كده بقول ال
	let aHref = $(this).attr("href");
	let sectionOffset = $(aHref).offset().top;// aHref انا كده بجيب طول كل لينك offset
	$("html,body").animate({scrollTop:sectionOffset} , 2000);
});

//---

let aboutOffsetTop = $("#about").offset().top;

$(".nav .aboutLink").click(function() { // aboutال section نزل عند  Navbarاللي في ال about انا كده بقول لم اضغط ع 
	$("html,body").animate({scrollTop:aboutOffsetTop} , 2000);
});

---------------------
// ده علشان بوكس الالوان

// html
<div id="sideBar">
	<div id="colorBox">
		<h4 class="pb-3">Choose Your Color : </h4>
		<div class="color-item">
		</div>

		<div class="color-item">
		</div>

		<div class="color-item">
		</div>

		<div class="color-item">
		</div>

		<div class="color-item">
		</div>

		<div class="clr"></div>
	</div>
	<i id="sideBarToggle" class=" fa fa-cog py-2 fa-spin"></i>
</div>

// css
#sideBar{
	position: fixed;
	top: 50%;
	left:0px;
	color: #fff;
	z-index:10;
}
#colorBox{
	background-color: #8e7754;
	padding: 20px;
	float: left;
}
.color-item{
	background-color: #f00 ;
	width: 30px;
	height: 30px;
	display: inline-block;
	cursor: pointer;
	margin-right: 10px;
}
#sideBarToggle{
	padding:10px;
	cursor: pointer;
	font-size:50px;
	float: left;
	color: #8e7754;
}
.clr {
	clear:both;		
}

// js 
let colorBoxWidth = $ ("#colorBox").outerWidth(true); //colorBoxWidth واحطها في colorBoxانا كده بجيب عرض ال innerWidth

$("#sideBar").css({left:`-${colorBoxWidth}`}); // يبقي جوه اول م افتح الموقع Boxده علشان ال

$("#sideBarToggle").click(function(){

	// $(#colorBox).toggle(500);	// انا كده بضغط مره يظهر وضغط يختفي 
	if($('#sideBar').css("left")=="0px") {
		// $("#sideBar").animate({ left: "-100px" }, 2000);
		$("#sideBar").animate({ left: `-${colorBoxWidth}` }, 2000);//left ب السالب ل colorBoxWidthكده لم اضغط علي الاعدادت داخل ال
	}
	else {
		$('#sideBar').animate({ left: `0px` }, 2000);//ده كده يبقي بره	0 = left ب sideBar انا كده بقول لو البوكس
	}
})

// تغير الالون 
/*
$(".color-item").css("backgroundColor" , "#ff0");
$(".color-item").eq(0).css("backgroundColor" , "red");
$(".color-item").eq(1).css("backgroundColor" , "#09c");
$(".color-item").eq(2).css("backgroundColor" , "orange");
$(".color-item").eq(3).css("backgroundColor" , "teal");
$(".color-item").eq(4).css("backgroundColor" , "brown");
$(".color-item").eq(5).css("backgroundColor" , "#00f");
*/

//تغير اللون في البوكس 
let colorBox = $(".color-item");


for(let i =0; i< colorBox.length; i++) {
	let red = Math.round(Math.random()*255);	// ده بتجيب ارقام عشوائي Mathال 	// جاهز Object ده Math	// علشان يشيل الارقام الكسريا round ده بطلع ارقام فيها كسر روحت عملت  random
	let green = Math.round(Math.random()*255);
	let blue = Math.round(Math.random()*255);

	colorBox.eq(i).css("backgroundColor" , `rgb(${red} ,${green} ,${blue})`);
}

//بيغير بقي الالون اللي انت عايزه boxلم اضغط علي لون من الالون في ال
colorBox.click(function(){	// الصغيره الملونه colorBox انا كده بضغط ع 
	let bkgColor = $ (this).css("backgroundColor");	// bkgColor واحطها في this اللي دوست عليا  من backgroundColorانا كده بجيب ال 
	
	$("*").css("color" , bkgColor)	// بتاع الموقع كل colorانا كده بغير ال
	// $(".change,p ,h1").css("color" , bkgColor)	// وهكذه h1 و p وكمان ممكن اعمل ع .change اللي اسم class انا كده بغير اللي واخد 
	// $(".change").css("backgroundColor" , bkgColor)	//.change اللي اسم class اللي واخد backgroundColor انا كده بغير 
})

//=======================================================
// ده علشان لم الموقع يحمل يطلع شكل اعقبال م يحمل 
// css3 spinners موقع loadده موقع في جميع ال 
https://loading.io/css/
https://tobiasahlin.com/spinkit/
https://cssloaders.github.io/

// html
<section id="loading" class="  justify-content-center align-items-center">
	<div class="spinner">
		<div class="dot2 fas fa-utensils"></div>
		<div class="dot1 fas fa-utensils"></div>
	</div>
</section>

// css
body{
	overflow: hidden;
}
#loading{
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0,0.9);
	z-index: 10000;
	display:flex;
	justify-content:center;	
	align-items:center;	
}
// من الموقع cssوبجيب كود ال 
.spinner {
	width: 40px;
	height: 40px;
	position: relative;
	text-align: center;

	-webkit-animation: sk-rotate 2.0s infinite linear;
	animation: sk-rotate 2.0s infinite linear;
}
.dot1, .dot2 {
	width: 80%;
	height: 80%;
	display: inline-block;
	position: absolute;
	top: 0;
	border-radius: 100%;

	-webkit-animation: sk-bounce 2.0s infinite ease-in-out;
	animation: sk-bounce 2.0s infinite ease-in-out;
	font-size:500%;
	color:#fff
}
.dot2 {
	top: auto;
	bottom: 0;
	-webkit-animation-delay: -1.0s;
	animation-delay: -1.0s;
}



@keyframes sk-rotate {
	100 % { transform: rotate(360deg); }
}


@keyframes sk-bounce {
	0 %, 100 % {
		transform: scale(0.0);
		- webkit - transform: scale(0.0);
	} 
	50% {
		transform: scale(1.0);
		-webkit-transform: scale(1.0);
	}
}

// js
$(document).ready(function(){	// $(document).ready(function(){ الكود كده كويس بس يستحسن ان اخد الكود ده في اول الصفحه من فوق 
	$("#loading").fadeOut(2000, function () {
		$("body").css("overflow", "auto")
	});
});

// $(function(){	// $(document).ready(function(){   ده اختصر بدل 
		// $("#loading").fadeOut(1000 , function(){
		// $("body").css("overflow" , "auto")
	// });
// })

// بيور jsبس ده بيتعمل ب ال onload هو هو ready 
window.onload = function(){	// غير لم يحمل الداتا خالص loadingوكمان مش بيختفي الdocument بيحمل بعد window
	$("#loading").fadeOut(2000, function () {
		$("body").css("overflow", "auto")
	});
}
