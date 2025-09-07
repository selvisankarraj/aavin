# Database Setup for Cafe Shop Application

This document provides instructions for setting up the database for the Cafe Shop Application, which includes creating the necessary tables and inserting sample data.

## Database Creation Script

The SQL script located in `create-cafe-shop-db.sql` is responsible for creating the database and the required tables. It also populates the tables with sample data to facilitate testing and development.

### Tables

The following tables will be created:

1. **Users**
   - Stores user information such as username, password, and roles.

2. **Roles**
   - Defines different roles that users can have within the application.

3. **RoleMappings**
   - Maps users to their respective roles.

4. **Billings**
   - Records billing transactions, linking them to users and inventory items.

5. **Inventories**
   - Manages the inventory of items available in the cafe, including tea, coffee, biscuits, and milkshakes.

### Sample Data

The script will also insert sample data into the tables to provide a baseline for application functionality. This includes:

- Sample users with different roles.
- Sample roles such as Admin, Manager, and Staff.
- Sample inventory items with prices.
- Sample billing records linking users to their purchases.

## Running the Script

To set up the database:

1. Open your SQL Server Management Studio (SSMS) or any SQL client.
2. Connect to your SQL Server instance.
3. Open the `create-cafe-shop-db.sql` script.
4. Execute the script to create the database and tables, and insert the sample data.

## Conclusion

After executing the script, the database will be ready for use with the Cafe Shop Application. Ensure that the connection strings in the application are correctly configured to point to the newly created database.