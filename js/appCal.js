// JavaScript Document



// calculator functions

var numExpression=0;
var answer;

function _(x){
	return document.getElementById(x);
}

function insertVal(num){
	 if(_('view').value == "Error"){
		 _('view').value = "";
		 _('view').value = num;
	 }else{
	 _('view').value += num;
	 numExpression =  _('view').value;
	 }
}


function equal(){
	 if((numExpression == "*" )|| numExpression == "/" || numExpression == "+" || numExpression == "-"){
		_('view').value = "Error"; 
	 }else{
	 answer = eval(numExpression);
	  
	 _('view').value = answer;
	 
	  }
	  numExpression = 0;
}


function erase(val){
 _('view').value = val;  
}

var char = "3.2 +5.9";
var k = eval(char);
alert(k);