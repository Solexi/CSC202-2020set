//alert("Hello World");
<!DOCTYPE html>
<html>
<head>
  <title>Hello, HTML!</title>
  <script>
    function countToTen()
    {
      var count = 0;
      while (count < 10) 
      {
        count++;
        document.getElementById("theCount").innerHTML += 
           count + "<br>";
      }
    }
      Code-Line Before Listing Code 
  </script>
</head>
<body onload="countToTen();">
 <h1>Let's Count to 10 with JavaScript!</h1>
 <p id="theCount"></p>
</body>
</html>