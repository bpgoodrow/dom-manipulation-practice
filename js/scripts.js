$(document).ready(function() {
  $("button#knockknock").click(function() {
  $("ul#responses").append("<li>Who's there?</li>");
    });

  $("button#nobody").click(function() {
    $("ul#responses").append("<li>Nobody, who?</li>");
    });

  $("button#silent").click(function() {
    $("ul#responses").append("<li>*laughter*</li>");
    });

  $("ul#responses").click(function() {
    $(this).remove();
    });

$("ul#responses").click(function() {
     $(this).remove();
      });

  $("ul#responses").click(function() {
        $(this).remove();
       });

  });