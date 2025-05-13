# Grade Evaluation System

This repository contains a simple web application that allows users to input a grade (0 to 10), and based on the grade, it provides feedback using an alert message. The application evaluates the grade and gives a corresponding description such as "Muito fraco", "Insuficiente", "Suficiente", "Boa", or "Excelente".

## Features

- User inputs a grade (from 0 to 10).
- The application evaluates the grade and provides an appropriate feedback message.
- If the user doesn't enter a grade, it alerts them to input a value.

## Code Breakdown

1. **HTML**:
    - The HTML provides the structure of the page with an input field for entering the grade and a button to trigger the evaluation.
    - The form contains a label for the grade, a text input, and a button to activate the function `verificarNota()`.

2. **JavaScript**:
    - The JavaScript function `verificarNota()` is responsible for taking the input value, checking the grade, and displaying an appropriate message via `alert`.
    - The function checks if the input is valid and gives feedback based on predefined ranges:
        - 0 to 2: "Very weak"
        - 3 to 4: "Insufficient"
        - 5 to 6: "Sufficient"
        - 7 to 8: ""Good""
        - 9 to 10: ""Excellent""

3. **CSS**:
    - An external CSS file (`style.css`) is linked, which can be used to style the application (though styling is not provided in the provided code).
