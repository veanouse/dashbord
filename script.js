  
//    $("#bell-notification").hide();
//    $("#message-notification").hide();

   
    
//     $(document).ready(function(){


//         $("#bell-icon").click(function(){

//             $("#bell-notification").toggle();


//         })
//         $("#message-icon").click(function(){

//             $("#message-notification").toggle();


//         })
//     })
  

$(document).ready(function(){

    
        $("#bell-icon").click(
            function(){
             $("#bell-notification").toggleClass("d-none")
            }  
         )
        
         
         $("#message-icon").click(
            function(){
             $("#message-notification").toggleClass("d-none")
            }  
         )
         $("#search-toggle").click(function(){
            $(".search-area").css("display" , "inline");
            $("#search-toggle").removeClass("d-md-inline")

            
         })
         $("#search-area-hide").click(function(){
            $(".search-area").css("display" , "none");
            $("#search-toggle").addClass("d-md-inline")


         })

         //hide and show toggle in nav right
         $("#sidebar-toggle-show").click(
            function(){
               $(this).hide();
               $("#sidebar-toggle-hide").show();
               $(".sidebar").hide();
            }
         )
         $("#sidebar-toggle-hide").click(
            function(){
               $(this).hide();
               $("#sidebar-toggle-show").show();
               $(".sidebar").show();
            }
         )
   
         //dastebandi-dropDown

         $("#angele-left-1").click(
            function(){
               $(this).hide();
               $("#angele-down-1").removeClass("d-none");
               $(".dasteha-drop-down").removeClass("d-none")
            }
         )
         $("#angele-down-1").click(
            function(){
               $(this).addClass("d-none")
               $("#angele-left-1").show();
               $(".dasteha-drop-down").addClass("d-none")
            }
         )
         //neveshteha-dropDown
         $("#angele-left-2").click(
            function(){
               $(this).hide();
               $("#angele-down-2").removeClass("d-none");
               $(".neveshteha-drop-down").removeClass("d-none")
            }
         )
         $("#angele-down-2").click(
            function(){
               $(this).addClass("d-none")
               $("#angele-left-2").show();
               $(".neveshteha-drop-down").addClass("d-none")
            }
         )

         //user-dropDown
          $("#angele-left-3").click(
            function(){
               $(this).hide();
               $("#angele-down-3").removeClass("d-none");
               $(".user-drop-down").removeClass("d-none")
            }
         )
         $("#angele-down-3").click(
            function(){
               $(this).addClass("d-none")
               $("#angele-left-3").show();
               $(".user-drop-down").addClass("d-none")
            }
         )
         //setup-dropDown
           $("#angele-left-4").click(
            function(){
               $(this).hide();
               $("#angele-down-4").removeClass("d-none");
               $(".setup-drop-down").removeClass("d-none")
            }
         )
         $("#angele-down-4").click(
            function(){
               $(this).addClass("d-none")
               $("#angele-left-4").show();
               $(".setup-drop-down").addClass("d-none")
            }
         )




         




    
}




    
 





)
        
        
        
