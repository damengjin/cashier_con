
userid = localStorage.getItem("id");
earn_trans2 = parseFloat(parseFloat(localStorage.getItem('earn2')).toFixed(2));


document.getElementById("stage2").innerHTML = "The Stage 3 Cashier Earning is: S$<b>" + earn_trans2 + "</b>";


function onSubmit () {
  window.location = 'Wait_page_scheme.html';
}