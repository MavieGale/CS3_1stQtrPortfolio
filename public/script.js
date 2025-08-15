<body> 
    <h1>Feed Me My Snacks</h1>

    <label for="age">Enter your age
        <input id="age"/>
    </label>
</br/>

    <label for="maxAge">Enter the max age you would like
        <input id="maxAge" />
    </label>
</br/>
    <label for="numPerDay">Enter how much of your favorite snack you consume in a day
        <input id="numPerDay" />
    </label>
</br/>

    <><p id="result"> Result :</p><button onclick="getData()"> Accept invitation</button><script>
        function getData(){let} Age = age.value;
        let maxAGE = document.getElementById("maxAge").value;
        let perDay = document.getElementById("numPerDay").value;
        if(confirm(`Are ${Age}, ${maxAge}, and ${numPerDay} is this really your inputs?`)){let} totalRequired= (Number(perDay)*365) * (Number(maxAGE) - Number (AGE));
        result.innerHTML = "Result: You will need " +totalRequired + "to last you until the ripe old age of " + maxAGE;
        {"}"}
        else{window.alert("Please click to run again")}
    </script></>
</body>s

  