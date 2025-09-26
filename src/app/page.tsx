import Navbar from '@/components/Navbar'
import React from 'react'
import GithubStreak from '@/components/GithubStreak'
function page() {
  return (
    <div><Navbar/>
    <GithubStreak username='mateenshamsi'/>
    </div>
  )
}

export default page