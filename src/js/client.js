import React from "react"
import ReactDOM from "react-dom"

import Layout from "./pages/Speedometer/Tacho_Layout"

const app = document.getElementById('app')

// In diesem Projekt wurde schon der React Router genutzt. Der Wechsel der Views ist in pages/Layout.js abgebildet.
ReactDOM.render(<Layout />,app)
