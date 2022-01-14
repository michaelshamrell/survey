$(document).ready(function () {
  $("form#survey").submit(function (event) {
    const name = parseInt($("input#name").val());
    const age = parseInt($("input#age").val());
    const food = $("select#food").val();
    const tvShow = $("select#tvShow").val();
    const hobby = $("select#hobby").val();
    let total = 0

    if (age >= 21){
      total += 1
    } else { 
      total += 2
    };

    if (food === 'burrito') {
      total += 1;
    }else  {
      total += 2
    };
    if (tvShow === 'squidGames') {
      total += 1
    }else { 
      total += 2
    };
    if (hobby === 'workingOut') {
      total += 1
    }else  {
      total += 2
    };
  

      if (total = 5) {
        $("c#").show();
      }
      else if (total = 6) {
        $("javaScript").show();
      }
      else if (total = 7) {
        $("ruby").show();
      }
      else {
        $("none").show();
      }

      event.preventDefault();


    });
  });
