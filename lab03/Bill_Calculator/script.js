function changePeople(change) {
    var peopleInput = document.getElementById('people');
    var currentPeople = parseInt(peopleInput.value);
    currentPeople += change;
    if (currentPeople < 1) currentPeople = 1;
    peopleInput.value = currentPeople;
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculate').addEventListener('click', calculate);
    document.querySelectorAll('.change-people').forEach(button => {
        button.addEventListener('click', function() {
            changePeople(parseInt(this.getAttribute('data-change')));
        });
    });
});
function calculate(){
    var total =parseFloat(document.getElementById('totalBill').value);
    var tip=parseFloat(document.getElementById('tips').value);
    var people =parseInt(document.getElementById('people').value);

    var tipAmt=total*(tip/100);
    var tax= total*0.05;
    total=total+tipAmt+tax;
    var perPerson= total/people;

    document.getElementById('displayTotalBill').innerText=`$${total.toFixed(2)}`;
    document.getElementById('displayTips').innerText=`$${tipAmt.toFixed(2)}`;
    document.getElementById('displayTax').innerText=`$${tax.toFixed(2)}`;
    document.getElementById('totalPerPerson').innerText=`$${perPerson.toFixed(2)}`;
}