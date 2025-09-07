# Cafe Shop Application

This project is a full-stack application for managing a cafe shop, built using Angular for the frontend and ASP.NET Core Web API for the backend, with an MS SQL database.

## Project Structure

The project is organized into the following main directories:

- **angular-frontend**: Contains the Angular application.
  - **src**: Source files for the Angular application.
    - **app**: Main application module and components.
      - **core**: Core services and guards.
      - **screens**: Different screens of the application, including login, user management, role management, role mapping, billing, and inventory.
    - **environments**: Environment-specific configurations.
  - **angular.json**: Angular CLI configuration.
  - **package.json**: Lists dependencies and scripts for the Angular project.
  
- **webapi-backend**: Contains the ASP.NET Core Web API.
  - **Controllers**: API controllers for handling requests related to users, roles, billing, and inventory.
  - **Data**: Database context and initializer for setting up the database.
  - **Models**: Data models representing the entities in the application.
  - **Repositories**: Implements the repository pattern for data access.

- **database**: SQL scripts for creating the database and tables with sample data.

## Features

- **User Management**: Manage users with functionalities to create, read, update, and delete users.
- **Role Management**: Manage roles with functionalities to create, read, update, and delete roles.
- **Role Mapping**: Map users to roles for access control.
- **POS Billing**: Handle billing operations with a dedicated screen for processing transactions.
- **Inventory Management**: Manage cafe inventory, including items like tea, coffee, biscuits, and milkshakes.

## Getting Started

### Prerequisites

- Node.js and npm for the Angular frontend.
- .NET SDK for the ASP.NET Core backend.
- MS SQL Server for the database.

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd cafe-shop-app
   ```

2. Navigate to the Angular frontend directory and install dependencies:
   ```
   cd angular-frontend
   npm install
   ```

3. Navigate to the Web API backend directory and restore dependencies:
   ```
   cd ../webapi-backend
   dotnet restore
   ```

4. Set up the database by running the SQL script located in the `database` directory.

### Running the Application

1. Start the Web API backend:
   ```
   cd webapi-backend
   dotnet run
   ```

2. Start the Angular frontend:
   ```
   cd angular-frontend
   ng serve
   ```

3. Open your browser and navigate to `http://localhost:4200` to access the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.