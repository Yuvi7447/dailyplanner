$(document).ready(function(){
   $('#user_registration_form').on('submit',function(e){
         addUser(e);
   });

   $('#login_form').on('submit', function(e){
         loginUser(e);
   });


   function loginUser(e){
         var email = $('#email').val();
         var pass = $('#pass').val();

         var userList = JSON.parse(localStorage.getItem('users'));
         if (userList == null){
            e.preventDefault();
            alert("Register yourself to login.");
            location.reload('register.html');
         }

         for (var i = 0; i < userList.length; i++) {
            if (userList[i].email == email && userList[i].password == pass) {
               return true;
            }
            else if (userList[i].email == email && userList[i].password != pass) {
               e.preventDefault();
               alert("Password doesn't Match.");
               return false;

            }
            else if (userList[i].email != email) {
               e.preventDefault();
               alert("User does not exist. Please register to log in.");
               return false;
            }
            else{
               e.preventDefault();
               alert("Invalid credentials.");
               return false;
            }
         }
   }

   function addUser(e){
      // A unique ID
      var newDate = new Date();
      id = newDate.getTime();

      var email = $('#email').val();
      var password = $('#pass').val();
      var fname = $('#fname').val();
      var lname = $('#lname').val();
      var bdate = $('#date').val();

      var users = JSON.parse(localStorage.getItem('users'));
      if (users == null) {
         users = [];
      }
   for (var i = 0; i < users.length; i++) {
      if (users[i].id === id || users[i].email === email) {
         alert('User already exists.');
         e.preventDefault();
         location.reload();
      }
   }

   var new_user = {
      "id" : id,
      "first_name" : fname,
      "last_name": lname,
      "email" : email,
      "password" : password,
      "birthdate" : bdate
      }

      users.push(new_user);
      localStorage.setItem("users", JSON.stringify(users));
   }
   // alert("User "+fname+" "+lname+" successfully registered.")
});



function validatePassword(){
   var password = document.getElementById("pass");
   var confirm_password = document.getElementById("cpass");

  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}
