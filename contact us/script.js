import {  getDatabase,  get,  set,  update,  remove,  child,  ref} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";

var roomV, nameV, checkinV, checkoutV;
const db = getDatabase();

var n = document.getElementById("roomNo");
var em = document.getElementById("checkin");
var me = document.getElementById("checkout");

function insertData(event){
  event.preventDefault();
  readFormData();
  set(ref(db,"Message/"+n),{
      Name:n,
      Email:em,
      Message:me
  }).then(()=>{
      alert("Message Sent Successfully");
      this.reset();
  }).catch((error)=>alert("unsuccessful",error));
}

function readFormData(e) {
  n= n.value;
  em = em.value;
  me = me.value;
console.log(n+" "+em+" "+me);

}

document.getElementById('ff').addEventListener("submit",insertData);


