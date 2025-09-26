import Navbar from '@/components/Navbar'
import React from 'react'
import GithubStreak from '@/components/GithubStreak'
import Hero from '@/components/Hero'
function page() {
  return (
    <div><Navbar/>
    <Hero/>
    <GithubStreak username='mateenshamsi'/>
    
    </div>
  )
}

export default page