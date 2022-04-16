import React from 'react'
import { Link } from 'react-router-dom'

export interface HomePageProps {}

// eslint-disable-next-line no-empty-pattern
const HomePage = ({}: HomePageProps) => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profits">Profits</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/calendar">Calendar</Link>
        </li>
      </ul>
    </div>
  )
}

export default HomePage
