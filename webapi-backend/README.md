# Cafe Shop Application

## Overview
The Cafe Shop Application is a full-stack web application that consists of an Angular frontend and a .NET Core Web API backend. It is designed to manage users, roles, billing, and inventory for a cafe shop. The application utilizes a Microsoft SQL Server database to store data.

## Features
- **User Management**: Create, read, update, and delete users.
- **Role Management**: Manage roles within the application.
- **Role Mapping**: Assign roles to users.
- **POS Billing**: Handle billing operations for cafe items.
- **Inventory Management**: Manage inventory items such as tea, coffee, biscuits, and milkshakes.

## Project Structure
```
cafe-shop-app
├── angular-frontend          # Angular frontend application
│   ├── src
│   │   ├── app
│   │   │   ├── core         # Core services and guards
│   │   │   ├── screens      # Application screens
│   │   │   ├── app-routing.module.ts  # Routing configuration
│   │   │   └── app.module.ts          # Main application module
│   │   └── environments      # Environment configurations
│   ├── angular.json         # Angular CLI configuration
│   ├── package.json         # Project dependencies
│   └── README.md            # Angular frontend documentation
├── webapi-backend           # .NET Core Web API backend
│   ├── Controllers          # API controllers
│   ├── Data                 # Database context and initializer
│   ├── Models               # Data models
│   ├── Repositories         # Repository pattern implementations
│   ├── cafe-shop-api.csproj # Project file for the Web API
│   ├── appsettings.json     # Configuration settings
│   └── README.md            # Web API backend documentation
├── database                  # Database setup scripts
│   ├── create-cafe-shop-db.sql  # SQL scripts for database creation
│   └── README.md            # Database documentation
└── README.md                # Overall project documentation
```

## Getting Started

### Prerequisites
- .NET SDK
- Node.js and npm
- SQL Server

### Installation

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd cafe-shop-app
   ```

2. **Set up the database**:
   - Run the SQL script located in `database/create-cafe-shop-db.sql` to create the database and tables with sample data.

3. **Run the backend**:
   - Navigate to the `webapi-backend` directory and run:
   ```
   dotnet run
   ```

4. **Run the frontend**:
   - Navigate to the `angular-frontend` directory and run:
   ```
   npm install
   ng serve
   ```

### Usage
- Access the application at `http://localhost:4200`.
- Use the login page to authenticate and access the user management, role management, billing, and inventory screens.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.