
//field add karni ha expreince section me 




function addNewField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control')
    newNode.setAttribute('rows', 3);
    newNode.classList.add('mt-2');
    newNode.classList.add('wefield');

    newNode.classList.add('pick')
    let weOB = document.getElementById('we')
    let weaddbtn = document.getElementById('weAddBtn');
    weOB.insertBefore(newNode, weaddbtn);
  
    updateClearOutButtonState();
  }

  //field add karni ha qualification section me




  function addNewAQ() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control')
    newNode.classList.add('AQfield');

    newNode.setAttribute('rows', 3);
    newNode.classList.add('pick')
    newNode.classList.add('mt-2');
    let weOB = document.getElementById('aq')
    let weaddbtn = document.getElementById('aqBtn');
    weOB.insertBefore(newNode, weaddbtn);
  
    updateClearOutButtonStatetwo();
  }
//button delete ko show tab karna jab texarea ki length 1 se zaida ho ya 1 hu



  function updateClearOutButtonState() {
    let textareas = document.querySelectorAll('.pick');
    let clearOutButton = document.querySelector('.getbtn');
    if (clearOutButton && textareas.length >=1) {
      clearOutButton.style.display = 'flex';
    } else if (clearOutButton) {
      clearOutButton.style.display = 'none';
    }
  }
  //field ko delete karne ke lia button banaya or append karwaya



  for (var i = 0; i < 1; i++) {
    let weaddbtn = document.getElementById('weAddBtn');
    let newbtn = document.createElement('button')
    newbtn.classList.add('btn')
    newbtn.classList.add('btn-primary')
    newbtn.classList.add('btn-sm')
    newbtn.setAttribute('type','button')
    newbtn.classList.add('getbtn')
    newbtn.innerText = 'clear out'
  
    weaddbtn.addEventListener('click', () => {
      weaddbtn.append(newbtn);
      updateClearOutButtonState();
    });
  }
  //event clear out button textarea ko remove karne ke lia


  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('getbtn')) {
      event.target.parentNode.previousSibling.remove();
      updateClearOutButtonState();
    }
  });
//add qualification wale textarea ki length 1 se zaida ho ya 1 hu



  function updateClearOutButtonStatetwo(){
    let textareas = document.querySelectorAll('.pick');
    let clearOutButton = document.querySelector('.getbtn2');
    if (clearOutButton && textareas.length >= 1) {
      clearOutButton.style.display = 'flex';
    } else if (clearOutButton) {
      clearOutButton.style.display = 'none';
    }
  
  }
//cleaout button ko banaya or ek bar wo add karwaya event add per 



  for (var i = 0; i < 1; i++) {
    let Aqbtn = document.getElementById('aqBtn');
    console.log(Aqbtn)
    let newbtn = document.createElement('button')
    newbtn.classList.add('btn')
    newbtn.classList.add('btn-primary')
    newbtn.classList.add('btn-sm')
    newbtn.classList.add('getbtn2')
    newbtn.setAttribute('type','button')
    newbtn.innerText = 'clear out'
  
    Aqbtn.addEventListener('click', () => {
      Aqbtn.append(newbtn);
      updateClearOutButtonStatetwo();
    });
  }
  //event for deleting the AQ field 



  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('getbtn2')) {
event.target.parentNode.previousSibling.remove();

      updateClearOutButtonStatetwo();  
    }
  });
//cv generate karne ka function


function genearateCV(){
    let nameField=document.getElementById('nameField').value;
    let nameT1=document.getElementById('nameT1');
    nameT1.innerHTML=nameField;

            document.getElementById('nameT2').innerHTML=nameField;

document.getElementById('contactT').innerHTML=document.getElementById('contactField').value;

document.getElementById('addressT').innerHTML=document.getElementById('addressField').value;

document.getElementById('FbT').href=document.getElementById('fB-link').value;
document.getElementById('InstaT').href=document.getElementById('Insta-link').value;
document.getElementById('LinkT').href=document.getElementById('Linkedin-link').value;

document.getElementById('objectT').innerHTML=document.getElementById('objectField').value
var wef=document.getElementsByClassName('wefield');
let str='';
for(let e of wef){
    str=str+`<li>${e.value}</li>`
}
document.getElementById('weT').innerHTML=str;

let aqs=document.getElementsByClassName('AQfield');
let str2='';
for(let e of aqs){
    str2=str2+`<li>${e.value}</li>`
}
document.getElementById('aQt').innerHTML=str2;


document.getElementById('gnCV').style.display='none';
document.getElementById('Cv-templete').style.display='block';

//setting image
let file=document.getElementById('imagefield').files[0]
let reader=new FileReader()
reader.readAsDataURL(file);

//set the image templete
reader.onload=function(){
    document.getElementById('imagetemplete').src=reader.result;
}
}

function printCV(){
    window.print();
}
//submit event 



document.getElementById('gnCV').addEventListener('submit', function(event) {

  event.preventDefault();

  genearateCV();
});


