function calculate() {
    var height = parseFloat(document.getElementById('height').value); 
    var weight = parseFloat(document.getElementById('weight').value);
if (height > 10) {
        height = height / 100; //centimeter to meter conversion
    }

    var bmi = weight / (height * height);
    var body = "";

    if (bmi > 16 && bmi <= 18.5) body = "Underweight";
    else if (bmi > 18.5 && bmi <= 25) body = "Normal";
    else if (bmi > 25 && bmi <= 30) body = "Overweight";
    else body = "Obese";

    document.getElementById('displayBMI').innerText = bmi.toFixed(2);
    document.getElementById('body').innerText = body;
}
