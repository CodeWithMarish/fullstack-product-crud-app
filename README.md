# Fullstack-Product Repository Documentation

Welcome to the Fullstack-Product GitHub repository! This repository houses a full-stack web application developed using a combination of JavaScript, React, Tailwind CSS, Node.js, Express, and MySQL. This documentation will provide you with an overview of the project's structure, installation instructions, and key components.

## Technologies Used

- JavaScript
- React
- Tailwind CSS
- Node.js
- Express
- MySQL

## Getting Started

Follow these instructions to set up the project on your local machine.

### Prerequisites

- Node.js: Ensure that you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- MySQL: Make sure you have MySQL installed and running. You can download it from [mysql.com](https://www.mysql.com/).

### Installation

1. Clone this repository to your local machine using the following command:

    `git clone https://github.com/your-username/Fullstack-Product.git`

2. Navigate to the project directory:

    `cd Fullstack-Product`


3. Install the Node.js dependencies for the server:

    `npm install`

4. Navigate to the `client` directory to install the React app's dependencies:

    `cd client`
    `npm install`


5. Return to the project root directory:

    `cd ..`

6. Create a MySQL database for the project.

7. Duplicate the `.env.example` file and rename it to `.env`. Update the environment variables with your database configuration.

8. Run the database migrations to set up the initial schema:

    `npm run knex migrate:latest`

9. Start the development server:

    `npm run dev`

10. Open your browser and navigate to `http://localhost:3000` to access the application.

## Project Structure

The project is structured as follows:

- `client`: Contains the React front-end application.
- `server`: Contains the Node.js and Express back-end application.
- `migrations`: Database migration files for managing the database schema.
- `public`: Public assets for the React app.

## Usage

The application allows users to perform various actions related to products. Users can view products, add new products, edit existing products, and delete products.

## Contributing

Contributions to the Fullstack-Product project are welcome and encouraged! If you find any issues or would like to add new features, feel free to open a pull request. Be sure to follow the project's coding standards and conventions.

## License

This project is licensed under the MIT License.

Feel free to reach out if you have any questions or need further assistance. Happy coding!
