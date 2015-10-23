  
  
  $(document).on('ready page:load',function(){ 
    $('#checknow').change(function () {
    if ($('#checknow').is(':checked'))
      $(".column").show();
    else
      $('.column').hide();
    });
  });

  
  function moveRight() {
      var z   = document.getElementById('list1');
      var len = z.getElementsByTagName("LI").length;
      var hom = new Array();
      for (var j=0;j<len;j++)
      {
         hom.push(z.getElementsByTagName("LI")[j]);
      }

       for ( var i=0; i<len; i++ )
       {
         var check = hom[i].getElementsByTagName('input')[0];
         if(check.checked)
         {
           check.checked = false;
          document.getElementById('list2').appendChild(hom[i]); 
         }
       }
    };

    function moveLeft(){
      var z   = document.getElementById('list2')
      var len = z.getElementsByTagName("LI").length;

      var hom = new Array();
      for (var j=0;j<len;j++)
      {
         hom.push(z.getElementsByTagName("LI")[j]);
      }
      for (var i=0;i<len;i++)
       {
         var check = hom[i].getElementsByTagName('input')[0];
         if(check.checked)
         {
           check.checked = false;
           document.getElementById('list1').appendChild(hom[i]);
         }
       }
    };



  $(document).on('ready page:load',function() {
    $("#test").click(function() {
        z = document.getElementById('list1')
        len = z.getElementsByTagName("LI").length;
        hom = new Array();
        for ( i=0;i<len;i++)
        {
          hom.push(z.getElementsByTagName('span')[i].innerHTML)
        }

        y = document.getElementById('list2')
        l = y.getElementsByTagName("LI").length;
        home = new Array();
        for ( j=0;j<l;j++)
        {
          home.push(y.getElementsByTagName('span')[j].innerHTML)
        }
          if ($('#checknow').is(':checked'))
             ch = 1
          else
             ch = 0


        a = {}
        a["name"] = $("#user_name").val()
        a["email"] = $("#user_email").val()
        a["gender"] = $("#user_gender").val()
        a["Imovie"] = ch
        a["password"] = $("#user_password").val()
        a["conpassword"] = $("#user_cpassword").val()
        a["allmovies"] = hom
        a["mymovies"] = home
         // alert("hai")
       $.ajax({
        data: a,
        type: "POST",
        url: "/users",
        success: function(){
          window.location="http://localhost:3000";
        }
        });
     });
});


  $(document).on('ready page:load',function() {
    $("#tested").click(function() {
        z = document.getElementById('list1')
        len = z.getElementsByTagName("LI").length;
        hom = new Array();
        for ( i=0;i<len;i++)
        {
          hom.push(z.getElementsByTagName('span')[i].innerHTML)
        }
       
        y = document.getElementById('list2')
        l = y.getElementsByTagName("LI").length;
        home = new Array();
        for ( j=0;j<l;j++)
        {
          home.push(y.getElementsByTagName('span')[j].innerHTML)
        }

        u = document.getElementById( "userid" )
        user_id = u.getElementsByTagName('LI')[0].innerHTML;

        if ($('#checknow').is(':checked'))
             ch = 1
          else
             ch = 0

        b = {}
        b["name"] = $("#user_name").val()
        b["email"] = $("#user_email").val()
        b["gender"] = $("#user_gender").val()
        b["Imovie"] = ch
        b["allmovies"] = hom
        b["mymovies"] = home
        console.log(b);
       $.ajax({
        data: b,
        datatype: 'script',
        type: "PUT",
        url: "/users/"+user_id,
        success: function(){
          window.location="http://localhost:3000";
        }
        });
     });
});
