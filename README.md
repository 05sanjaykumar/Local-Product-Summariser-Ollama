# 🧠 AI-Powered Product Summariser (Local + Bing + Ollama)

A full-stack application that fetches product information from the web using **Bing Search** and generates concise AI-powered summaries **locally** using **Ollama** — no cloud LLMs required.

---

## 🚀 Features

* 🔍 **Web Search Integration**: Pulls product data via Bing Search.
* 🧠 **Local AI Summarization**: Uses Ollama to summarize data on your machine.
* 💬 **Interactive Frontend**: Built with modern React + TypeScript + Vite.
* 🔌 **Backend API**: Node.js/Express handles pricing and search logic.
* 🐳 **Dockerized**: Easily run with `docker-compose` for a portable dev setup.

---

## 🗂 Directory Overview

```
05sanjaykumar-local-product-summariser-ollama/
├── docker-compose.yml      # Runs the entire stack
├── .env.example            # Example environment variables

├── ai-summariser/          # Python backend for AI summarization
│   ├── app.py              # Flask app using Ollama
│   └── ai_utils.py         # Core summarization logic

├── backend/                # Node.js Express server
│   └── Routes/
│       └── GetPrice.js     # Scrapes or fetches price info

├── frontend/               # Vite + React + TS client
│   └── pages/
│       └── Dashboard.tsx   # Main UI interface

└── ollama/                 # Ollama local model setup
    └── entrypoint.sh       # Starts Ollama server
```

---

## 🛠️ Getting Started

### 1. Clone and Setup

```bash
git clone https://github.com/05sanjaykumar/Local-Product-Summariser-Ollama
cd Local-Product-Summariser-Ollama
cp .env.example .env
```

### 2. Start with Docker

```bash
docker-compose up --build
```

---

## 🌐 Usage

1. Enter a product name in the UI.
2. The backend uses Bing Search to find product-related pages.
3. Pages are summarized locally by Ollama-powered AI.
4. Summaries and price data are shown in a clean dashboard.

---

## 📦 Tech Stack

* **Frontend**: React + TypeScript + Vite
* **Backend**: Node.js + Express
* **AI Engine**: Python + Ollama + LLMs (locally hosted)
* **Containerization**: Docker + docker-compose

---

## 🧪 Example Prompt

> "iPhone 14 Pro Max" → Generates summary including top features, reviews, and price estimates.

---

## 🧠 Future Ideas

* Add vector search or embeddings for better semantic matching
* Plug in other LLMs (LLaMA, Mistral, etc.) via Ollama
* Extend UI with filters or sorting for comparison
* Save summaries locally or to a cloud store

---

## 🏞️ Demo

<img width="1435" alt="Screenshot 2025-06-21 at 11 36 13 PM" src="https://github.com/user-attachments/assets/0c983a88-446b-4542-b16e-803bc3bfd8be" />

---


## 🛡 License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International License**.

You are free to:
- Use, modify, and share for **educational or personal projects**
- Submit contributions via PRs

However:
- ❌ **Commercial use is strictly prohibited** (e.g., reselling, SaaS, bundling in paid tools)

🔗 [View full license](https://creativecommons.org/licenses/by-nc/4.0/)
