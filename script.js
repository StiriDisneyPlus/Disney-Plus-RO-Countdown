var countDownDate = new Date("June 14, 2022 10:00:00").getTime();

// Actualizează numărătoarea inversă în fiecare secundă.
var x = setInterval(function() {

  // Găsește data și ora zilei de astăzi.
  var now = new Date().getTime();

  // Găsește diferența dintre acum și countDownDate
  var distance = countDownDate - now;

  // Calculează timpul pentru zile, ore, minute și secunde.
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Arată rezultatul în elementele care au ID-urile "days", "hours","minutes", "seconds".
  document.getElementById('days').innerHTML = days;
      document.getElementById('hours').innerHTML = hours;

  document.getElementById('minutes').innerHTML = minutes;

  document.getElementById('seconds').innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-box").innerHTML = '<div style="text-align:center; color: white"><font style="font-family: \'Lexend Mega\', sans-serif"> Disney+ este acum disponibil în România. <br> <br> <a href="https://www.disneyplus.com/">Abonați-vă acum.</a> </font></div>';
  }
}, 1000);
