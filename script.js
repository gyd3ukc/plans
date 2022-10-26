const btn = document.querySelector("#btn");
const mounthlyBtn = document.querySelector("[mounthly]");
const yearlyBtn = document.querySelector("[yearly]");

const started = document.querySelector("[started]");
const professional = document.querySelector("[professional]");
const company = document.querySelector("[company]");

const pattern = `$<span class="text-[17px] font-medium">/month</span>`;

const plans = {
  started: {
    mounthly: "19",
    yearly: "12",
  },
  professional: {
    mounthly: "54",
    yearly: "36",
  },
  company: {
    mounthly: "89",
    yearly: "56",
  },
};

mounthlyBtn.addEventListener("click", () => {
  btn.style.left = "0";
  listen();
});

yearlyBtn.addEventListener("click", () => {
  btn.style.left = "110px";
  listen();
});

const listen = () => {
  if (btn.style.left == "110px") {
    mounthlyBtn.style.color = "#3B3472";
    yearlyBtn.style.color = "white";
    started.innerHTML = plans.started.yearly + pattern;
    professional.innerHTML = plans.professional.yearly + pattern;
    company.innerHTML = plans.company.yearly + pattern;
  } else {
    mounthlyBtn.style.color = "white";
    yearlyBtn.style.color = "#3B3472";
    started.innerHTML = plans.started.mounthly + pattern;
    professional.innerHTML = plans.professional.mounthly + pattern;
    company.innerHTML = plans.company.mounthly + pattern;
  }
};

listen();
console.log(btn.style.left);
