//Program which creates a countdown with pause and play feature


// global variables
var currentSeconds;
var IntervalHandler;
var pause_count =0;

function display()
{
    if(pause_count==0)
        {
            var message = "";
            var minutes = Math.floor(currentSeconds/60);
            var seconds = currentSeconds - minutes*60;

            if(seconds<10){
                seconds = "0"+seconds;
            }
            message = minutes+":"+seconds;
            document.getElementById("timer").innerHTML = message;

            if(currentSeconds==0){
                alert("Done!!!");
                clearInterval(IntervalHandler);
                // document.getElementById("pause").style.display="none";
                 document.getElementById("inputArea").style.display = "block";
                 document.getElementById("pdiv").style.display="none";
   
            }
            currentSeconds = currentSeconds-1;
        }
    else 
        return;
   
}

//Function which validates and processes and the input
function countDownFunction()
{
    currentSeconds= document.getElementById("tb").value;
    if(isNaN(currentSeconds))
        {
            alert("Please Enter a number as input for count down timer");
            return;
        }
    IntervalHandler = setInterval(display,1000);
    currentSeconds = currentSeconds*60;
    document.getElementById("inputArea").style.display="none";
     
    document.getElementById("pdiv").style.display="block";
    mypause = document.getElementById("pause");
     mypause.onclick=function(){
        pause_count = (pause_count+1)%2;
    };
   
}


//Main function which calls other functions
window.onload = function(){
    
    var myTextBox = document.createElement("input");
    myTextBox.setAttribute("type","text");
    myTextBox.setAttribute("id","tb");
   
    var myButton = document.createElement("input");
    myButton.setAttribute("type","button");
    myButton.setAttribute("id","button");
    myButton.setAttribute("value","Start Countdown");
    myButton.onclick=function(){
        countDownFunction();
    };
   
    var mypause = document.createElement("input");
     mypause.setAttribute("type","button");
    mypause.setAttribute("id","pause");
    mypause.setAttribute("value","Pause/Play");
   
    
    var dived = document.createElement("div");
    dived.setAttribute("id","pdiv");
   
    dived.appendChild(mypause);
    
    myDiv = document.getElementById("inputArea");
    myDiv.appendChild(myTextBox);
    myDiv.appendChild(myButton);
     div2 = document.getElementById("box");
    div2.appendChild(dived);
    document.getElementById("pdiv").style.display="none";
    
}