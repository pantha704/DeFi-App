import { dbank_backend as dbank } from "../../declarations/dbank_backend"
import { dbank_frontend as dbankf } from "../../declarations/dbank_frontend";
   
window.addEventListener("load", async() =>  {
  console.log("Finished loading");
  var currentAmount = Math.round(await dbank.checkBalance() * 100) / 100;
  document.body.getElementsByTagName("span").value.innerHTML = currentAmount;
  console.log(currentAmount);
});
   
document.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault();
  // console.log("Submit");

  var button = event.target.querySelector("#submit-btn");

  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);

  button.setAttribute("disabled", true);

  inputAmount ? await dbank.topUp(inputAmount) : null;

  outputAmount ? await dbank.withdraw(outputAmount) : null;

  var currentAmount = Math.round(await dbank.checkBalance() * 100) / 100;
  document.body.getElementsByTagName("span").value.innerHTML = currentAmount;
  
  document.getElementById("input-amount").value = "";
  document.getElementById("withdrawal-amount").value = "";
  button.removeAttribute("disabled");
})