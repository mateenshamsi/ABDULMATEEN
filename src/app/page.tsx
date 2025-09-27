import Navbar from '@/components/Navbar'
import React from 'react'
import GithubStreak from '@/components/GithubStreak'
import Hero from '@/components/Hero'
import WorkExperience from '@/components/WorkExperience'
function page() {
  return (
    <div className='pb-10 min-h-screen'> {/* Add min-h-screen */}
      <Navbar/>
      <Hero/>
      <WorkExperience/>
      
      <GithubStreak username='mateenshamsi'/>
    </div>
  )
}

export default page