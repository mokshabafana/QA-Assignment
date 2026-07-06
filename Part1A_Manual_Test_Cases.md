# Part 1A - Test Design
## Task A - Manual Test Scenarios (20)

### Boundary Test Cases

### TC_001 - Distance exactly 5 km
**Preconditions/Data Setup:**
Candidate hotel is exactly 5.0 km away and meets all other recommendation rules.

**Steps:**
1. Select a hotel.
2. Generate recommendations.

**Expected Result:**
Hotel should be included in recommendations.

---

### TC_002 - Distance greater than 5 km
**Preconditions/Data Setup:**
Candidate hotel is 5.1 km away.

**Steps:**
1. Select a hotel.
2. Generate recommendations.

**Expected Result:**
Hotel should not be recommended.

---

### TC_003 - Candidate price ₹1 less than selected hotel
**Preconditions/Data Setup:**
Selected Hotel = ₹21,000
Candidate = ₹20,999

**Steps:**
Generate recommendations.

**Expected Result:**
Candidate should qualify as cheaper.

---

### TC_004 - Candidate price equal to selected hotel
**Preconditions/Data Setup:**
Selected Hotel = ₹21,000
Candidate = ₹21,000

**Steps:**
Generate recommendations.

**Expected Result:**
Candidate should not be recommended.

---

### TC_005 - Inventory exactly 1 room available
**Preconditions/Data Setup:**
Inventory Available = 1

**Steps:**
Generate recommendations.

**Expected Result:**
Hotel should be recommended.

---

### TC_006 - Exactly 10 eligible hotels
**Preconditions/Data Setup:**
Only 10 hotels satisfy all recommendation rules.

**Steps:**
Generate recommendations.

**Expected Result:**
All 10 hotels should be displayed.

---

## Negative Test Cases

### TC_007 - Selected hotel appears in recommendations

**Preconditions/Data Setup:**
Selected hotel exists in candidate list.

**Steps:**
Generate recommendations.

**Expected Result:**
Selected hotel should never appear.

---

### TC_008 - Inactive hotel

**Preconditions/Data Setup:**
Candidate hotel status = Inactive.

**Steps:**
Generate recommendations.

**Expected Result:**
Inactive hotel should be excluded.

---

### TC_009 - Sold out hotel

**Preconditions/Data Setup:**
Inventory = 0

**Steps:**
Generate recommendations.

**Expected Result:**
Hotel should not be displayed.

---

### TC_010 - Candidate score lower than selected

**Preconditions/Data Setup:**
Candidate overall score is lower.

**Steps:**
Generate recommendations.

**Expected Result:**
Hotel should not be recommended.

---

### TC_011 - Missing review score

**Preconditions/Data Setup:**
Review score is NULL.

**Steps:**
Generate recommendations.

**Expected Result:**
System should handle missing data gracefully according to business rules.

---

### TC_012 - Empty recommendation dataset

**Preconditions/Data Setup:**
No hotel satisfies recommendation criteria.

**Steps:**
Generate recommendations.

**Expected Result:**
Display "No recommendations available."

---

## Ranking / Sorting Test Cases

### TC_013 - Verify ScoreDelta sorting

**Preconditions/Data Setup:**
Multiple hotels have different ScoreDelta values.

**Steps:**
Generate recommendations.

**Expected Result:**
Hotels should be sorted by highest ScoreDelta.

---

### TC_014 - Verify price sorting when ScoreDelta is same

**Preconditions/Data Setup:**
Two hotels have identical ScoreDelta.

**Steps:**
Generate recommendations.

**Expected Result:**
Lower priced hotel should appear first.

---

### TC_015 - Verify distance sorting

**Preconditions/Data Setup:**
Hotels have same ScoreDelta and price.

**Steps:**
Generate recommendations.

**Expected Result:**
Closer hotel should appear first.

---

### TC_016 - Verify review count sorting

**Preconditions/Data Setup:**
Hotels have same ScoreDelta, price and distance.

**Steps:**
Generate recommendations.

**Expected Result:**
Hotel with higher review count should rank higher.

---

## Data Correctness Test Cases

### TC_017 - Verify total price calculation

**Preconditions/Data Setup:**
Known nightly rate and stay duration.

**Steps:**
Generate recommendations.

**Expected Result:**
Total price should equal nightly price × number of nights.

---

### TC_018 - Verify currency consistency

**Preconditions/Data Setup:**
One hotel has USD while others use INR.

**Steps:**
Generate recommendations.

**Expected Result:**
Currency should be converted or handled as per business rules.

---

### TC_019 - Verify stale inventory

**Preconditions/Data Setup:**
Hotel inventory recently became unavailable.

**Steps:**
Generate recommendations.

**Expected Result:**
Outdated inventory should not be displayed.

---

### TC_020 - Verify missing amenities

**Preconditions/Data Setup:**
Hotel has no amenity information.

**Steps:**
Generate recommendations.

**Expected Result:**
System should display available data without crashing and handle missing amenities appropriately.
