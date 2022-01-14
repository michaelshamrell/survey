$(document).ready(function() {
  $("form#survey").submit(function(event) {
    const name = parseInt($("input#name").val());
    const age = parseInt($("input#age").val());
    const food = $("select#food").val();
    const tvShow = $("select#tvShow").val();
    const hobby = $("select#hobby").val();
    let total = 0

    if (age >= 21){
      total += 1
    } else { 
      total += 0
    };

    
    }
  }
}