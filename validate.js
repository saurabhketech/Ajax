$(document).ready(function(){
          $("#submit").click(function(evt) {
            evt.preventDefault();
            name_data =  $("#Name").val();            
            var name_len = name_data.length;
            email_data = $("#email").val();
            var email_len = email_data.length;
            message_data = $("#message").val();
            var message_len = message_data.length;
            var x = document.forms["form"]["email"].value;
            var atpos = x.indexOf("@");
            var dotpos = x.lastIndexOf(".");
              
          if(name_len < 1) {
               alert("PLEASE ENTER NAME");
               event.preventDefault();
                 }
          else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
               alert("PLEASE VALID ENTER EMAIL-ID");
               event.preventDefault();
                 }
          else if(message_len < 1) {
               alert("PLEASE ENTER MESSAGE YOU WANT");
               event.preventDefault();
                 }
          else {
               ajax_insert_data();
                 }

         function ajax_insert_data() {              
              var Name = $("#Name").val(); 
              var email = $("#email").val();
              var message = $("#message").val();
              var date = $("#date").val();

              $.ajax({
                url:'insert.php',
                type:'POST',
                data: {
                      "Name": Name,
                      "email": email,
                      "message": message,
                      "date": date                      
                      },
                dataType: "text",
     
            success:function(data) {
                alert("submitted");
                $("#form")[0].reset();
                      }
                 });
           evt.preventDefault();
               }
           });
       });