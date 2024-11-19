const startButton = document.getElementById("start-button");
const paragraphElement = document.getElementById("paragraph");
const typingArea = document.getElementById("typing-area");
const timerElement = document.getElementById("timer");
const wpmElement = document.getElementById("wpm");
const accuracyElement = document.getElementById("accuracy");

let timer = 0;
let interval;
let isTestStarted = false;
let correctTyped = 0;
let totalTyped = 0;
let startTime;
let paragraphText = "";

// Fetch a random paragraph using a REST API
async function fetchParagraph() {
    try {
        const response = await fetch("https://baconipsum.com/api/?type=all-meat&paras=1&format=text");
        paragraphText = await response.text();
        paragraphElement.textContent = paragraphText;
    } catch (error) {
        console.error("Error fetching paragraph:", error);
        paragraphElement.textContent = "Error loading text. Please try again.";
    }
}

// Start or reset the typing test
function startTest() {
    if (!isTestStarted) {
        isTestStarted = true;
        startButton.textContent = "Restart Test";
        typingArea.disabled = false;
        typingArea.value = "";
        typingArea.focus();
        fetchParagraph();  // Fetch paragraph when test starts
        correctTyped = 0;
        totalTyped = 0;
        timer = 0;
        startTime = Date.now();
        interval = setInterval(updateTimer, 1000);
    } else {
        resetTest();
    }
}

// Update the timer
function updateTimer() {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    timerElement.textContent = elapsed;
    timer = elapsed;

    // Stop the test after 60 seconds
    if (timer >= 60) {
        clearInterval(interval);
        typingArea.disabled = true;
        calculateResults();
    }
}

// Calculate Words Per Minute (WPM) and Accuracy
function calculateResults() {
    const typedText = typingArea.value;
    const words = typedText.split(/\s+/).filter(Boolean).length;
    const correctWords = typedText.split(/\s+/).filter((word, index) => word === paragraphText.split(/\s+/)[index]).length;
    
    const accuracy = Math.floor((correctTyped / totalTyped) * 100);
    const wpm = Math.floor((words / timer) * 60);

    wpmElement.textContent = wpm;
    accuracyElement.textContent = accuracy + "%";
}

// Compare the user's input with the paragraph to check accuracy
typingArea.addEventListener("input", function () {
    const typedText = typingArea.value;
    totalTyped = typedText.length;

    // Check how many characters are correct
    correctTyped = typedText.split("").filter((char, index) => char === paragraphText[index]).length;

    calculateResults();
});

// Reset the test to start over
function resetTest() {
    clearInterval(interval);
    isTestStarted = false;
    startButton.textContent = "Start Test";
    typingArea.disabled = true;
    typingArea.value = "";
    timerElement.textContent = "0";
    wpmElement.textContent = "0";
    accuracyElement.textContent = "100%";
}

startButton.addEventListener("click", startTest);
