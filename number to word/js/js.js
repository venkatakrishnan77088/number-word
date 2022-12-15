Button=document.createElement("Button")
Button.setAttribute("onclick","start();");
Button.innerHTML="click Me"
document.body.appendChild(Button);
r=document.write("<br> <br>")
document.body.appendChild(r);


function start(){
	var inputButton1 = document.createElement("INPUT");
    inputButton1.setAttribute("type", "text");
    inputButton1.setAttribute("placeholder", "enter the number:");
   inputButton1.setAttribute("id","n1");
   
   inputButton1.style.backgroundColor="white";
inputButton1.style.border="10px solid #A1B19F";
inputButton1.style.marginLeft="10%";
inputButton1.style.width="20%";
inputButton1.style.padding="10px";


document.write("<br>");
   document.write("<br>");
   document.write("<br>");
   document.body.appendChild(inputButton1);
   
   
   
    runButton=document.createElement("Button");
   runButton.setAttribute("onclick","run();");
   runButton.style.marginLeft="10%";
   runButton.style.width="10%";
runButton.style.padding="10px";
runButton.style.backgroundColor="#E6B0AA";

   document.write("<br>");
   document.write("<br>");
   document.write("<br>");
   document.body.appendChild(runButton)
   runButton.innerHTML="run";
   output=document.createElement("div")
   output.style.marginLeft="12%"
   output.style.marginTop="10px";
   runButton.style.borderRadius="5px"
   document.body.appendChild(output)
   
}
function run(){
  num1 = Number(document.getElementById("n1").value);
 while(num1>0){
	 rem=num1%10
	 num1=(num1-rem)/10
	 innerHTML=""
	 if(rem==3){
		 console.log("three")
		 output.innerHTML+="three"+"<br>"
	 }
	 else if(rem==2){
		 console.log("two")
		 output.innerHTML+="two"+"<br>"
	 }
	 else if(rem==1){
		 console.log("one")
		 output.innerHTML+="one"+"<br>"
	 }
	 else if(rem==4){
		 console.log("four")
		 output.innerHTML+="four"+"<br>"
	 }
	 else if(rem==5){
		 console.log("five")
		 output.innerHTML+="five"+"<br>"
	 }
	 else if(rem==6){
		 console.log("six")
		 output.innerHTML+="six"+"<br>"
	 }
	 else if(rem==7){
		 console.log("seven")
		 output.innerHTML+="seven"+"<br>"
	 }
	 else if(rem==8){
		 console.log("eight")
		 output.innerHTML+="eight"+"<br>"
	 }
	 else if(rem==9){
		 console.log("nine")
		 output.innerHTML+="nine"+"<br>"
      }else{
		  console.log("zero")
		  output.innerHTML+="zero"+"<br>"
	  }
 }
}
 