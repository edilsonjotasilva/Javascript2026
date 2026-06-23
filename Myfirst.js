<!DOCTYPE html>
<html>
<body>
<h1>JavaScript HTML Events</h1>
<h2>Event Handlers</h2>

<button id="myButton">The time is?</button>

<p id="demo"></p>


<script>
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

document.getElementById("myButton").addEventListener("click", displayDate);
</script>

</body>
</html>