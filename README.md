# 🏗️ Construction Time Card App

A dead-simple, mobile-first time tracking app for construction workers that dumps data directly to Google Sheets.

## Features

- **One-tap time entry** with common shift presets
- **Remembers worker's name** (saved locally)
- **Auto-calculates hours** as times are entered
- **Works on any smartphone** (no app download needed)
- **Instant Google Sheets sync** 
- **Offline-friendly** interface (submit when you have signal)

---

## 🚀 Quick Setup (15 minutes)

### Step 1: Create Your Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com)
2. Click **"+ Blank"** to create a new spreadsheet
3. Name it something like **"Time Cards 2025"**
4. That's it for now - the script will set up headers automatically

### Step 2: Add the Google Apps Script

1. In your new spreadsheet, click **Extensions → Apps Script**
2. Delete any code already there
3. Copy the entire contents of `GoogleAppsScript.js` and paste it in
4. Click **Save** (disk icon) and name the project "Time Card API"

### Step 3: Deploy as Web App

1. Click **Deploy → New deployment**
2. Click the gear icon next to "Type" and select **Web app**
3. Fill in:
   - Description: `Time Card API`
   - Execute as: **Me** (your email)
   - Who has access: **Anyone**
4. Click **Deploy**
5. Click **Authorize access** and follow the prompts
   - Choose your Google account
   - Click "Advanced" → "Go to Time Card API (unsafe)" 
   - Click "Allow"
6. **Copy the Web app URL** - you'll need this!

### Step 4: Set Up Your Sheet Headers

1. Go back to your spreadsheet tab
2. Refresh the page
3. You'll see a new menu: **⏱️ Time Card**
4. Click **⏱️ Time Card → Setup Sheet Headers**
5. Your sheet is now formatted and ready!

### Step 5: Configure the Web App

1. Open `index.html` in a text editor
2. Find this line near the top of the script section:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with the URL you copied in Step 3
4. Save the file

### Step 6: Host the Web App (Free Options)

**Option A: GitHub Pages (Recommended)**
1. Create a GitHub account if you don't have one
2. Create a new repository called `timecard`
3. Upload `index.html` to the repository
4. Go to Settings → Pages
5. Set source to "main" branch and save
6. Your app is live at: `https://yourusername.github.io/timecard`

**Option B: Netlify Drop (Easiest)**
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the `timecard` folder onto the page
3. Done! You get a random URL instantly

**Option C: Local Network Only**
- Just open `index.html` in any browser
- Works for testing but not great for field use

---

## 📱 Sharing with Your Crew

Once hosted, workers just need to:

1. **Scan the QR code** (generate one at [qr-code-generator.com](https://www.qr-code-generator.com))
2. **Add to Home Screen** for app-like experience:
   - iPhone: Share → Add to Home Screen
   - Android: Menu (3 dots) → Add to Home Screen
3. **Enter their name once** (it's remembered)
4. **Tap, tap, submit!**

---

## ⚙️ Customization

### Change Job Sites

Edit the `<select>` options in `index.html`:

```html
<select class="job-select" id="jobSite">
    <option value="">Select a job site...</option>
    <option value="Your Project 1">Your Project 1</option>
    <option value="Your Project 2">Your Project 2</option>
    <!-- Add more as needed -->
</select>
```

### Change Quick Time Buttons

Edit the button values in `index.html`:

```html
<button type="button" class="quick-btn" onclick="setQuickTime('05:30', '14:00')">5:30-2</button>
```

### Change Timezone

Edit this line in `GoogleAppsScript.js`:

```javascript
timeZone: 'America/Boise', // Change to your timezone
```

Common options:
- `America/Los_Angeles` (Pacific)
- `America/Denver` (Mountain)  
- `America/Chicago` (Central)
- `America/New_York` (Eastern)

### Change Company Name

Edit the footer in `index.html`:

```html
<footer>
    Your Company Name Here
</footer>
```

---

## 📊 Your Google Sheet Data

Each submission creates a row with:

| Column | Data |
|--------|------|
| Date | Date worked (e.g., 12/4/2025) |
| Name | Worker's name |
| Job Site | Selected project/location |
| Time In | Start time |
| Time Out | End time |
| Hours | Calculated decimal hours |
| Notes | Optional notes |
| Submitted | When the entry was submitted |

---

## 🔒 Security Notes

- The Google Apps Script URL is publicly accessible (required for anonymous submissions)
- Anyone with the URL *could* submit fake data
- For higher security, consider adding a simple password field
- All data goes directly to YOUR Google account's spreadsheet

---

## 🐛 Troubleshooting

**"App not configured yet" error**
→ You haven't replaced the placeholder URL in `index.html`

**Submissions not appearing in sheet**
→ Check that you deployed with "Anyone" access
→ Try the "Get API URL" option in the Time Card menu and re-copy

**"Authorization required" when deploying**
→ This is normal. Click through the warnings (Google just doesn't recognize the script)

**Workers can't access the page**
→ Make sure your hosting is public, not set to private

---

## 💡 Pro Tips

1. **Print a QR code** and post it in the job trailer
2. **Set up a weekly email** from Google Sheets with hours summary
3. **Add conditional formatting** to highlight overtime (>8 hours)
4. **Create a pivot table** for payroll summaries

---

## Need Help?

This app is intentionally simple. If you need more features like:
- GPS verification
- Photo attachments  
- Manager approvals
- Integration with payroll systems

...you'll want to explore dedicated time tracking solutions like Busybusy, ClockShark, or TSheets.
