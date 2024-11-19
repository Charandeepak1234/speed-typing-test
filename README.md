# speed-typing-test
Certainly! Below is a **README.md** file for your **Speed Typing Test** project. This README will provide instructions for setting up, running, and understanding the code.

---

# Speed Typing Test

A simple and interactive typing test application built using HTML, CSS, JavaScript, and a public REST API to fetch random paragraphs for the user to type. This test measures the user's typing speed (WPM - Words Per Minute) and accuracy.

## Features

- Fetches a random paragraph from the **Bacon Ipsum API**.
- Tracks the time taken to type the paragraph.
- Calculates and displays:
  - Words per minute (WPM)
  - Typing accuracy
- Interactive and modern user interface with smooth animations.
- Fully responsive design for mobile and desktop devices.
- Timer runs for 60 seconds, and test results are shown after the time ends.

## Tech Stack

- **Frontend**:
  - HTML5
  - CSS3 (with Flexbox and Grid for layout)
  - JavaScript (for logic and interaction)
  
- **API**:
  - [Bacon Ipsum API](https://baconipsum.com/api/) (used to fetch random text)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/speed-typing-test.git
```

### 2. Set Up the Project

1. **Create a folder** to store the files (if not cloned from a repository):
   - `index.html`
   - `styles.css`
   - `script.js`

2. **Ensure all files are in the same directory** (for example, a folder named `typing-test`).

### 3. Open the Project in Your Browser

- Simply open the `index.html` file in your preferred web browser. You can double-click the file or open it from the browser’s "File" menu.

## Usage

1. **Start the Typing Test**: 
   - Click the **"Start Test"** button to begin. The paragraph will be fetched, and the timer will start.

2. **Typing**:
   - Start typing the text in the textarea that appears.
   - Your typing speed (WPM) and accuracy will be updated in real-time as you type.

3. **End of Test**:
   - The test will automatically stop after **60 seconds**, and the results will be shown:
     - **Words Per Minute (WPM)**
     - **Accuracy** (percentage of correctly typed characters)

4. **Restart the Test**:
   - After the test ends, you can click **"Restart Test"** to begin a new test with a fresh paragraph.

## File Descriptions

- **index.html**:
  - The main HTML structure of the typing test app, including the layout and the text input area.
  
- **styles.css**:
  - The CSS file that styles the page, adds animations, and handles the responsive design.
  
- **script.js**:
  - The JavaScript file that contains the logic for fetching a paragraph, starting and stopping the timer, calculating WPM and accuracy, and updating the UI.

## Customization

- **API Source**: 
  - Currently, the app uses the **Bacon Ipsum API** for generating random paragraphs. You can replace it with any other text API if you prefer.
  
- **Timer Duration**: 
  - The timer is currently set for **60 seconds**. You can adjust this by modifying the `if (timer >= 60)` condition in the `script.js` file.
  
- **Styling**: 
  - Modify the `styles.css` file to change the appearance of the page, such as colors, fonts, and layout.

## Example Screenshot

![Typing Test Screenshot](assets/typing-test-screenshot.png)

## Troubleshooting

- **API not loading**: If you encounter issues with the text not loading from the API, check your internet connection or try switching to a different API.
  
- **Text not updating**: Ensure that your browser allows JavaScript and that the page is fully loaded before clicking "Start Test."

## Credits

- **Bacon Ipsum API** for providing random text.
- **OpenAI** for helping with the code and providing additional resources.
- **Google Fonts**: Used for fonts like **Poppins** and **Roboto** for clean typography.

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

### How to Customize and Use the Project:
1. Clone or download the project.
2. Open `index.html` in any modern browser.
3. Customize the project as needed—whether it's changing the API, tweaking the design, or modifying the timer duration.

This README provides the basic information and setup guide for anyone to easily run the speed typing test app!
