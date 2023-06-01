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
    roomname = localStorage.getItem("room_name");

    function send()
    {
      msg = document.getElementById("msg").value;
      firebase.database().ref(roomname).push({
      name:username,
      message:msg,
      like:0
       });
       document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
     name = message_data['name'];
     message = message_data['message'];
     like = message_data['like'];
     nametag = "<h4>" + name +"<img class='user_tick' src='tick.png'></h4>";
     messagetag = "<h4 class='message_h4'>"+ message +"</h4>";
     likebutton = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
     span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";

     row = nametag +messagetag + likebutton +span_with_tag;
     document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id) { console.log("clicked on like button - " + message_id);
 button_id = message_id;
  likes = document.getElementById(button_id).value; updated_likes = Number(likes) + 1;
 console.log(updated_likes); 
 
 firebase.database().ref(roomname).child(message_id).update({ like : updated_likes }); }

 function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}
