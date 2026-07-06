# Part 1A - Task B: Clarifying Questions

## Objective
The following questions are intended to clarify ambiguous requirements with the Product and Engineering teams before implementation and testing.

### Question 1
**Question:**
If two hotels have exactly the same ScoreDelta, total price, distance, and review count, how should the final ranking be determined?

**Reason:**
To ensure consistent recommendation ordering.

---

### Question 2
**Question:**
How should prices be compared when hotels are displayed in different currencies (₹, $, €, etc.)?

**Reason:**
Currency conversion rules are required for accurate price comparison.

---

### Question 3
**Question:**
What should happen if a hotel has no review score or review count?

**Reason:**
The recommendation score depends on review data.

---

### Question 4
**Question:**
How is Amenity Match Percentage calculated, and which amenities are mandatory?

**Reason:**
The scoring formula includes amenity matching.

---

### Question 5
**Question:**
How recent must hotel prices and inventory be before they are considered stale?

**Reason:**
To avoid recommending outdated or unavailable hotels.

---

### Question 6
**Question:**
If fewer than 10 hotels satisfy all recommendation rules, should fewer than 10 results be shown or should the rules be relaxed?

**Reason:**
Clarifies expected system behavior.

---

### Question 7
**Question:**
Should inactive or sold-out hotels be completely hidden or displayed with an unavailable label?

**Reason:**
Clarifies how unavailable hotels should appear in the UI.

---

### Question 8
**Question:**
Should the 5 km distance be calculated as straight-line distance or actual road distance?

**Reason:**
Distance calculation affects hotel eligibility.
