import {
  getDatabase,
  get,
  set,
  update,
  remove,
  child,
  ref,
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";

var roomV, nameV, checkinV, checkoutV;
const db = getDatabase();

var RoomNo = document.getElementById("roomNo");
var Checkin = document.getElementById("checkin");
var Checkout = document.getElementById("checkout");

function insertData(e) {
  e.preventDefault();
  readFormData();
  const dbref = ref(db);
  get(child(dbref, "data/" + roomV))
    .then((snapshot) => {
      if (snapshot.exists()) {
        var check = snapshot.val().ROOM_NO;
        if (check == roomV) {
          alert("Room already Booked");
        }
      } else {
        if(roomV==""||checkinV=="")
          {
            alert("Some Fiels are empty")
          }
          
          else{
        set(ref(db, "data/" + roomV), {
          ROOM_NO: roomV,
          CHECK_IN: checkinV,
          CHECK_OUT: checkoutV,
          
        })
          .then(() => {
            clearFormData();

          })
          .catch((error) => {
            alert("Unsuccessfull"), error;
          });
        }
      }
    })
    .catch((error) => {
      alert("Unsuccessful "), error;
    });
  //Code to send data to firebase

}
function getData(e) {
  e.preventDefault();
  readFormData();
  //Code to read the data from firebase
  const dbref = ref(db);
  get(child(dbref, "data/" + roomV))
    .then((snapshot) => {
      if (snapshot.exists()) {
        RoomNo.value = snapshot.val().ROOM_NO;
        TravellerName.value = snapshot.val().NAME;
        Checkin.value = snapshot.val().CHECK_IN;
        Checkout.value = snapshot.val().CHECK_OUT;
      } else {
        alert("No Data Found");
      }
    })
    .catch((error) => {
      alert("Unsuccessful "), error;
    });
}
/*
function deleteData(e) {
  e.preventDefault();
  readFormData();
//Delete From firebase  
if(roomV=="")
{
    alert("Fields cannot be empty")
}
else
{if(confirm("Are you sure you want to delete ?"))
{
  remove(ref(db, "data/" + roomV), {
    
  })
    .then(() => {
      alert("Room Data Deleted successfully");
    })
    .catch((error) => {
      alert("Unsuccessfull", error);
    });
  }}
  clearFormData();
}
*/
function readFormData(e) {
  roomV = RoomNo.value;
  checkinV = Checkin.value;
  checkoutV = Checkout.value;

  console.log(roomV, checkinV, checkoutV);
}

function clearFormData() {
  RoomNo.value = "";
  Checkin.value = "";
  Checkout.value = "";
}
document.querySelectorAll(".btn")[1].onclick = insertData;
// document.querySelectorAll(".btn")[1].onclick = deleteData;
