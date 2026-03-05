# 🎯 SAHA Institute Staff Performance Management System

**SAHA INSTITUTE OF MANAGEMENT & TECHNOLOGY**

A professional web-based system for tracking and managing staff performance metrics with real-time scoring, analytics, and leaderboard functionality.

---

## ✨ Features

### 🔐 Admin Features
- ✅ Dashboard with key statistics (total staff, average score, top performers)
- ✅ Add and manage staff members with department field
- ✅ Enter and update performance scores across 5 weighted metrics
- ✅ View best performer of the month prominently displayed
- ✅ Real-time leaderboard with color-coded rankings (Gold, Silver, Bronze)
- ✅ Export performance data to CSV with date stamps
- ✅ Secure authentication and logout functionality

### 👤 Staff Features
- ✅ Personal performance dashboard with all metrics
- ✅ Detailed breakdown with weighted scores
- ✅ Performance feedback messages (Excellent/Good/Needs Improvement)
- ✅ Performance goals and improvement tips
- ✅ View team leaderboard with rankings
- ✅ Track progress and compare with peers

### 📊 Performance Metrics (Weighted Scoring)
1. **Punctuality** - 20%
2. **Discipline** - 15%
3. **Engagement** - 20%
4. **Tasks** - 20%
5. **Teamwork** - 25%

**Total Score Formula:**
```
Score = (Punctuality × 0.20) + (Discipline × 0.15) + (Engagement × 0.20) + (Tasks × 0.20) + (Teamwork × 0.25)
```

**Maximum Score:** 10.0

---

## 🚀 Setup Instructions

### 1. Google Sheets Setup
1. Create a new Google Sheet
2. Name the sheet tab: `Staff_Data`
3. Add headers in Row 1:
   - A1: ID
   - B1: Name
   - C1: Email
   - D1: Role
   - E1: Punctuality
   - F1: Discipline
   - G1: Engagement
   - H1: Tasks
   - I1: Teamwork
   - J1: Score

4. Add an admin user in Row 2:
   - A2: 1
   - B2: Your Name
   - C2: admin@sahainstitute.edu
   - D2: admin
   - E2-I2: 0

### 2. Google Apps Script Setup
1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete any existing code
3. Copy the entire code from `AppsScript.txt`
4. Click **Deploy > New Deployment**
5. Select **Web App**
6. Configure settings:
   - Description: "SAHA Institute Performance System"
   - Execute as: **Me**
   - Who has access: **Anyone**
7. Click **Deploy**
8. Authorize the script (you may see a warning - click "Advanced" then "Go to [project name]")
9. Copy the Web App URL

### 3. Update Frontend
1. Open `script.js` in a text editor
2. Find line 1 with the API constant
3. Replace the URL with your Web App URL:
   ```javascript
   const API = "YOUR_WEB_APP_URL_HERE";
   ```
4. Save the file

### 4. Deploy
- **Option A:** Host on a web server (Apache, Nginx, etc.)
- **Option B:** Use GitHub Pages for free hosting
- **Option C:** Open `index.html` directly in a browser for local testing

---

## 📱 Usage Guide

### For Administrators

#### Login
1. Open the system URL or `index.html`
2. Enter your admin email (e.g., admin@sahainstitute.edu)
3. Click **Login**
4. You'll be redirected to the admin dashboard

#### Dashboard Overview
- **Statistics Cards:** View total staff, average score, excellent performers, and staff needing focus
- **Best Performer:** See the top performer of the month with their score
- **Add Staff:** Enter name, email, and optional department
- **Performance Entry:** Score all staff members on 5 metrics (0-10 scale)
- **Export Data:** Download CSV report with all performance data

#### Entering Scores
1. Click **Refresh Data** to load current staff
2. Enter scores (0-10) for each metric
3. Use decimals for precision (e.g., 8.5)
4. Click **Save** button for each staff member
5. Rankings update automatically

### For Staff Members

#### Login
1. Open the system URL
2. Enter your registered email
3. Click **Login**
4. View your personal dashboard

#### Dashboard Features
- **Performance Metrics:** See your scores in all 5 categories
- **Total Score:** View your weighted total score
- **Performance Message:** Get feedback (Excellent/Good/Needs Improvement)
- **Goals:** Review institute standards and improvement tips
- **Leaderboard:** See your ranking among peers

---

## 🎨 Design Features

- 🏢 Professional SAHA Institute branding with SIMT logo
- 🎨 Modern gradient UI with institute colors (blue theme)
- 📱 Fully responsive design (mobile, tablet, desktop)
- ✨ Smooth animations and hover effects
- 🏆 Color-coded rankings (Gold 🥇, Silver 🥈, Bronze 🥉)
- 💼 Professional card-based layout
- ⚡ Loading states and comprehensive error handling
- 📊 Dashboard statistics and analytics
- 💬 Performance feedback messages
- 🎯 Goal setting and improvement tips

---

## 🔒 Security Features

- ✅ Email validation on login and registration
- ✅ Role-based access control (Admin vs Staff)
- ✅ Authentication checks on all protected pages
- ✅ Secure logout with confirmation
- ✅ Session management via localStorage
- ✅ Input validation for all scores (0-10 range)
- ✅ Automatic redirect based on user role

---

## 📊 Scoring System

### Institute Standards
- **Excellent Performance:** ≥ 8.0 / 10
- **Good Performance:** 6.0 - 7.9 / 10
- **Needs Improvement:** < 6.0 / 10

### Weighted Calculation
Each metric is scored from 0-10, then multiplied by its weight:
- Punctuality contributes 20% to total
- Discipline contributes 15% to total
- Engagement contributes 20% to total
- Tasks contributes 20% to total
- Teamwork contributes 25% to total

**Example:**
```
Punctuality: 8.0 × 0.20 = 1.60
Discipline:  7.5 × 0.15 = 1.13
Engagement:  9.0 × 0.20 = 1.80
Tasks:       8.5 × 0.20 = 1.70
Teamwork:    9.0 × 0.25 = 2.25
─────────────────────────────
Total Score:           8.48
```

---

## 🛠️ Technologies Used

### Frontend
- HTML5 (Semantic markup)
- CSS3 (Gradients, Flexbox, Grid, Animations)
- Vanilla JavaScript (ES6+)
- Responsive Design (Mobile-first approach)

### Backend
- Google Apps Script (Serverless backend)
- Google Sheets (Database)
- RESTful API architecture

### Libraries
- No external dependencies for core functionality
- Pure vanilla JavaScript for maximum compatibility

---

## 📝 File Structure

```
SAHA-Institute-Performance-System/
├── index.html          # Login page with SAHA branding
├── admin.html          # Admin dashboard with statistics
├── staff.html          # Staff dashboard with goals
├── script.js           # All JavaScript functionality
├── style.css           # Styling with institute branding
├── AppsScript.txt      # Backend code for Google Apps Script
├── README.md           # Main documentation (this file)
├── QUICK_START.md      # Quick setup guide (7 minutes)
├── FEATURES.md         # Detailed feature list & roadmap
├── ROADMAP.md          # Development roadmap & timeline
└── CHANGELOG.md        # Version history & improvements
```

---

## 🚀 What's New in Version 1.0

### SAHA Institute Branding
- ✅ Professional SIMT logo on all pages
- ✅ Institute name and branding throughout
- ✅ Consistent blue gradient color scheme
- ✅ Footer with copyright information

### Dashboard Statistics
- ✅ Total staff count card
- ✅ Average performance score
- ✅ Excellent performers count (≥8.0)
- ✅ Staff needing focus (<6.0)

### Enhanced Features
- ✅ Performance feedback messages based on score
- ✅ Goals and improvement tips for staff
- ✅ CSV export with date-stamped filenames
- ✅ Department field for organization
- ✅ Improved mobile responsiveness
- ✅ Loading states and better UX

---

## 📈 Coming Soon (Version 2.0)

See [ROADMAP.md](ROADMAP.md) for detailed development plans.

### High Priority Features
1. 📊 **Performance History** - Track trends over time with charts
2. 📄 **PDF Reports** - Generate professional reports with institute branding
3. 💬 **Comments System** - Admin feedback on performance
4. 🏢 **Department Management** - Filter and analyze by department

### Medium Priority Features
5. 📧 **Email Notifications** - Auto-notify staff of score updates
6. 📅 **Attendance Integration** - Link with attendance system
7. 📦 **Bulk Operations** - CSV upload for scores
8. 📊 **Advanced Analytics** - Deeper insights and predictions

---

## 🐛 Troubleshooting

### Login Issues

**Problem:** "User not found" error
- **Solution:** Verify the email exists in Google Sheets `Staff_Data` sheet
- Check spelling and ensure no extra spaces
- Confirm the email is in column C (Email column)

**Problem:** Login button doesn't work
- **Solution:** Check browser console for errors (F12)
- Verify the API URL in `script.js` is correct
- Ensure Apps Script deployment is set to "Anyone" can access

### Score Saving Issues

**Problem:** Scores don't save
- **Solution:** Check that scores are between 0-10
- Verify Apps Script has proper permissions
- Check browser console for error messages
- Ensure you clicked the Save button for that specific staff member

**Problem:** "Updated" message appears but scores don't change
- **Solution:** Click the Refresh Data button
- Clear browser cache (Ctrl+Shift+Delete)
- Check Google Sheets to verify data was saved

### Page Redirect Issues

**Problem:** Redirected to wrong dashboard
- **Solution:** Check the "Role" column in Google Sheets
- Must be exactly "admin" or "staff" (lowercase)
- Clear localStorage: Open browser console and type `localStorage.clear()`

**Problem:** Stuck on login page after successful login
- **Solution:** Check browser console for JavaScript errors
- Ensure all files (HTML, CSS, JS) are in the same directory
- Try a different browser

### Data Display Issues

**Problem:** No data showing on dashboard
- **Solution:** Click Refresh/Reload button
- Check Google Sheets has data
- Verify API URL is correct
- Check browser console for errors

**Problem:** Leaderboard shows wrong rankings
- **Solution:** Refresh the page
- Verify scores are saved in Google Sheets
- Check that score calculation formula is working

---

## 📚 Additional Documentation

- **[QUICK_START.md](QUICK_START.md)** - Get started in 7 minutes
- **[FEATURES.md](FEATURES.md)** - Complete feature list and future enhancements
- **[ROADMAP.md](ROADMAP.md)** - Development roadmap and timeline
- **[CHANGELOG.md](CHANGELOG.md)** - Version history and improvements

---

## 👨‍💻 Support & Maintenance

### For Issues or Questions:
1. Check the troubleshooting section above
2. Review [FEATURES.md](FEATURES.md) for feature details
3. See [ROADMAP.md](ROADMAP.md) for upcoming features
4. Contact system administrator

### For Feature Requests:
- Review [ROADMAP.md](ROADMAP.md) to see if it's planned
- Submit requests to the system administrator
- Participate in user feedback sessions

---

## 🏢 About SAHA Institute

**SAHA INSTITUTE OF MANAGEMENT & TECHNOLOGY**

This system is designed specifically for SAHA Institute to:
- Streamline staff performance management
- Provide transparent and objective feedback
- Foster continuous improvement culture
- Recognize and reward excellence
- Identify areas needing support

### Institute Performance Standards
- **Target Score:** 8.0 / 10
- **Excellent:** ≥ 8.0 (Top performers, eligible for recognition)
- **Good:** 6.0 - 7.9 (Meeting expectations)
- **Needs Improvement:** < 6.0 (Requires support and development)

### Improvement Tips for Staff
1. **Punctuality:** Arrive 10 minutes early to all commitments
2. **Discipline:** Follow all institute guidelines and policies
3. **Engagement:** Actively participate in meetings and activities
4. **Tasks:** Complete assignments before deadlines
5. **Teamwork:** Collaborate effectively with colleagues

---

## 📄 License

Free to use for educational and commercial purposes.

---

## 🙏 Acknowledgments

Developed for SAHA Institute of Management & Technology to enhance staff performance management and foster a culture of excellence.

---

**Version:** 1.0  
**Last Updated:** March 5, 2026  
**Developed for:** SAHA Institute of Management & Technology  
**System Status:** Production Ready ✅

---

© 2026 SAHA Institute of Management & Technology. All rights reserved.
"# SIMT-STAFF" 
