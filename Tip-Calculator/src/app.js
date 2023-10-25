// globals
const id = (id) => document.getElementById(id);

window.onload = () => {
  main();
};

function main() {
  const billAmount = id("bill-amount");
  const peoples = id("how-many-people");
  const tips = id("tip");
  const calculate = id("calculate");

  calculate.addEventListener("click", function (e) {
    if (
      billAmount.value &&
      tips.value &&
      peoples.value &&
      !isNaN(billAmount.value) &&
      !isNaN(tips.value) &&
      !isNaN(peoples.value)
    ) {
      tipCalculation(billAmount.value, peoples.value, tips.value);
    } else {
      alert("Please enter the value");
    }
  });
}

function tipCalculation(amount, people, tip) {
  const displayAmount = id("display-amount");
  const price = id("price");
  const total = (tip / 100) * amount;
  const eachPerson = (total / people).toFixed(2);
  price.innerText = `$${eachPerson}`;

  const displayAmountHeight = displayAmount.getBoundingClientRect().height;

  if (displayAmountHeight === 0) {
    displayAmount.style.height = 131 + "px";
  }
}
