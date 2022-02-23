const plans = [
    {
      plan_pic_path: "media/plan-free.svg",
      type: "Free Plan",
      price:"Free",
    },
    {
      plan_pic_path: "media/plan-standard.svg",
      type: "Standart Plan",
      features: "Unlimited Bandwith Encrypted Connection No Traffic Logs Works on All Devices Works Anywhere",
      price:"9$<span> / mo</span>",
    },
    {
      plan_pic_path: "media/plan-premium.svg",
      type: "Premium Plan",
      features: "Unlimited Bandwith Encrypted Connection No Traffic Logs Works on All Devices Works Anywhere Gets New Features",
      price:"12$<span> / mo</span>",
    },
]

let planItems = document.querySelector(".plans-list")
  
plans.forEach((plan) => {
let planItem = document.createElement("div")
  planItem.className = `plan`
  planItem.innerHTML = `
  <div class="plan-img-ctr">
    <img src="${plan.plan_pic_path}" />
  </div>
  <p class="plan-type">${plan.type}</p>
    <ul class="plan-features">
  <li class="plan-feature-item">
    <span><img src="media/plan-check.svg" /></span>Unlimited
    Bandwith
  </li>
  <li class="plan-feature-item">
    <span><img src="media/plan-check.svg" /></span>Encrypted
    Connection
  </li>
  <li class="plan-feature-item">
    <span><img src="media/plan-check.svg" /></span>No Traffic
    Logs
  </li>
  <li class="plan-feature-item">
    <span><img src="media/plan-check.svg" /></span>Works on All
    Devices
  </li>
</ul>
<div class="plan-select">
  <p class="plan-price">${plan.price}</p>
  <button class="btn-light plan-select-btn">Select</button>
</div>`

planItems.appendChild(planItem)
})

var plansList = document.getElementById("plans-list"); 
var btns = plansList.getElementsByClassName("plan"); 
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("selected");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" selected", "");
    }
    this.className += " selected";
  });
}