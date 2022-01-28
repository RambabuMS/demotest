//create table using DOM
//should use Function

var table=document.createElement('table');
table.setAttribute('class','table');
//<table class = "table"></table>
var thead=document.createElement('thead');
thead.setAttribute('class','thead-dark');
var tr=document.createElement('tr');
var th1=createelement('th','First');
var th2=createelement('th','Last');
tr.append(th1,th2);
thead.append(tr);

var tbody=document.createElement('tbody');
var tr=document.createElement('tr');

var td1=createelement('td','john');
var td2=createelement('td','doe');
tr.append(td1,td2);
tbody.append(tr);



var tr1=document.createElement('tr');
var td3=createelement('td','Jacob');
var td4=createelement('td','Thornton');
tr1.append(td3,td4);


var tr2=document.createElement('tr');
var td5=createelement('td','Larry');
var td6=createelement('td','the Bird');
tr2.append(td5,td6);
tbody.append(tr1,tr2);

table.append(thead,tbody);

document.body.append(table);



function createelement(elename,value=""){
  var element=document.createElement(elename);
  element.innerHTML=value;
  console.log(element);
  return element;
}