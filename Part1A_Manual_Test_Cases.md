# Part 1A - Manual Test Cases

## Feature: Login Page

### Test Case 1
**Test Case ID:** TC_LOGIN_001

**Title:** Verify login with valid credentials

**Preconditions:**
- User is registered.
- User is on the Login page.

**Test Steps:**
1. Enter a valid email address.
2. Enter a valid password.
3. Click the Login button.

**Expected Result:**
- User is successfully logged in.
- Dashboard/Home page is displayed.

**Priority:** High

**Status:** Not Executed

---

### Test Case 2
**Test Case ID:** TC_LOGIN_002

**Title:** Verify login with invalid password

**Preconditions:**
- User account exists.

**Test Steps:**
1. Enter a valid email.
2. Enter an incorrect password.
3. Click Login.

**Expected Result:**
- Appropriate error message is displayed.
- User remains on the Login page.

**Priority:** High

**Status:** Not Executed

---

### Test Case 3
**Test Case ID:** TC_LOGIN_003

**Title:** Verify login with invalid email format

**Preconditions:**
- Login page is open.

**Test Steps:**
1. Enter an invalid email format (example: abc.com).
2. Enter any password.
3. Click Login.

**Expected Result:**
- Validation message for invalid email is displayed.

**Priority:** Medium

**Status:** Not Executed

---

### Test Case 4
**Test Case ID:** TC_LOGIN_004

**Title:** Verify login with empty fields

**Preconditions:**
- Login page is open.

**Test Steps:**
1. Leave Email blank.
2. Leave Password blank.
3. Click Login.

**Expected Result:**
- Required field validation messages are displayed.

**Priority:** High

**Status:** Not Executed

---

### Test Case 5
**Test Case ID:** TC_LOGIN_005

**Title:** Verify password masking

**Preconditions:**
- Login page is open.

**Test Steps:**
1. Enter password in Password field.

**Expected Result:**
- Password characters are hidden using dots or asterisks.

**Priority:** Medium

**Status:** Not Executed
