import React from 'react'

const Homepage = ({handleLogout}) => {
  return (
    <section className="home">
      <nav>
          <h2>Welcome</h2>
          <button onClick={handleLogout}>Logout</button>
      </nav>
    </section>
  )
}

export default Homepage;
