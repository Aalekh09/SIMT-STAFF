# ⚡ Quick Setup Guide - Version 2.0

## New Features Setup

---

## 📋 Prerequisites

- Version 1.x already installed and working
- Access to Google Sheets
- Access to Google Apps Script
- Access to your web server

---

## 🚀 5-Minute Setup

### Step 1: Update Google Sheets (1 minute)

1. Open your existing Google Sheet
2. Go to the "Staff_Data" sheet
3. Click on column K (after column J "Score")
4. Right-click and select "Insert 1 column left" if needed
5. In cell K1, type: **Comments**
6. Done! The Performance_History sheet will be created automatically

**Your Staff_Data sheet should now look like:**
```
A: ID | B: Name | C: Email | D: Role | E: Punctuality | F: Discipline | 
G: Engagement | H: Tasks | I: Teamwork | J: Score | K: Comments
```

---

### Step 2: Update Apps Script (2 minutes)

1. In Google Sheets, go to **Extensions > Apps Script**
2. Select ALL existing code (Ctrl+A)
3. Delete it
4. Open `AppsScript.txt` from your files
5. Copy ALL the code
6. Paste into Apps Script editor
7. Click **Save** (💾 icon)
8. Close the Apps Script tab

**Note:** You don't need to redeploy! Your existing deployment will automatically use the new code.

---

### Step 3: Update Frontend Files (2 minutes)

#### If using a web server:
1. Upload these files to your server (replace existing):
   - `admin.html`
   - `staff.html`
   - `script.js`
   - `style.css`

#### If using locally:
1. Replace the files in your folder
2. Make sure `index.html` is also present

---

### Step 4: Test (1 minute)

1. Open your browser
2. Clear cache: Press **Ctrl+Shift+Delete**
   - Select "Cached images and files"
   - Click "Clear data"
3. Go to your system URL or open `index.html`
4. Login as admin
5. You should see:
   - 💬 button in the Comments column
   - "💾 Save Monthly Snapshot" button
   - Performance History dropdown

---

## ✅ Verification Checklist

### Admin Dashboard:
- [ ] Comments column (💬 button) appears in table
- [ ] "Save Monthly Snapshot" button visible
- [ ] Performance History dropdown shows
- [ ] Can click 💬 to add comment
- [ ] Can select staff from history dropdown

### Staff Dashboard:
- [ ] "Feedback from Admin" section appears
- [ ] "My Performance History" section appears
- [ ] Can see admin comments (if any)
- [ ] Can see performance history (after first save)

---

## 🎯 First Use

### Adding Your First Comment:

1. Login as admin
2. Go to Staff Performance Entry table
3. Find any staff member
4. Click the 💬 button in their row
5. Type a comment (e.g., "Great work this month!")
6. Click OK
7. ✅ Comment saved!

### Saving Your First History:

**Option A - Automatic (Recommended):**
1. Edit any staff member's scores
2. Click "💾 Save" button
3. ✅ History automatically saved!

**Option B - Manual Snapshot:**
1. Click "💾 Save Monthly Snapshot" button
2. Confirm the action
3. ✅ All staff scores saved to history!

### Viewing History:

1. Select a staff member from the dropdown
2. See their performance chart
3. Scroll down to see detailed table
4. ✅ History displayed!

---

## 📊 Google Sheets Structure

### After Setup, You'll Have:

#### Sheet 1: Staff_Data
```
Columns: ID, Name, Email, Role, Punctuality, Discipline, 
         Engagement, Tasks, Teamwork, Score, Comments
```

#### Sheet 2: Performance_History (Auto-created)
```
Columns: Date, Email, Name, Punctuality, Discipline, 
         Engagement, Tasks, Teamwork, Total Score
```

---

## 🐛 Troubleshooting

### Comments Not Saving?

**Check:**
1. Column K exists in Staff_Data sheet
2. Column K header is "Comments"
3. Apps Script is updated
4. Browser cache is cleared

**Fix:**
- Add column K manually
- Update Apps Script code
- Clear browser cache

---

### History Not Showing?

**Check:**
1. Performance_History sheet exists
2. At least one history record saved
3. Staff member selected in dropdown

**Fix:**
- Save marks for any staff (creates sheet automatically)
- Or click "Save Monthly Snapshot"
- Select staff from dropdown

---

### 💬 Button Not Appearing?

**Check:**
1. `admin.html` is updated
2. `script.js` is updated
3. `style.css` is updated
4. Browser cache cleared

**Fix:**
- Re-upload all files
- Hard refresh: Ctrl+Shift+R
- Clear cache completely

---

### Performance_History Sheet Not Created?

**This is normal!** The sheet is created automatically when:
- You save marks for the first time (after update), OR
- You click "Save Monthly Snapshot"

**To create it manually:**
1. In Google Sheets, click the + at bottom
2. Name it: `Performance_History`
3. Add headers in Row 1:
   ```
   Date | Email | Name | Punctuality | Discipline | 
   Engagement | Tasks | Teamwork | Total Score
   ```

---

## 💡 Pro Tips

### For Best Results:

1. **Monthly Snapshots:**
   - Save on the same date each month
   - Example: 1st of every month
   - Creates consistent tracking

2. **Meaningful Comments:**
   - Be specific and constructive
   - Example: "Excellent punctuality this month! Keep it up."
   - Avoid generic comments

3. **Review History:**
   - Check trends before performance reviews
   - Identify improvement patterns
   - Recognize consistent performers

4. **Staff Communication:**
   - Tell staff about new feedback feature
   - Encourage them to check comments regularly
   - Explain how to view their history

---

## 📱 Mobile Testing

After setup, test on mobile:
1. Open on phone/tablet
2. Login as admin
3. Check if 💬 button is visible
4. Try adding a comment
5. Check history dropdown works

---

## 🎓 Training Your Team

### For Admins:
1. Show how to add comments
2. Demonstrate history viewing
3. Explain monthly snapshots
4. Practice together

### For Staff:
1. Show where to find feedback
2. Explain performance history
3. Demonstrate how to interpret charts
4. Answer questions

---

## 📞 Need Help?

### If Something Doesn't Work:

1. **Check browser console:**
   - Press F12
   - Look for red errors
   - Share error message

2. **Verify Apps Script:**
   - Open Apps Script editor
   - Check for syntax errors
   - Ensure code is saved

3. **Test API:**
   - Try adding a comment
   - Check if it appears in Google Sheets column K
   - If yes, frontend issue; if no, backend issue

4. **Review documentation:**
   - VERSION_2.0_RELEASE.md
   - README.md
   - FEATURES.md

---

## ✨ You're All Set!

Your system now has:
- ✅ Performance Comments
- ✅ Monthly History Tracking
- ✅ Visual Performance Charts
- ✅ Historical Data Tables

Start using these features to enhance your performance management!

---

**Setup Time:** ~5 minutes  
**Difficulty:** Easy  
**Impact:** High

© 2026 SAHA Institute of Management & Technology
