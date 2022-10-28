const btn = document.querySelector("#btn");
const mounthlyBtn = document.querySelector("[mounthly]");
const yearlyBtn = document.querySelector("[yearly]");

const started = document.querySelector("[started]");
const professional = document.querySelector("[professional]");
const company = document.querySelector("[company]");

const mounthly = "mounthly";
const yearly = "yearly";

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

const plan = (plan) => {
  if (plan === "yearly") {
    started.innerHTML = plans.started[plan] + pattern;
    professional.innerHTML = plans.professional[plan] + pattern;
    company.innerHTML = plans.company[plan] + pattern;
  } else if (plan === "mounthly") {
    started.innerHTML = plans.started[plan] + pattern;
    professional.innerHTML = plans.professional[plan] + pattern;
    company.innerHTML = plans.company[plan] + pattern;
  }
};

const listen = () => {
  if (btn.style.left == "110px") {
    mounthlyBtn.style.color = "#3B3472";
    yearlyBtn.style.color = "white";
    plan(yearly);
  } else {
    mounthlyBtn.style.color = "white";
    yearlyBtn.style.color = "#3B3472";
    plan(mounthly);
  }
};

listen();
