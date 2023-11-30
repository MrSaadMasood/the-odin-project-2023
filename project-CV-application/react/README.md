# Resume Application

## Overview

This project is a CV application that allows users to create and display their resume. It's built using React and includes features such as adding personal information, education details, and work experience. Users can also download their resume in PDF format.

## Project Structure

The project is organized into components:

- **App**: The main component that manages the state of personal information, education, and experience. It also includes functionality for downloading the resume.

- **Components**:
  - **PersonInfo**: Component for displaying and updating personal information.
  - **Education**: Component for managing education details.
  - **Experience**: Component for managing work experience details.
  - **CVDisplayer**: Component responsible for displaying the complete CV.
  - **Download**: Component containing buttons for clearing the resume and downloading it.

## Dependencies

- **html2canvas**: Library used for converting HTML to canvas, allowing the creation of images from JSX elements.
- **jspdf**: Library for generating PDF files.

## Usage

1. **Personal Information**: Fill in your full name, email, and phone number.

2. **Education**: Add details about your education, including the school, degree, start and end dates, and location.

3. **Experience**: Add details about your work experience, including the company name, position title, start and end dates, location, and description.

4. **Clear and Download**: Use the buttons provided to clear the entered information or download the resume as a PDF.

## Additional Features

- **Editing**: Click on a submitted task to edit the information. Changes will be reflected in real-time.

- **Hiding Tasks**: Hide specific education or experience tasks from the displayed resume.

## Project Hosting

The CV application is hosted on Vercel. You can access it [here](https://cv-application-odin-project.vercel.app/).

## How to Run Locally

To run the project locally, follow these steps:

1. Clone the repository:

   ```
   https://github.com/MrSaadMasood/the-odin-project-2023.git
   ```

2. Navigate to project directory.

3. Install Dependencies:
    ```
    npm install
    ```
4. Start the dev server:
    ```
    npm run dev
    ```
