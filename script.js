
/* ==============================================
   Part 1: Variables & Conditionals
   ============================================== */
const ageInput = document.getElementById("ageInput");
const checkAgeBtn = document.getElementById("checkAgeBtn");
const ageResult = document.getElementById("ageResult");

checkAgeBtn.addEventListener("click", () => {
  let age = Number(ageInput.value);

  if (age >= 18) {
    ageResult.textContent = "✅ You are an adult.";
  } else if (age > 0) {
    ageResult.textContent = "👶 You are still a minor.";
  } else {
    ageResult.textContent = "⚠️ Please enter a valid age.";
  }
});

/* ==============================================
   Part 2: Functions
   ============================================== */
// Function to calculate sum of two numbers
function calculateSum(a, b) {
  return a + b;
}

// Function to display sum result
function showSum() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  const result = calculateSum(num1, num2);
  document.getElementById("sumResult").textContent = `Sum = ${result}`;
}

document.getElementById("sumBtn").addEventListener("click", showSum);

/* ==============================================
   Part 3: Loops
   ============================================== */
const listNumbersBtn = document.getElementById("listNumbersBtn");
const numberList = document.getElementById("numberList");

listNumbersBtn.addEventListener("click", () => {
  numberList.innerHTML = ""; // Clear before adding new list
  for (let i = 1; i <= 10; i++) {
    let li = document.createElement("li");
    li.textContent = `Number ${i}`;
    numberList.appendChild(li);
  }
});

/* ==============================================
   Part 4: DOM Manipulation
   ============================================== */
const changeTextBtn = document.getElementById("changeTextBtn");
const toggleColorBtn = document.getElementById("toggleColorBtn");
const addItemBtn = document.getElementById("addItemBtn");
const domText = document.getElementById("domText");
const dynamicList = document.getElementById("dynamicList");

// 1. Change text content
changeTextBtn.addEventListener("click", () => {
  domText.textContent = "🎉 The text has been changed dynamically!";
});

// 2. Toggle a CSS class
toggleColorBtn.addEventListener("click", () => {
  domText.classList.toggle("highlight");
});

// 3. Add new list item dynamically
let itemCount = 0;
addItemBtn.addEventListener("click", () => {
  itemCount++;
  const li = document.createElement("li");
  li.textContent = `Dynamic Item ${itemCount}`;
  dynamicList.appendChild(li);
});
