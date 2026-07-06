# Part 1B - Bug Report

## Feature
Hotel Recommendation System - "10 Better & Cheaper Hotels"

### Selected Hotel

| Hotel | Total Price | Rating | Review Score |
|--------|-------------|--------|--------------|
| Skyline Business Hotel | ₹21,000 | 4★ | 8.3 (1,240 reviews) |

---

# Bugs Found

| Bug ID | Issue | Expected Result | Actual Result | Severity |
|--------|-------|-----------------|---------------|----------|
| BUG-01 | Hotel at Rank 3 is 5.8 km away | Hotels beyond 5 km must be excluded | Comet Residency (5.8 km) is shown | High |
| BUG-02 | Rank 5 hotel costs ₹22,400 | Recommended hotel must be cheaper than ₹21,000 | Zenith Inn is more expensive | Critical |
| BUG-03 | Rank 5 "Why Recommended" tag says "Cheaper" | Tag should match recommendation rule | Incorrect recommendation tag | High |
| BUG-04 | Rank 6 price uses USD ($18,900) while others use INR | All hotels should display same currency or converted values | Currency inconsistency | High |
| BUG-05 | Rank 4 review score is 10.8 | Review score should be within valid range (normally 0–10) | Invalid review score displayed | Critical |
| BUG-06 | Orbit Executive Stay appears twice (Rank 1 & Rank 9) | Duplicate recommendations should not appear | Duplicate hotel listed | High |
| BUG-07 | Selected hotel appears in recommendations (Rank 10) | Selected hotel must be excluded | Selected hotel displayed | Critical |
| BUG-08 | "Highest Score" tag shown although score value is invalid | Recommendation tag should be based on valid data | Misleading recommendation | Medium |
| BUG-09 | Recommendation list contains invalid records reducing useful recommendations | Only valid hotels should occupy Top 10 list | Invalid hotels consume recommendation slots | Medium |
| BUG-10 | Data validation missing for currency and review score | Recommendation engine should validate data before display | Invalid data reaches UI | High |

---

# Summary

Total Bugs Identified: **10**

## Critical
- Hotel is more expensive than selected.
- Selected hotel appears in recommendations.
- Invalid review score (10.8).

## High
- Hotel beyond 5 km included.
- Duplicate hotel listing.
- Mixed currency display.
- Incorrect recommendation tag.
- Missing data validation.

## Medium
- Invalid ranking due to bad data.
- Misleading "Highest Score" recommendation.
