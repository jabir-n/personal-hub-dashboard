import { useState, useEffect } from "react"

import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import Dashboard from "./components/Dashboard"

function App() {

  const [selectedMenu, setSelectedMenu] = useState("Dashboard")

  const [searchTerm, setSearchTerm] = useState("")

  const [links, setLinks] = useState([])

  const [categories, setCategories] = useState([])


  useEffect(() => {

    async function fetchLinks() {

      try {

        const response = await fetch(
          "http://127.0.0.1:8000/api/links/"
        )

        const data = await response.json()

        setLinks(data)

      }

      catch (error) {

        console.log(error)

      }

    }


    async function fetchCategories() {

      try {

        const response = await fetch(
          "http://127.0.0.1:8000/api/categories/"
        )

        const data = await response.json()

        setCategories(data)

      }

      catch (error) {

        console.log(error)

      }

    }


    fetchLinks()
    fetchCategories()

  }, [])


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
          categories={categories}
        />

      </div>

    </div>
  )
}

export default App