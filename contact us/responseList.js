import {
    getDatabase,
    get,
    set,
    child,
    ref,
  } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";
  
  const db = getDatabase();
  function getAllBookings() {
    const dbref= ref(db);
    get(child(dbref,"Message/"))
    .then((snapshot)=>{
        var rooms=[];
        snapshot.forEach(childSnapshot =>{
            rooms.push(childSnapshot.val());

        });
        console.log(rooms);
        DisplayData(rooms);
    });

  }

  // Reference
var stdNo = 0;
var tbody = document.getElementById("tbody");


  function DisplayData(roomsData)
  {
    stdNo = 0;
    tbody.innerHTML = "";
    roomsData.forEach((room) => {
      let tr = document.createElement("tr");
  
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");
      let td4 = document.createElement("td");
  
      td1.innerText = ++stdNo;
      td2.innerText = room.Name;
      td3.innerHTML=room.Email;

      td4.innerText = room.Message;
     
  
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tbody.append(tr);
    });



  }
window.onload=getAllBookings;