-- SQL script to create the Cafe Shop database and its tables with sample data

CREATE DATABASE CafeShopDB;
GO

USE CafeShopDB;
GO

CREATE TABLE Users (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Username NVARCHAR(50) NOT NULL,
    PasswordHash NVARCHAR(256) NOT NULL,
    Email NVARCHAR(100) NOT NULL,
    CreatedAt DATETIME DEFAULT GETDATE()
);
GO

CREATE TABLE Roles (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(50) NOT NULL
);
GO

CREATE TABLE RoleMappings (
    Id INT PRIMARY KEY IDENTITY(1,1),
    UserId INT NOT NULL,
    RoleId INT NOT NULL,
    FOREIGN KEY (UserId) REFERENCES Users(Id),
    FOREIGN KEY (RoleId) REFERENCES Roles(Id)
);
GO

CREATE TABLE Billings (
    Id INT PRIMARY KEY IDENTITY(1,1),
    UserId INT NOT NULL,
    TotalAmount DECIMAL(18, 2) NOT NULL,
    BillingDate DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (UserId) REFERENCES Users(Id)
);
GO

CREATE TABLE Inventories (
    Id INT PRIMARY KEY IDENTITY(1,1),
    ItemName NVARCHAR(50) NOT NULL,
    Quantity INT NOT NULL,
    Price DECIMAL(18, 2) NOT NULL
);
GO

-- Insert sample data into Users
INSERT INTO Users (Username, PasswordHash, Email) VALUES 
('admin', 'hashed_password_1', 'admin@example.com'),
('user1', 'hashed_password_2', 'user1@example.com');
GO

-- Insert sample data into Roles
INSERT INTO Roles (Name) VALUES 
('Admin'),
('User');
GO

-- Insert sample data into RoleMappings
INSERT INTO RoleMappings (UserId, RoleId) VALUES 
(1, 1), -- admin is an Admin
(2, 2); -- user1 is a User
GO

-- Insert sample data into Inventories
INSERT INTO Inventories (ItemName, Quantity, Price) VALUES 
('Tea', 100, 1.50),
('Coffee', 150, 2.00),
('Biscuits', 200, 0.75),
('Milkshake', 50, 3.00);
GO

-- Insert sample data into Billings
INSERT INTO Billings (UserId, TotalAmount) VALUES 
(1, 50.00),
(2, 30.00);
GO