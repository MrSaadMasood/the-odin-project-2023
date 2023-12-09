# Memory Card Game

Welcome to the Memory Card Game project! This web application is a captivating and interactive memory game where players can challenge themselves to match pairs of cards. The game is designed with different difficulty levels and incorporates an engaging user interface to provide an enjoyable experience.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [How to Play](#how-to-play)
- [Project Structure](#project-structure)
- [Sound Effects](#sound-effects)
- [Responsive Design](#responsive-design)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Memory Card Game is a React-based web application that aims to entertain users with a classic memory challenge. The game includes distinctive features such as varying difficulty modes, level progression, and an immersive audio experience. Whether you're a casual gamer or a memory enthusiast, this project offers an engaging platform to test and enhance your memory skills.

## Features

1. **Multiple Difficulty Modes:**
   - Choose between Easy and Hard difficulty modes to tailor the challenge to your preference.

2. **Level Progression:**
   - Progress through different levels, each presenting a more challenging set of cards.

3. **Sound Effects:**
   - Enjoy immersive sound effects for card flips, level-ups, wins, and losses, enhancing the gaming experience.

4. **Responsive Design:**
   - The application is designed to provide a seamless experience across various devices and screen sizes.

## Technologies Used

The Memory Card Game project utilizes the following technologies:

- **React:** A JavaScript library for building user interfaces.
- **HTML:** The standard markup language for creating web pages.
- **CSS:** Stylesheets for enhancing the visual presentation of the application.
- **JavaScript:** The programming language used to implement game logic and interactions.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the necessary dependencies.
4. Run `npm start` to start the development server.  
5. Open your browser and visit `http://localhost:3000` to begin playing the game.  
6. One thing to keep in mind, when running the development mode in vite and using the strict mode, either use the normal mode or if you want to use the strict mode add the below code in the Card.jsx component.
    ```
    const initalRender = useRef(true)

    useEffect(()=>{
        <!-- put this code inside the useEffect hook 
        responsible for the data fetching -->
        if(initalRender){
            intialRender.current = false;
            return
        }
        // reset of the code is same
    })
    ```
7. this is because the strict mode forces the componenets to render two times and it will cause the data from APIs to be fetched again on every render thus causing errors.
## How to Play

- Choose a difficulty mode (Easy or Hard) to initiate the game.
- Click on cards to flip them and uncover hidden images.
- Match pairs of cards with identical images to score points.
- Complete levels by successfully matching all pairs within the given attempts.
- Keep an eye on the remaining attempts, and level up as you progress through the game.

## Project Structure

The project follows a modular structure, with components such as `SelectMode`, `Logo`, `GameOver`, and `GamePlayInterface` organized for clarity and maintainability.

## Sound Effects

The game incorporates sound effects for an immersive experience. Sounds include card flips, level-up celebrations, victory cheers, and defeat notifications.

## Responsive Design

The application is designed responsively, ensuring an optimal user experience on various devices, including desktops, tablets, and smartphones.

## Contributing

If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push to your fork and submit a pull request.


## Contact <a name="contact"></a>

For any inquiries or support, please contact the project owner:

- **Saad Masood**
- [LinkedIn](https://www.linkedin.com/in/saad-masood-8b100125b/)
- [GitHub](https://github.com/MrSaadMasood)
- [email](mrsaadmasood1@gmail.com)

---

**Live Demo: [Your Live Link Here]** (Replace with your live deployment link)

Enjoy the Memory Card Game! If you have any questions or feedback, feel free to reach out.

**Note:** Make sure to replace "[Your Live Link Here]" with the actual live link once you deploy the application.
