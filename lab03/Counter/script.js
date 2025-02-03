function counter(change) {
    var input = document.getElementById('counter');
    var currentValue = parseInt(input.value, 10);
    currentValue += change;
    if (currentValue < 0) currentValue = 0; // Prevents the counter from going negative
    input.value = currentValue;
}
