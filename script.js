function calculateFutureValue() {
    const principal = parseFloat(document.getElementById('principal').value);
    const monthlyInvestment = parseFloat(document.getElementById('monthlyInvestment').value);
    const Rate = parseFloat(document.getElementById('rate').value) / 100;
    const years = parseInt(document.getElementById('years').value);

    if (
        isNaN(principal) || isNaN(monthlyInvestment) || isNaN(Rate) || isNaN(years) ||
        principal <= 0 || monthlyInvestment < 0 || Rate < 0 || years <= 0
    ) {
        document.getElementById('result').textContent = "Please enter valid input values.";
        return;
    }

    const months = years * 12;
    const monthlyRate = Rate / 12;

    let futureValue = principal * Math.pow(1 + monthlyRate, months);
    for (let i = 1; i <= months; i++) {
        futureValue += monthlyInvestment * Math.pow(1 + monthlyRate, months - i);
    }

    document.getElementById('result').textContent = `Future Value: $${futureValue.toFixed(2)}`;
}
