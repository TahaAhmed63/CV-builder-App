function addnewField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');

    newNode.classList.add('wefield');
    newNode.setAttribute('rows',3);
newNode.classList.add('mt-2')
      let weOb=document.getElementById('we')
    let weaddbtn=document.getElementById('weAddbtn')



    weOb.insertBefore(newNode, weaddbtn)
}


function addNewQu(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqfield');
    newNode.setAttribute('rows',3);
newNode.classList.add('mt-2')
      let AqOb=document.getElementById('aq')
    let AQaddbtn=document.getElementById('aqAddbutton')


    AqOb.insertBefore(newNode, AQaddbtn)
}
//Cv generate
function generateCV(){
    let nameField=document.getElementById('nameField').value;
    let nameT1=document.getElementById('nameT1');
    nameT1.innerHTML=nameField;


document.getElementById('nameT2').innerHTML=nameField;
//contacts
document.getElementById('contactT').innerHTML=document.getElementById('ContactField').value;
//adreess
document.getElementById('addressT').innerHTML=document.getElementById('AddressField').value;
//socail links
document.getElementById('FbT').href=document.getElementById('fb-field').value;
document.getElementById('InstaT').href=document.getElementById('insta-field').value;
document.getElementById('LinkT').href=document.getElementById('linkedin-field').value;


document.getElementById('ObjectT').innerHTML=document.getElementById('objective-field').value;

var wef=document.getElementsByClassName('wefield');

let str='';
for(let e of wef){
    str=str+`<li>${e.value}</li>`;
}
document.getElementById('weT').innerHTML=str;

let aqs=document.getElementsByClassName('eqfield');

let str2=''
for(let e of aqs){
    str2=str2+`<li>${e.value}</li>`
}
document.getElementById('AqT').innerHTML=str2;
document.getElementById('GNcv').style.display='none';
document.getElementById('cv-templete').style.display='block';

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