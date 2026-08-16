# 📝 React Markdown Note-Taking App

A fast, modern, and privacy-focused markdown note-taking web application built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**. All your notes are saved locally in your browser using `localStorage`.

---

## ✨ Features

- 📑 **Markdown Support**: Rich formatting for your notes, including headers, code blocks, lists, links, and text formatting.
- 🔍 **Full-Text & Tag Filtering**:
  - Search notes dynamically by title/content in real-time.
  - Multi-tag filtering powered by **React-Select** to quickly find related topics.
- 🗂️ **Full Note Lifecycle**:
  - Create new notes with multi-select tag assignments.
  - View individual note details with rendered markdown.
  - Edit existing notes or delete them as needed.
- 💾 **Local-First Storage**: Persistent storage using browser `localStorage`—no backend or account required.
- ⚡ **Ultra Fast**: Powered by **Vite** for lightning-quick hot module replacement (HMR) and optimized builds.
- 🎨 **Modern UI**: Styled with **Tailwind CSS** for a clean, responsive, and intuitive user experience.

---

## 🛣️ Application Routes

| Route | Description |
| :--- | :--- |
| `/` | **Home / Note List**: View all saved notes, search by title, and filter by multiple tags using React-Select. |
| `/new` | **Create Note**: Page to write a new markdown note and tag it. |
| `/:id` | **View Note**: Detailed view rendering the formatted markdown note. |
| `/:id/edit` | **Edit Note**: Modify the content, title, or tags of an existing note. |

---

## 🛠️ Tech Stack

- **Frontend Framework**: [React 18+](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Tag Selection**: [React-Select](https://react-select.com/)
- **Markdown Rendering**: [react-markdown](https://github.com/remarkjs/react-markdown)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Persistence**: Browser `localStorage` API

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v20.0 or higher recommended)
- `npm`, `yarn`, or `pnpm`
