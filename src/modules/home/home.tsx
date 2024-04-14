import Header from '@/shared/widgets/header/header'
import React from 'react'
import Banner from './features/banner'
import Branding from './features/branding'
import FeatureHighlight from './features/feature.highlight'
import Pricing from './features/pricing'

const Home = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <Branding/>
        <FeatureHighlight/>
        <Pricing/>
    </div>
  )
}

export default Home