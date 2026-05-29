import { useState } from "react"

import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import Dashboard from "./components/Dashboard"

function App() {

  const [selectedMenu, setSelectedMenu] = useState("Dashboard")

  const [searchTerm, setSearchTerm] = useState("")

  const [links, setLinks] = useState(() => {

    const savedLinks =
      localStorage.getItem("quickLinks")

    return savedLinks
      ? JSON.parse(savedLinks)
      : []

  })


  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-900 flex">

      <Sidebar
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
        links={links}
      />


      <div className="flex-1">

        <Navbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />


        <Dashboard
          selectedMenu={selectedMenu}
          searchTerm={searchTerm}
          links={links}
          setLinks={setLinks}
        />

      </div>

    </div>
  )
}

export default App