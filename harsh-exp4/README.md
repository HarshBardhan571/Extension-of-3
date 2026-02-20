# Harsh Bardhan Singh — Portfolio (Experiment 4)

**Deployment URL format:** `{uid}-4-harsh-bardhan-singh.vercel.app`
**Example:** `23bai70XXX-4-harsh-bardhan-singh.vercel.app`

---

## 📸 Screenshots
> Add 2–3 screenshots of the running app in the `/screenshots` folder before submission.

---

## 🧪 Experiment 4 — What's Implemented

### ✅ useContext (Global State)
- `src/context/AppContext.jsx` — provides `darkMode`, `setDarkMode`, `userProfile`, `state`, `dispatch` globally
- Used in: **Navbar**, **HeroSection**, **Home**, **Projects**, **Contact**, **Analytics**, **Footer**

### ✅ useReducer (Structured State)
- `src/reducer/appReducer.js` — manages skills list with **5 actions**:
  1. `ADD_SKILL` — add a new skill
  2. `REMOVE_SKILL` — remove a skill by id
  3. `TOGGLE_FAVORITE` — star/unstar a skill
  4. `CLEAR_FAVORITES` — reset all favorites
  5. `SET_FILTER` — filter skills by category
  6. `SET_SEARCH` — search by name

### ✅ useMemo (Performance Optimization)
- Used in `Analytics.jsx` to derive:
  - `filtered` — filtered + searched skills list
  - `totalSkills`, `strongSkills`, `avgLevel`, `favoriteCount`, `topSkill`
  - Only recalculates when `state.skills`, `state.filter`, or `search` changes

### ✅ React Router (Multi-Page Navigation)
- 4 pages: `/` Home, `/projects` Projects, `/contact` Contact, `/analytics` Analytics
- Active link highlighting via `NavLink`
- Mobile drawer navigation

### ✅ Pages
| Page | Experiment |
|------|-----------|
| Home | Exp 2 |
| Projects | Exp 3 |
| Contact | Exp 3 |
| Analytics | **Exp 4 (New)** |

### ✅ UI Library
- **Material UI (MUI)** throughout
- Dark / Light mode toggle via Context

---

## 🚀 Setup & Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev
# Opens at http://localhost:5173

# 3. Build for production
npm run build
```

## 🚢 Deploy to Vercel

```bash
git init
git add .
git commit -m "Experiment 4 - Harsh Bardhan Singh"
git remote add origin https://github.com/YOUR_USERNAME/harsh-exp4.git
git push -u origin main
```
Then import on vercel.com and deploy.

**Set deployment URL:** `{your-uid}-4-harsh-bardhan-singh`

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── Navbar.jsx        ← useContext (theme + user)
│   ├── Footer.jsx        ← useContext
│   ├── HeroSection.jsx   ← useContext
│   ├── CardComponent.jsx ← reusable
│   ├── ThemeToggle.jsx   ← useContext
│   └── FilterBar.jsx     ← useContext + dispatch
├── context/
│   └── AppContext.jsx    ← createContext + useReducer + useState
├── reducer/
│   └── appReducer.js     ← 5 actions
├── pages/
│   ├── Home.jsx          ← Exp 2
│   ├── Projects.jsx      ← Exp 3
│   ├── Contact.jsx       ← Exp 3
│   └── Analytics.jsx     ← Exp 4 (useReducer + useMemo + useContext)
├── App.jsx               ← BrowserRouter + Routes
├── main.jsx
└── index.css
```
