<html>
<head>


<title>Document</title>

</head>

<body>
<input id=demoInput type=number min=100 max=110>
<button onclick="increment()">+</button>
<button onclick="decrement()">-</button>
<script>
   function increment() 
   {
    document.getElementById('demoInput').stepUp();
   }
    function decrement()
    {
      document.getElementById('demoInput').stepDown();
    }
</script>
</body>
</html>