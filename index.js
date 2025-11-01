function myFunction() {
  var Count = parseFloat(document.getElementById("B").value) || 0;
  var LyCM = parseFloat(document.getElementById("F").value || 0);
  var Denier = parseFloat(document.getElementById("C").value || 0);
  var Needle = parseFloat(document.getElementById("D").value) || 0;
  var Sl = parseFloat(document.getElementById("E").value) || 0;

  var Ten = Count * LyCM * Denier * 10 * 100;
  var Nine = 5315 * Needle * Sl;
  var final = Ten / Nine;

  document.getElementById("demo").textContent = final + " " + "%";
}
