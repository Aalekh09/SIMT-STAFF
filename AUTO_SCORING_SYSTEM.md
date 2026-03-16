# 🤖 Intelligent Auto-Scoring System with Manual Override

## SAHA Institute of Management & Technology

---

## 🎯 Concept Overview

### Smart Auto-Scoring
The system automatically calculates scores (0-10) based on various data points like attendance, task completion, behavior tracking, etc., but **admin can always edit/override** any score.

---

## 📊 Auto-Scoring Components

### 1. 🕐 Punctuality Auto-Scoring

#### Data Sources:
- Clock-in time
- Expected arrival time
- Late arrivals count
- Early departures
- Break time adherence

#### Scoring Logic:
```javascript
Punctuality Score Calculation:

Base Score: 10

Deductions:
- Late by 1-5 minutes:     -0.5 points
- Late by 6-15 minutes:    -1.0 points
- Late by 16-30 minutes:   -2.0 points
- Late by 31-60 minutes:   -3.0 points
- Late by 60+ minutes:     -5.0 points
- Absent without notice:   0 points
- Early departure:         -1.0 points

Bonuses:
- Arrived 10+ min early:   +0.5 points (max 10)
- Perfect week (5 days):   +0.5 bonus
- Perfect month:           +1.0 bonus

Final Score: Max(0, Min(10, calculated_score))
```

#### Example:
```
Staff arrives at 9:10 AM (Expected: 9:00 AM)
- Base: 10
- Late by 10 minutes: -1.0
- Auto Score: 9.0

Admin can edit to: 8.5 (if there were other issues)
                or 9.5 (if there was valid reason)
```

---

### 2. 📋 Discipline Auto-Scoring

#### Data Sources:
- Dress code compliance
- Policy violations
- Warning count
- Incident reports
- Behavior logs
- Break time violations

#### Scoring Logic:
```javascript
Discipline Score Calculation:

Base Score: 10

Deductions:
- Minor violation:         -0.5 points
- Dress code issue:        -1.0 points
- Policy violation:        -2.0 points
- Warning issued:          -3.0 points
- Major incident:          -5.0 points
- Repeated violations:     Additional -1.0 per repeat

Bonuses:
- Zero violations (week):  +0.