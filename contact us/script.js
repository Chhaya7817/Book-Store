import {  getDatabase,   set,  ref} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";

var roomV, nameV, checkinV, checkoutV;
const db = getDatabase();

var n = document.getElementById("roomNo");
// var em = document.getElementById("login");
var me = document.getElementById("checkout");

function input(event) {
  
  event.preventDefault();
  if (sessionStorage.getItem("user") != null) {
    // user = JSON.parse(sessionStorage.getItem("user"));
    insertData(event);
  }
  else{
    this.reset();
    alert("Please Login to to share your reviews");
    return;
  }
}
function insertData(event){
  event.preventDefault();
  readFormData();
  set(ref(db,"Message/"+n),{
      Name:n,
      // Email:em,
      Message:me
  }).then(()=>{
      alert("Message Sent Successfully");
      this.reset();
  }).catch((error));
}

function readFormData(e) {
  n= n.value;
  // em = em.value;
  me = me.value;
console.log(n+" "+" "+me);

}

document.getElementById('ff').addEventListener("submit",input);


