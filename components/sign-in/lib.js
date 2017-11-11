
/*
problem: modal would on same background as main page -> dark and can't be clicking;
reason: because somewhere in my css has relative or fixed position for Nav or the menu.
I can move the modal out of the div where it contain that css setting, or remove
the fixed and relative css, but that will messup the page display.

Best solution:
Use custom js to change the way it appear to body:
The below tell the browser, show the modal was it is belong to the <body> and
not other <div>

$('#myModal').appendTo("body").modal('show');
Or, if you launch modal using buttons, drop the .modal('show'); and just do:

$('#myModal').appendTo("body")
This will keep all normal functionality, allowing you to show the modal using a button.
*/

$(document).ready(function(){
  $('#signin1').appendTo("body")
})