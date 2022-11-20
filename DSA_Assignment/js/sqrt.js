		function squareroot()
		{
			var a = Number(document.getElementById("num").value);
			var squarevalue=Math.sqrt(a);
			document.getElementById("result").value=squarevalue.toFixed(3);
		}
