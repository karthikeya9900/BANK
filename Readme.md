# Banking Application

## Description

This project involves building a banking application that functions like a real-world banking system. It includes features such as withdrawals, deposits, user logins, account creation, and other banking functionalities. The application ensures data is stored permanently and updates dynamically as operations are performed.

---

## Features

### 1. **User Account Creation**

- Easily create new user accounts for customers if they do not already exist in the system.

### 2. **User Authentication**

- Secure login system that protects user credentials and ensures data privacy.

### 3. **Account Details**

- View basic account details like balance

### 4. **Fund Transfers**

- Transfer funds between accounts within the same bank.
- Transfer money to accounts belonging to other users securely and efficiently.

### 5. **Deposits and Withdrawals**

- Perform deposit and withdrawal operations with detailed tracking of each transaction.

### 6. **Loan Management**

- View and manage loan details such as outstanding amounts, payment schedules, and loan histories.

### 7. **User Profile Management**

- Update basic details such as name, address, contact information, and other profile data.

### 8. **Transaction Categories**

- Allow users to categorize transactions (e.g., groceries, bills, savings) for better financial tracking.

---

## Challenges

1. **Real-Time Data Updates**

   - Ensure user data is updated in real-time after every transaction.

2. **File Operations**

   - Read data from a file at the start of the program and rewrite it after performing updates to ensure data persistence.

3. **Error Handling**

   - Handle errors gracefully during operations, such as invalid inputs, insufficient funds, or file access issues.

4. **Unique Usernames**
   - Maintain unique usernames for all user logins to prevent duplication and ensure data integrity.

---

## Concepts and Technologies Used

- **Data Storage**: JSON format for permanent data storage.
- **Core JavaScript Features**:
  - Objects for structured data representation.
  - Strings for handling text inputs and outputs.
  - Arrays for managing lists of users, accounts, and transactions.

---

# Preview

### 1. User creation

```
        *** NEW USER CREATION ***

enter your full name : users Full Name
enter your date of birth : users Date of Birth
enter your adderess : users address
enter your contact number : users mobile number
enter your PAN number : users PAN number
enter your type : savings / current

creates a new user account with given details with unique account numbers
```

```
        ***  USER LOGIN DETAILS CREATION  ***
enter your account number : account number
enter userName : username
enter password : password
confirm password : password

if the userName already exists
it will not create and raises error that already exists
and asks again to enter username and password
```

### 2. User Authentication

```
        ***  USER LOGIN  ***

enter username : username
enter password : password

it will checks whether the username and password
are valid or not if not returns invalid username or password
if valid , changes to that particular user
```

### 3. Account Details

```
      ***  USER ACCOUNT DETAILS  ***

FULL NAME : full name
DOB : 00/00/0000
ADDRESS : user Address
EMAIL:abcde123@gmail.com
CONTACT : 1234567890
PAN number : ABCDE1234F
Account Type : savings / current
Account Number : 192310100012345
Balance : 00000.00

displays user account details
```

### 4. Fund Transfers

```
        ***  Money Transfer  ***

reciever name : reciever name
reciever account number : account number
enter money you want to send : money
are you sure details correct ? : yes or no

// if not correct it asks again to enter
if correct it continues its process

returns message that money sent succesful
```

### 5. Withdraw Money

```
        ***  Withdraw Money  ***

currnet Balance : displays current balance
enter amount to withdraw : amount
are you sure want to withdraw ? : yes or no

it checks whether the given amount is valid or not
if your balance is less than entered amount it throws error
oherwise returns transaction succesfull message
```

```
        ***  Deposit Money  ***

current balance : displays current balance
enter amount to deposit : amount
are you sure ? : yes or no

if yes deposits money otherwise cancels transaction
return transaction succesfull message
```
