define(function (require) {
    var activity = require("sugar-web/activity/activity");

    // Manipulate the DOM only when it is ready.
    require(['domReady!'], function (doc) {

        // Initialize the activity.
        activity.setup();


     //add click listeners onto different physics experiments
  /*    var myButton = document.getElementById("ping-pong");
         myButton.addEventListener('click',function(){
             //console.log(myButton.id);
             alert("he");
         });
*/





    });

});
