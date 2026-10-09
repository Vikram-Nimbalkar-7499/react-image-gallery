# 🖼️ React Image Gallery

A responsive image gallery built with **React, Vite, Axios, and Tailwind CSS**. This project fetches images from the [Picsum Photos API](https://picsum.photos/) and displays them in a clean gallery layout with pagination and loading states.

🔗 **GitHub Repository:** [react-image-gallery](https://github.com/Vikram-Nimbalkar-7499/react-image-gallery)

---

## ✨ Features

- 🖼️ **Dynamic Image Gallery** — Fetch and display images from an external API.
- 🔄 **API Integration** — Retrieve image data using Axios.
- 📄 **Pagination** — Navigate between image pages using Previous and Next buttons.
- ⏳ **Loading State** — Display a loading message while images are being fetched.
- 📱 **Responsive Design** — Adapt the gallery layout to different screen sizes.
- 🧩 **Reusable Components** — Separate gallery cards and pagination controls into components.
- ⚡ **Fast Development** — Powered by Vite and Hot Module Replacement (HMR).
- 🎨 **Tailwind CSS** — Style the interface with utility-first CSS classes.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | Component-based user interface |
| Vite | Development server and build tool |
| JavaScript (ES6+) | Application logic |
| Axios | HTTP requests to the API |
| Tailwind CSS | Responsive styling |
| Picsum Photos API | Image data source |
| Lucide React | Icons, if used in the project |

## 📸 How It Works

1. The gallery loads and requests images from the Picsum Photos API.
2. Axios retrieves the image data.
3. React stores the response in state using `useState`.
4. `useEffect` fetches images when the selected page changes.
5. Reusable card components display the images.
6. Previous and Next buttons update the page number and fetch another set of images.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed.
- npm installed with Node.js.
- Git installed.

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Vikram-Nimbalkar-7499/react-image-gallery.git
```

**2. Navigate to the project folder**

```bash
cd react-image-gallery
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the local URL**

Open the URL printed in your terminal, usually `http://localhost:5173`.

## 🌐 API Reference

This project uses the Picsum Photos API.

**Endpoint:**

```text
https://picsum.photos/v2/list?page=1&limit=10
```

- `page` — Selects the page of image results.
- `limit` — Specifies the number of images requested.

API documentation: [Picsum Photos](https://picsum.photos/)

## 📂 Project Structure

```text
react-image-gallery/
├── public/
├── src/
│   ├── component/
│   │   ├── Card.jsx
│   │   └── Buttons.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

*Note: Adjust the structure above to match your actual project files.*

## 🧠 React Concepts Practiced

- Functional components
- Props and component reusability
- `useState` for managing application state
- `useEffect` for fetching data when dependencies change
- Axios and asynchronous API requests
- Rendering lists using `.map()`
- React `key` props
- Conditional rendering and loading states
- Responsive layouts with Tailwind CSS

## 🔮 Future Improvements

- [ ] Search and filter images.
- [ ] Add skeleton loaders and error retry functionality.
- [ ] Implement infinite scrolling with `IntersectionObserver`.
- [ ] Add a full-screen image preview.
- [ ] Add favorites and persist them with `localStorage`.
- [ ] Deploy the application online.

## 👨‍💻 Author

**Vikram Nimbalkar**

GitHub: [@Vikram-Nimbalkar-7499](https://github.com/Vikram-Nimbalkar-7499)

---

⭐ If you find this project useful, consider giving the repository a star!

*Built while learning React, API integration, and modern frontend development.*