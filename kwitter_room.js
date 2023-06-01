
var firebaseConfig = {
      apiKey: "AIzaSyArBMSmHTgbejfsgoFnrq5AWSgCFofFLWo",
      authDomain: "chat4u-2f1ea.firebaseapp.com",
      databaseURL: "https://chat4u-2f1ea-default-rtdb.firebaseio.com",
      projectId: "chat4u-2f1ea",
      storageBucket: "chat4u-2f1ea.appspot.com",
      messagingSenderId: "435927769231",
      appId: "1:435927769231:web:132d2ea28d970a882750fa",
      measurementId: "G-YTZPBQ1V6P"
    };
    
    firebase.initializeApp(firebaseConfig);
     username = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML = "Welcome " + username + "!";

     function addRoom()
     {
      Room_names = document.getElementById("roomname").value;
       
      firebase.database().ref("/").child(Room_names).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name" , Room_names);
      window.location = "kwitter_page.html";
     }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
            row = "<div class='room_name' id="+Room_names+" onclick='changeroom(this.id)'>"+ Room_names +"</div><hr>";
            document.getElementById("output").innerHTML += row;
      
      });});}

getData();
function changeroom(name)
{
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
