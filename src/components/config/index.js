import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bakery from "../bakery/Bakery.js";
import Grocery from "../grocery/Grocery.js";
import Meal from "../meal/Meal.js";
import Partner from "../partner/Partner.js";


export default function index() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Bakery />} />
            <Route path="/" element={<Grocery />} />
            <Route path="/" element={<Meal />} />
            <Route path="/" element={<Partner />} />
        </Routes>
    </BrowserRouter>
  )
}
