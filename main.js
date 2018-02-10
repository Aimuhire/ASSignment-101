
 

var students=[];
function addToList(){
var name=document.getElementById('inp').value;
if(name){
    students.push(name);
    displayList('ul');
}
}

function displayList(type){ 
    for(i=0;i<students.length;i++){
        if(i==0) var myNewHtml="<"+type+">";
        myNewHtml+='<li onclick="removeFromList('+i+')" title="click to remove '+students[i]+' from list">'+students[i]+'</li>';
    }

    myNewHtml+="</"+type+">";
    document.getElementById('litxt').innerHTML="";
    document.getElementById('litxt').innerHTML=myNewHtml;

}
function makeOrder(){ 
    if(students.length!=0){
students.sort();
displayList('ol');
    }
}



function removeFromList(index){
  students.splice(index,1); 
  if(students.length==0) 
    document.getElementById('litxt').innerHTML="List Empty";
  else 
    displayList('ul');
}