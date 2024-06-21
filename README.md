# API Hackathon Project


## Overview

This project was developed during a 6-hour hackathon where the challenge was to create a JavaScript application that connects to various APIs. We built a **Trivia Quiz** that fetches questions from a trivia API and presents them to the user with a dynamic background from Unsplash.

## Features

- **Trivia Questions**: Fetches and displays trivia questions from a trivia API.
- **Dynamic Background**: Uses Unsplash API to display a background image.
- **User Interface**: Styled with custom CSS for an interactive experience.
- **Logic Improvements**: Refined the reset and question change logic for smooth transitions between questions.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- **Node.js**: Ensure Node.js is installed on your system.
- **NPM**: Node Package Manager comes with Node.js.

### Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/ananichoumchoum/API-hackathon.git
    ```
2. **Navigate to the Project Directory**:
    ```bash
    cd API-hackathon
    ```
3. **Install Dependencies**:
    ```bash
    npm install
    ```

### Usage

**Run the Application**:
    ```
    npm start
    ```

## API Integration

### Trivia API

- **Endpoint**: `https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple`
- **Purpose**: Provides trivia questions for the quiz.

### Unsplash API

- **Endpoint**: `https://api.unsplash.com/photos/random?client_id=YOUR_API_KEY`
- **Purpose**: Fetches a random image for dynamic background changes.

## Contributions

### My Contributions

- **CSS Design**: Led the styling of the application to ensure a responsive and user-friendly interface.
- **script.js**: Fully coded the API connection to the unspash background image.
- **Logic Refinement**: Improved the reset and question change logic for seamless user experience.

### Team Contributions

- **Base Logic**: Developed the core functionality of the trivia quiz, including API integration and question handling.

## Features and Highlights

- **Dynamic Background**: The trivia quiz features a dynamic background image fetched from Unsplash to enhance visual appeal.
- **Trivia Questions**: The application pulls trivia questions from an API and presents them to users, making it a fun and interactive quiz.

## Future Enhancements

- **Multiple Categories**: Include trivia questions from multiple categories to make the quiz more diverse.
- **Improved User Interface**: Enhance the UI with animations and additional visual feedback.

