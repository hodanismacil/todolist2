# Taskify – Minimalist Task Management Application

Taskify is a clean, minimalist, and highly intuitive To-Do application built to showcase modern frontend development practices. It focuses on exceptional UI/UX, responsive layouts, and efficient client-side data persistence.

## ✨ Features
- **Dark Mode Aesthetic:** A beautifully crafted, eye-friendly minimalist dark interface.
- **Data Persistence:** Uses browser `LocalStorage` to ensure user tasks are saved and never lost upon page refreshes.
- **Dynamic State Management:** Seamlessly handle adding and deleting tasks with real-time UI updates.
- **Robust Data Structure:** Tasks are managed using a structured JSON array with uniquely generated IDs for safe rendering and filtering.
- **Fully Responsive:** Perfectly optimized for mobile, tablet, and desktop screens.

## 🛠️ Tech Stack
- **Framework:** React (with TypeScript for type safety)
- **Styling:** Tailwind CSS (Clean & Minimalist design principles)
- **State & Storage:** React Hooks (`useState`, `useEffect`) & Web Storage API (`localStorage`)

## 📦 Data Structure Example
The application manages data client-side using a clean object architecture:
```json
[
  {
    "id": 1782960799107,
    "text": "waxan rabaa inan shaqoyin badan qabto manata",
    "completed": false
  }
]



