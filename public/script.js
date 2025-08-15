function getData() {
    let perDay = document.getElementById("numPerDay").value;
    let age = window.prompt("Enter your current age:", "14");
    let maxAge = window.prompt("Enter your max age:", "100");
  
    let sure = window.confirm(`Are you sure about these numbers?\nAge: ${age}\nMax Age: ${maxAge}\nSnacks per day: ${perDay}`);
  
    if (sure) {
      let totalRequired = Number(perDay) * 365 * (Number(maxAge) - Number(age));
      document.getElementById("result").innerHTML = `Result: You will need ${totalRequired} snacks to last you until the ripe old age of ${maxAge}.`;
    } else {
      window.alert("Please click the button again and re-enter your values.");
    }
  }
  