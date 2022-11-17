import React from 'react'
import Featured from '../components/featured'
import Highlights from '../components/Highlights'
import Landing from '../components/Landing'
import Discounted from '../components/ui/Discounted'
import Explore from '../components/ui/Explore'

export default function Home() {
  return (
<>
        <Landing />
        <Highlights />
        <Featured />
        <Discounted />
        <Explore />

        </>
    
  )
}
