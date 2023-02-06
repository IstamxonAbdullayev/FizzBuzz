var elForm = document.querySelector(".js-form-fizzbuzz");
var elInput = document.querySelector(".js-input-fizzbuzz");
var elAlert = document.querySelector(".js-result-fizzbuzz");



elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
  var inputValue = elInput.value;
  var newStr = "";
  if (inputValue % 3 == 0) {
    newStr += "Fizz";
  };
  if (inputValue % 5 == 0) {
    newStr += "Buzz";
  };
  elAlert.textContent = newStr || `${inputValue} 3 ga ham 5 ga ham bo'linmaydi`;

  elInput.value = "";

})
