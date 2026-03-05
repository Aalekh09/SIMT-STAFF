# 🚀 Quick Start Guide

## Step 1: Setup Google Sheet (2 minutes)

1. Create new Google Sheet
2. Name sheet tab: `Staff_Data`
3. Add these headers in Row 1:
   ```
   ID | Name | Email | Role | Punctuality | Discipline | Engagement | Tasks | Teamwork | Score
   ```
4. Add admin in Row 2:
   ```
   1 | Your Name | your@email.com | admin | 0 | 0 | 0 | 0 | 0 | 0
   ```

## Step 2: Deploy Apps Script (3 minutes)

1. In Google Sheet: **Extensions → Apps Script**
2. Paste code from `AppsScript.txt`
3. Click **Deploy → New Deployment**
4. Choose **Web App**
5. Set "Who has access" to **Anyone**
6. Click **Deploy** and copy the URL

## Step 3: Update Your Code (1 minute)

Open `script.js` and replace line 1:
```javascript
const API = "PASTE_YOUR_WEB_APP_URL_HERE";
```

## Step 4: Test (1 minute)

1. Open `index.html` in browser
2. Login with your admin email
3. Add staff members
4. Enter scores and save

## 🎉 Done!

Your Staff Performance System is ready to use!

---

## 📋 Quick Reference

### Admin Actions
- **Add Staff**: Name + Email → Add Staff button
- **Score Staff**: Enter 0-10 for each metric → Save
- **View Best**: Automatically shown at top

### Staff Actions
- **Login**: Use registered email
- **View Scores**: See all metrics and total
- **Check Rank**: View position on leaderboard

### Scoring Weights
- Punctuality: 20%
- Discipline: 15%
- Engagement: 20%
- Tasks: 20%
- Teamwork: 25%

---

## ⚠️ Common Issues

| Problem | Solution |
|---------|----------|
| Can't login | Check email exists in sheet |
| Scores won't save | Verify Apps Script URL in script.js |
| Wrong page loads | Check "Role" column is "admin" or "staff" |
| No data showing | Refresh page, check browser console |

---

## 💡 Pro Tips

✅ Use decimals for precise scoring (e.g., 8.5)
✅ Refresh data button updates leaderboard instantly
✅ Best performer updates automatically after saving scores
✅ Staff can only see their own scores + leaderboard
✅ Admin sees everything and can edit all scores
