import Navbar from '@/components/Navbar'
import React from 'react'
import GithubStreak from '@/components/GithubStreak'
import Hero from '@/components/Hero'
import WorkExperience from '@/components/WorkExperience'
import Cat from '@/components/common/Cat'
import Projects from '@/components/Projects'
function page() {
  return (
    <div className='pb-10 min-h-screen'> {/* Add min-h-screen */}
      <Navbar/>
      
      <Hero/>
      <WorkExperience/>
      
      <GithubStreak username='mateenshamsi'/>
      <Projects/>
    </div>
  )
}

export default page