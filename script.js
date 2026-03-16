const API = "https://script.google.com/macros/s/AKfycbxVfXBIfyAywF-QrZGwMm2-Aqgoln5sVKgReZDDf9GTrsl-5kYAaIoc7DzyUFLvcpyNAA/exec";


/* ================= AUTHENTICATION ================= */

function checkAuth() {
  const user = JSON.parse(localStorage.getItem("user"));
  
  if (!user) {
    window.location = "index.html";
    return;
  }

  // Display user name in header
  const nameElement = document.getElementById("adminName") || document.getElementById("staffName");
  if (nameElement) {
    nameElement.textContent = user[1];
  }

  // Check if staff trying to access admin page
  if (window.location.pathname.includes("admin.html") && user[3] !== "admin") {
    alert("Access denied! Admin only.");
    window.location = "staff.html";
  }

  // Check if admin trying to access staff page
  if (window.location.pathname.includes("staff.html") && user[3] === "admin") {
    window.location = "admin.html";
  }
}


function logout() {
  if (confirm("Are you sure you want to logout?")) {
    localStorage.removeItem("user");
    window.location = "index.html";
  }
}


/* ================= LOGIN ================= */

function login() {
  const email = document.getElementById("email").value.trim();
  const loginBtn = document.getElementById("loginBtn");

  if (!email) {
    alert("Please enter your email");
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  loginBtn.disabled = true;
  loginBtn.innerHTML = '<span class="loading"></span> Logging in...';

  fetch(`${API}?action=login&email=${encodeURIComponent(email)}`)
    .then(res => res.json())
    .then(data => {
      loginBtn.disabled = false;
      loginBtn.textContent = "Login";

      if (!data || data === null) {
        alert("User not found! Please contact admin.");
        return;
      }

      localStorage.setItem("user", JSON.stringify(data));

      if (data[3] === "admin") {
        window.location = "admin.html";
      } else {
        window.location = "staff.html";
      }
    })
    .catch(err => {
      loginBtn.disabled = false;
      loginBtn.textContent = "Login";
      alert("Login error. Please try again.");
      console.error(err);
    });
}


/* ================= ADD STAFF ================= */

function addStaff() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("staffEmail").value.trim();

  if (!name || !email) {
    alert("Please enter staff name and email");
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  fetch(`${API}?action=addStaff&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`)
    .then(res => res.text())
    .then(data => {
      alert(data);
      document.getElementById("name").value = "";
      document.getElementById("staffEmail").value = "";
      loadStaff();
      loadBestPerformer();
    })
    .catch(err => {
      alert("Error adding staff");
      console.error(err);
    });
}


/* ================= BEST PERFORMER ================= */

function loadBestPerformer() {
  fetch(`${API}?action=leaderboard`)
    .then(res => res.json())
    .then(data => {
      if (data && data.length > 0) {
        const best = data[0];
        const card = document.getElementById("bestPerformerCard");
        
        card.innerHTML = `
          <div class="best-performer">
            <h3>🏆 Best Performer of the Month</h3>
            <div class="name">${best[1]}</div>
            <div class="score">Score: ${best[9].toFixed(2)}</div>
          </div>
        `;
      }
    })
    .catch(err => {
      console.error("Error loading best performer:", err);
    });
}


/* ================= LOAD STAFF (ADMIN) ================= */

function loadStaff() {
  fetch(`${API}?action=leaderboard`)
    .then(res => res.json())
    .then(data => {
      // Populate history dropdown
      const historySelect = document.getElementById("historyStaffSelect");
      if (historySelect) {
        historySelect.innerHTML = '<option value="">Select a staff member...</option>';
        data.forEach(row => {
          historySelect.innerHTML += `<option value="${row[2]}">${row[1]}</option>`;
        });
      }

      let table = `
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Email</th>
          <th>Punctuality</th>
          <th>Discipline</th>
          <th>Engagement</th>
          <th>Tasks</th>
          <th>Teamwork</th>
          <th>Total Score</th>
          <th>Action</th>
          <th>Comments</th>
        </tr>
      `;

      data.forEach((row, index) => {
        let rankClass = "";
        if (index === 0) rankClass = "rank1";
        if (index === 1) rankClass = "rank2";
        if (index === 2) rankClass = "rank3";

        table += `
          <tr class="${rankClass}">
            <td><strong>${index + 1}</strong></td>
            <td>${row[1]}</td>
            <td>${row[2]}</td>
            <td><input id="p${row[0]}" value="${row[4]}" type="number" step="0.5"></td>
            <td><input id="d${row[0]}" value="${row[5]}" type="number" step="0.5"></td>
            <td><input id="e${row[0]}" value="${row[6]}" type="number" step="0.5"></td>
            <td><input id="t${row[0]}" value="${row[7]}" type="number" step="0.5"></td>
            <td><input id="tw${row[0]}" value="${row[8]}" type="number" step="0.5"></td>
            <td><strong>${row[9].toFixed(2)}</strong></td>
            <td>
              <button onclick="saveMarks('${row[2]}', ${row[0]}, '${row[1]}')">💾 Save</button>
            </td>
            <td>
              <button onclick="openCommentModal('${row[2]}', '${row[1]}')" class="btn-comment">💬</button>
            </td>
          </tr>
        `;
      });

      document.getElementById("staffTable").innerHTML = table;
    })
    .catch(err => {
      alert("Error loading staff data");
      console.error(err);
    });
}


/* ================= SAVE MARKS ================= */

function saveMarks(email, id, name) {
  const p = document.getElementById("p" + id).value;
  const d = document.getElementById("d" + id).value;
  const e = document.getElementById("e" + id).value;
  const t = document.getElementById("t" + id).value;
  const tw = document.getElementById("tw" + id).value;

  // Validation - removed range limits, only check for valid numbers
  if (isNaN(p) || isNaN(d) || isNaN(e) || isNaN(t) || isNaN(tw)) {
    alert("All scores must be valid numbers");
    return;
  }

  fetch(`${API}?action=updateMarks&email=${encodeURIComponent(email)}&p=${p}&d=${d}&e=${e}&t=${t}&tw=${tw}`)
    .then(res => res.text())
    .then(data => {
      // Also save to history
      return fetch(`${API}?action=saveHistory&email=${encodeURIComponent(email)}&name=${encodeURIComponent(name)}&p=${p}&d=${d}&e=${e}&t=${t}&tw=${tw}`);
    })
    .then(res => res.text())
    .then(data => {
      alert("✅ Marks updated and saved to history!");
      loadStaff();
      loadBestPerformer();
    })
    .catch(err => {
      alert("Error saving marks");
      console.error(err);
    });
}




/* ================= DASHBOARD STATISTICS ================= */

function loadDashboardStats() {
  fetch(`${API}?action=leaderboard`)
    .then(res => res.json())
    .then(data => {
      const totalStaff = data.length;
      const avgScore = data.reduce((sum, row) => sum + row[9], 0) / totalStaff;
      const excellentPerformers = data.filter(row => row[9] >= 40).length;
      const needsImprovement = data.filter(row => row[9] < 25).length;

      const statsHTML = `
        <div class="dashboard-stats">
          <div class="stat-card">
            <div class="stat-card-icon">👥</div>
            <div class="stat-card-value">${totalStaff}</div>
            <div class="stat-card-label">Total Staff</div>
          </div>
          <div class="stat-card green">
            <div class="stat-card-icon">⭐</div>
            <div class="stat-card-value">${avgScore.toFixed(2)}</div>
            <div class="stat-card-label">Average Score</div>
          </div>
          <div class="stat-card orange">
            <div class="stat-card-icon">🏆</div>
            <div class="stat-card-value">${excellentPerformers}</div>
            <div class="stat-card-label">Excellent (≥40.0)</div>
          </div>
          <div class="stat-card purple">
            <div class="stat-card-icon">📊</div>
            <div class="stat-card-value">${needsImprovement}</div>
            <div class="stat-card-label">Needs Focus (<25.0)</div>
          </div>
        </div>
      `;

      document.getElementById("dashboardStats").innerHTML = statsHTML;
    })
    .catch(err => {
      console.error("Error loading dashboard stats:", err);
    });
}


/* ================= EXPORT TO CSV ================= */

function exportToCSV() {
  fetch(`${API}?action=leaderboard`)
    .then(res => res.json())
    .then(data => {
      let csv = "Rank,Name,Email,Punctuality,Discipline,Engagement,Tasks,Teamwork,Total Score\n";

      data.forEach((row, index) => {
        csv += `${index + 1},${row[1]},${row[2]},${row[4]},${row[5]},${row[6]},${row[7]},${row[8]},${row[9].toFixed(2)}\n`;
      });

      // Create download link
      const blob = new Blob([csv], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `SAHA_Institute_Performance_Report_${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      alert("✅ Report exported successfully!");
    })
    .catch(err => {
      alert("Error exporting data");
      console.error(err);
    });
}


/* ================= PERFORMANCE HISTORY ================= */

function viewPerformanceHistory() {
  alert("📈 Performance History Feature\n\nThis feature will show:\n- Monthly performance trends\n- Score improvements/declines\n- Historical comparisons\n- Performance graphs\n\nComing soon in the next update!");
}


/* ================= ENHANCED STAFF PERFORMANCE VIEW ================= */

function loadMyPerformance() {
  const user = JSON.parse(localStorage.getItem("user"));
  
  if (!user) return;

  const email = user[2];

  fetch(`${API}?action=login&email=${encodeURIComponent(email)}`)
    .then(res => res.json())
    .then(data => {
      if (!data) {
        alert("Error loading your performance data");
        return;
      }

      const punctuality = parseFloat(data[4]) || 0;
      const discipline = parseFloat(data[5]) || 0;
      const engagement = parseFloat(data[6]) || 0;
      const tasks = parseFloat(data[7]) || 0;
      const teamwork = parseFloat(data[8]) || 0;
      const totalScore = parseFloat(data[9]) || 0;

      const performanceHTML = `
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-label">Punctuality</div>
            <div class="stat-value">${punctuality.toFixed(1)}</div>
          </div>
          <div class="stat-item">
            <div class="stat-label">Discipline</div>
            <div class="stat-value">${discipline.toFixed(1)}</div>
          </div>
          <div class="stat-item">
            <div class="stat-label">Engagement</div>
            <div class="stat-value">${engagement.toFixed(1)}</div>
          </div>
          <div class="stat-item">
            <div class="stat-label">Tasks</div>
            <div class="stat-value">${tasks.toFixed(1)}</div>
          </div>
          <div class="stat-item">
            <div class="stat-label">Teamwork</div>
            <div class="stat-value">${teamwork.toFixed(1)}</div>
          </div>
          <div class="stat-item" style="border-left-color: #10b981;">
            <div class="stat-label">Total Score</div>
            <div class="stat-value" style="color: #10b981;">${totalScore.toFixed(2)}</div>
          </div>
        </div>
      `;

      document.getElementById("performance").innerHTML = performanceHTML;

      // Add performance message
      const messageDiv = document.getElementById("performanceMessage");
      if (totalScore >= 40) {
        messageDiv.className = "performance-message excellent";
        messageDiv.innerHTML = "🌟 Excellent Performance! Keep up the great work!";
      } else if (totalScore >= 25) {
        messageDiv.className = "performance-message good";
        messageDiv.innerHTML = "👍 Good Performance! You're doing well. Keep improving!";
      } else {
        messageDiv.className = "performance-message needs-improvement";
        messageDiv.innerHTML = "💪 Focus on improvement areas. You can do better!";
      }

      // Load ranking
      loadMyRanking(email, totalScore);
      
      // Load admin comments
      loadAdminComments(email);
      
      // Load performance history
      loadMyHistory(email);
    })
    .catch(err => {
      alert("Error loading performance data");
      console.error(err);
    });
}


/* ================= MY RANKING ================= */

function loadMyRanking(email, myScore) {
  fetch(`${API}?action=leaderboard`)
    .then(res => res.json())
    .then(data => {
      // Find my position
      let myPosition = 0;
      for (let i = 0; i < data.length; i++) {
        if (data[i][2] === email) {
          myPosition = i + 1;
          break;
        }
      }

      const totalStaff = data.length;
      const percentile = ((totalStaff - myPosition + 1) / totalStaff * 100).toFixed(0);

      let rankEmoji = "";
      let rankClass = "";
      if (myPosition === 1) {
        rankEmoji = "🥇";
        rankClass = "rank1";
      } else if (myPosition === 2) {
        rankEmoji = "🥈";
        rankClass = "rank2";
      } else if (myPosition === 3) {
        rankEmoji = "🥉";
        rankClass = "rank3";
      } else {
        rankEmoji = "📊";
      }

      const rankingHTML = `
        <div class="ranking-display ${rankClass}">
          <div class="rank-icon">${rankEmoji}</div>
          <div class="rank-details">
            <div class="rank-position">Rank: ${myPosition} out of ${totalStaff}</div>
            <div class="rank-percentile">Top ${percentile}% of team</div>
            <div class="rank-score">Score: ${myScore.toFixed(2)}</div>
          </div>
        </div>
      `;

      document.getElementById("myRanking").innerHTML = rankingHTML;
    })
    .catch(err => {
      console.error("Error loading ranking:", err);
    });
}


/* ================= PRINT REPORT ================= */

function printReport() {
  window.print();
}



/* ================= PERFORMANCE COMMENTS ================= */

let currentCommentEmail = "";
let currentCommentName = "";

function openCommentModal(email, name) {
  currentCommentEmail = email;
  currentCommentName = name;

  // Get existing comment
  fetch(`${API}?action=getComment&email=${encodeURIComponent(email)}`)
    .then(res => res.text())
    .then(comment => {
      const commentText = prompt(`Add/Edit comment for ${name}:`, comment);
      
      if (commentText !== null) {
        saveComment(email, commentText);
      }
    })
    .catch(err => {
      console.error("Error loading comment:", err);
      const commentText = prompt(`Add comment for ${name}:`);
      if (commentText !== null) {
        saveComment(email, commentText);
      }
    });
}

function saveComment(email, comment) {
  fetch(`${API}?action=saveComment&email=${encodeURIComponent(email)}&comment=${encodeURIComponent(comment)}`)
    .then(res => res.text())
    .then(data => {
      alert("✅ Comment saved successfully!");
    })
    .catch(err => {
      alert("Error saving comment");
      console.error(err);
    });
}


/* ================= LOAD ADMIN COMMENTS (STAFF VIEW) ================= */

function loadAdminComments(email) {
  fetch(`${API}?action=getComment&email=${encodeURIComponent(email)}`)
    .then(res => res.text())
    .then(comment => {
      const commentsDiv = document.getElementById("adminComments");
      
      if (comment && comment.trim() !== "") {
        commentsDiv.innerHTML = `
          <div class="comment-display">
            <div class="comment-icon">💬</div>
            <div class="comment-text">${comment}</div>
          </div>
        `;
      } else {
        commentsDiv.innerHTML = `
          <p class="no-comment">No feedback available yet. Keep up the good work!</p>
        `;
      }
    })
    .catch(err => {
      console.error("Error loading comments:", err);
      document.getElementById("adminComments").innerHTML = `
        <p class="no-comment">No feedback available yet.</p>
      `;
    });
}


/* ================= PERFORMANCE HISTORY ================= */

function saveAllHistory() {
  if (!confirm("Save current performance snapshot for all staff?\n\nThis will record today's scores in the history.")) {
    return;
  }

  fetch(`${API}?action=leaderboard`)
    .then(res => res.json())
    .then(data => {
      let promises = [];
      
      data.forEach(row => {
        const email = row[2];
        const name = row[1];
        const p = row[4];
        const d = row[5];
        const e = row[6];
        const t = row[7];
        const tw = row[8];
        
        promises.push(
          fetch(`${API}?action=saveHistory&email=${encodeURIComponent(email)}&name=${encodeURIComponent(name)}&p=${p}&d=${d}&e=${e}&t=${t}&tw=${tw}`)
        );
      });

      return Promise.all(promises);
    })
    .then(() => {
      alert("✅ Monthly snapshot saved for all staff!");
    })
    .catch(err => {
      alert("Error saving history");
      console.error(err);
    });
}

function loadStaffHistory() {
  const email = document.getElementById("historyStaffSelect").value;
  
  if (!email) {
    document.getElementById("historyChart").innerHTML = "";
    document.getElementById("historyTable").innerHTML = "";
    return;
  }

  fetch(`${API}?action=getHistory&email=${encodeURIComponent(email)}`)
    .then(res => res.json())
    .then(data => {
      if (data.length === 0) {
        document.getElementById("historyChart").innerHTML = `
          <p class="info-text">No history available yet. Save a snapshot to start tracking.</p>
        `;
        document.getElementById("historyTable").innerHTML = "";
        return;
      }

      // Create simple text chart
      let chartHTML = '<div class="history-chart">';
      
      data.forEach((row, index) => {
        const date = row[0];
        const score = parseFloat(row[8]).toFixed(2);
        const barWidth = Math.min((score / 50) * 100, 100);
        
        chartHTML += `
          <div class="history-bar-container">
            <div class="history-date">${date}</div>
            <div class="history-bar-wrapper">
              <div class="history-bar" style="width: ${barWidth}%">
                <span class="history-score">${score}</span>
              </div>
            </div>
          </div>
        `;
      });
      
      chartHTML += '</div>';
      document.getElementById("historyChart").innerHTML = chartHTML;

      // Create table
      let tableHTML = `
        <table class="history-table">
          <tr>
            <th>Date</th>
            <th>Punctuality</th>
            <th>Discipline</th>
            <th>Engagement</th>
            <th>Tasks</th>
            <th>Teamwork</th>
            <th>Total</th>
          </tr>
      `;

      data.forEach(row => {
        tableHTML += `
          <tr>
            <td>${row[0]}</td>
            <td>${parseFloat(row[3]).toFixed(1)}</td>
            <td>${parseFloat(row[4]).toFixed(1)}</td>
            <td>${parseFloat(row[5]).toFixed(1)}</td>
            <td>${parseFloat(row[6]).toFixed(1)}</td>
            <td>${parseFloat(row[7]).toFixed(1)}</td>
            <td><strong>${parseFloat(row[8]).toFixed(2)}</strong></td>
          </tr>
        `;
      });

      tableHTML += '</table>';
      document.getElementById("historyTable").innerHTML = tableHTML;
    })
    .catch(err => {
      console.error("Error loading history:", err);
    });
}


/* ================= LOAD MY HISTORY (STAFF VIEW) ================= */

function loadMyHistory(email) {
  fetch(`${API}?action=getHistory&email=${encodeURIComponent(email)}`)
    .then(res => res.json())
    .then(data => {
      if (data.length === 0) {
        document.getElementById("myHistoryChart").innerHTML = `
          <p class="info-text">No performance history available yet.</p>
        `;
        document.getElementById("myHistoryTable").innerHTML = "";
        return;
      }

      // Create chart
      let chartHTML = '<div class="history-chart">';
      
      data.forEach((row, index) => {
        const date = row[0];
        const score = parseFloat(row[8]).toFixed(2);
        const barWidth = Math.min((score / 50) * 100, 100);
        
        let barColor = "#2563eb";
        if (score >= 40) barColor = "#10b981";
        else if (score < 25) barColor = "#f59e0b";
        
        chartHTML += `
          <div class="history-bar-container">
            <div class="history-date">${date}</div>
            <div class="history-bar-wrapper">
              <div class="history-bar" style="width: ${barWidth}%; background: ${barColor};">
                <span class="history-score">${score}</span>
              </div>
            </div>
          </div>
        `;
      });
      
      chartHTML += '</div>';
      document.getElementById("myHistoryChart").innerHTML = chartHTML;

      // Create table
      let tableHTML = `
        <table class="history-table">
          <tr>
            <th>Date</th>
            <th>Punctuality</th>
            <th>Discipline</th>
            <th>Engagement</th>
            <th>Tasks</th>
            <th>Teamwork</th>
            <th>Total</th>
          </tr>
      `;

      data.forEach(row => {
        tableHTML += `
          <tr>
            <td>${row[0]}</td>
            <td>${parseFloat(row[3]).toFixed(1)}</td>
            <td>${parseFloat(row[4]).toFixed(1)}</td>
            <td>${parseFloat(row[5]).toFixed(1)}</td>
            <td>${parseFloat(row[6]).toFixed(1)}</td>
            <td>${parseFloat(row[7]).toFixed(1)}</td>
            <td><strong>${parseFloat(row[8]).toFixed(2)}</strong></td>
          </tr>
        `;
      });

      tableHTML += '</table>';
      document.getElementById("myHistoryTable").innerHTML = tableHTML;
    })
    .catch(err => {
      console.error("Error loading history:", err);
    });
}
