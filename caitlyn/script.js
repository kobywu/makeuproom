a = document.getElementById("light1");
b = document.getElementById("light2");
c = document.getElementById("light3");
d= document.getElementById("light4");
e= document.getElementById("light5");
f= document.getElementById("light6");
g= document.getElementById("light7");
h= document.getElementById("light8");
i= document.getElementById("light9");
function opaque(el){
	el.classList.add("opaque");
} 
function  hint1(el){
	el.src="images/number1.png";
} 
function  hint2(el){
	el.src="images/number5.png";
} 
function  hint3(el){
	el.src="images/number4.png";
} 
function  hint4(el){
	el.src="images/number8.png";
} 
function  hint5(el){
	el.src="images/number9.png";
} 
function  hint6(el){
	el.src="images/number6.png";
} 

function checkColors(el){
if (a.classList.contains("opaque") && b.classList.contains("opaque") && c.classList.contains("opaque") &&  d.classList.contains("opaque") && e.classList.contains("opaque") && f.classList.contains("opaque") && g.classList.contains("opaque") && h.classList.contains("opaque") && i.classList.contains("opaque")){
		console.log("All lights green!");
		document.getElementById("key").classList.add("show");
		document.getElementById("key").classList.remove("hide");
		//i wish this function would work when all lights are yellow, or all are red...
	}
}