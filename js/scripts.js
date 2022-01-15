$(document).ready(function() {
  $("form#survey").submit(function(event) {
    const nameInput = $("input#name").val();
    const age = parseInt($("input#age").val());
    const food= $("select#food").val();
    const tvShow = $("select#tvShow").val();
    const hobby = $("select#hobby").val();
    let total = 0

    $(".name").append(nameInput);

    if (age >= 21){
      total += 1
    } else {
      total += 2
    }; 
    
    if (food === 'burrito') {
      total += 1
    }else {
      total += 2
    };
    if (tvShow === 'squidGames') {
      total += 1
    }else {
      total += 2
    };
    if (hobby === 'workingOut') {
      total += 1
    }else {
      total += 2
    };

    if (total >=7) {
      $("#cSharp").show();
      $(".roll").show();
      $("#javaScript").hide();
      $("#ruby").hide();
    }else if (total >=6) {
      $(".roll").show();
      $("#ruby").show();
      $("#javaScript").hide();
      $("#cSharp").hide();
    } else if (total >=4){
      $("#javaScript").show();
      $(".roll").show();
      $("#cSharp").hide();
      $("#ruby").hide();
    }

    event.preventDefault();

  });
});