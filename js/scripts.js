$(document).ready(function() {
  $("form#survey").submit(function(event) {
    const age = parseInt($("input#age").val());
    const food= $("select#food").val();
    const tvShow = $("select#tvShow").val();
    const hobby = $("select#hobby").val();
    let total = 0

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
      $("#javaScript").hide();
      $("#ruby").hide();
    }else if (total >=6) {
      $("#ruby").show();
      $("#javaScript").hide();
      $("#cSharp").hide();
    } else if (total >=4){
      $("#javaScript").show();
      $("#cSharp").hide();
      $("#ruby").hide();
    }

    event.preventDefault();

  });
});