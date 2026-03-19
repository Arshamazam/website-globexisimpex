# Econobility - Premium B2B Export Platform

A production-ready B2B platform built with React (Frontend) and Flask (Backend). Specializing in Himalayan Pink Salt and industrial exports.

## 📁 Project Structure

- `/backend`: Flask REST API with SQLAlchemy ORM and SQLite.
- `/frontend`: React.js with Vite, Tailwind CSS, and Framer Motion for animations.

## 🚀 Getting Started

### 1. Backend Setup
1. Navigate to the backend folder: `cd backend`
2. Create a virtual environment: `python -m venv venv`
3. Activate it: `venv\Scripts\activate` (Windows) or `source venv/bin/activate` (Mac/Linux)
4. Install dependencies: `pip install -r requirements.txt`
5. Run the app: `python run.py` (This will also initialize and seed the database).
   - API will be available at `http://localhost:5000/api`

### 2. Frontend Setup
1. Navigate to the frontend folder: `cd frontend`
2. Install dependencies: `npm install`
3. Run the dev server: `npm run dev`
   - Platform will be available at `http://localhost:5173`

## 💎 Core Features
- **RFQ System**: Lead generation form with product tracking.
- **Product Ecosystem**: Advanced catalog with specs and categories.
- **Trust Center**: Integrated certifications and client testimonials.
- **AI-Ready**: Integrated UI placeholders for Pricing Estimators and Product Finders.
- **Premium Design**: Mobile-first, glassmorphism-inspired UI with smooth Framer Motion animations.

## ⚙️ Tech Stack
- **Frontend**: React, Tailwind CSS, Lucide Icons, Framer Motion, Axios.
- **Backend**: Python Flask, Flask-SQLAlchemy, Flask-CORS.
- **Database**: SQLite (Dev) / PostgreSQL compatible models.
