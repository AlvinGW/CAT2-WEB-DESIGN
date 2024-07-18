function calculatePay() {
    var name = document.getElementById("name").value;
    var hoursWorked = document.getElementById("hoursWorked").value;
    var ratePerHour = document.getElementById("ratePerHour").value;

    if (name === "" || hoursWorked === "" || ratePerHour === "") {
        alert("Please fill all fields");
        return;
    }

    hoursWorked = parseFloat(hoursWorked);
    ratePerHour = parseFloat(ratePerHour);

    var basicPay = hoursWorked * ratePerHour;
    var tax = 0;

    if (basicPay > 50000) {
        tax = basicPay * 0.2;
    } else if (basicPay >= 20000) {
        tax = basicPay * 0.1;
    }

    var netPay = basicPay - tax;

    var result = `
        <p><strong>Employee Name:</strong> ${name}</p>
        <p><strong>Basic Pay:</strong> ${basicPay.toFixed(2)}</p>
        <p><strong>Tax:</strong> ${tax.toFixed(2)}</p>
        <p><strong>Net Pay:</strong> ${netPay.toFixed(2)}</p>
    `;

    document.getElementById("result").innerHTML = result;
}
