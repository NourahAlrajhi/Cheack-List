const input = document.querySelector('#input-box input');
const date = document.querySelector('#date-box input') ;  
const btn = document.querySelector('.button .buttonStyle');
const radioButtons = document.querySelectorAll('input[name="priority"]');
const DONEE = document.querySelector('.DONE');

var checkbtn;
var TASKNAME ;


var today =TODAYDATE();  
const DoneTask = document.querySelector('.DoneTask');
const datee = document.createElement('div');
Symbol.className = "datee"; // set the CSS class

datee.setAttribute('style','position: absolute; left: 41px;bottom: 136px;font-size: 15px;font-style: italic;color: #909bec; ',)

datee.innerHTML=today;
DoneTask.appendChild(datee);// put it into the DOM

function addList(e){
    const MENUE = document.querySelector('#Selected1');
    const NewTask = document.querySelector('#NewTask') ;
    
    const newLi = document.createElement ('li');
    newLi.className = 'TASK1';

    const DATEEE = document.createElement ('span');
    DATEEE.className='DATEEE';

    checkbtn = document.createElement ('input');
    checkbtn.type = "checkbox";
    checkbtn.className = "checkbox"; // set the CSS class
    checkbtn.name="checkbox";
  
if (document.getElementById('priorityH').checked) {
    newLi.setAttribute(
        'style',
        'background-color: rgb(231, 116, 116);',
      );
  }
 else if (document.getElementById('priorityM').checked) {
    newLi.setAttribute(
        'style',
        'background-color: rgb(230, 173, 69);',
      );
  }
  else{
    newLi.setAttribute(
        'style',
        'background-color: rgb(240, 240, 158);',
      ); 
  }

   const Symbol = document.createElement('i');
   Symbol.className = "Symbol"; // set the CSS class



DATEEE.innerHTML=date.value;

var d=date.value;
var today = new Date(d);
var date2 = new Date();

var DD =today.getTime()-date2.getTime();//calculate the days
var BB = parseInt(DD/(1000*3600*24));
//BB= Math.floor(BB);


if(input.value !=='' && date.value !==''&&(document.getElementById('priorityH').checked==true || document.getElementById('priorityM').checked == true || document.getElementById('priorityL').checked==true) && (document.getElementById('Selected1').value=='Study' || document.getElementById('Selected1').value=='Sport' || document.getElementById('Selected1').value =='Home')){ 
    newLi.innerHTML=input.value+"<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
 
    if(BB<2 && BB>=0){
        Symbol.innerHTML='<span class ="warning"><i class="fa-solid fa-triangle-exclamation id="IMAGE1"></i></span>';
       
        }
        else if(BB<0){
            Symbol.innerHTML='<span class ="Terminate"><i class="fa-solid fa-circle-xmark"></i></span>';
           
        }


    NewTask.appendChild(newLi);// put it into the DOM
    newLi.appendChild(checkbtn);// put it into the DOM
    newLi.appendChild(Symbol);// put it into the DOM
    newLi.appendChild(DATEEE);// put it into the DOM
    
}

//validating input
else if(input.value ==''){
    alert("Please Enter a Task");  
}

else if(date.value ==''){
    alert("Please Enter a Date");  
}

else if(document.getElementById('priorityH').checked==false && document.getElementById('priorityM').checked == false && document.getElementById('priorityL').checked==false){  
    alert("Please Choose a Priority");  
}
else if(document.getElementById("Selected1").value=="hid"){
    alert("Please Choose a Catagory");  
}

}



function removee() {
   var chekkk = document.getElementsByName('checkbox');
   var flag=false;
   for(var i =0 ,l=chekkk.length;i<l;i++){
if(chekkk[i].checked){
    flag=true;
    break;
}
   }
      if(flag){
        var today =TODAYDATE();  
          const DoneTask = document.querySelector('.DoneTask');
          var doc = document.querySelectorAll('.TASK1');
          doc.forEach(x => {
           if(x.querySelector('input').checked){
              x.remove();
             DoneTask.appendChild(x).setAttribute('style',
             'background-color: #80d3a0;',);
             const Symbol = document.createElement('i');
             Symbol.className = "Symbol22"; // set the CSS class
             Symbol.innerHTML='<span class ="cheack"><i class="fa-solid fa-check"></i></span>';

          
             //x.querySelector('.DATEEE').innerHTML= today;
             x.querySelector('.checkbox').remove();
             x.querySelector('.Symbol').remove();
             x.appendChild(Symbol);// put it into the DOM
            
         
   }
    
      });
      }
      else
        alert("Please select a Task"); 
      
   
       }

    function TODAYDATE(){
   var today = new Date();// to display current day
   var dd = String(today.getDate()).padStart(2, '0');
   var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
   var yyyy = today.getFullYear();  
 today = yyyy + '-' + dd + '-' + mm;
return today;

    }

    
    btn.addEventListener('click',addList);
    DONEE.addEventListener('click',removee);