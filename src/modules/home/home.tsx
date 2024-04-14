import Header from '@/shared/widgets/header/header'
import React from 'react'
import Banner from './features/banner'
import Branding from './features/branding'
import FeatureHighlight from './features/feature.highlight'
import Pricing from './features/pricing'
import Footer from '@/shared/widgets/footer'

const Home = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <Branding/>
        <FeatureHighlight/>
        <Pricing/>
        <Footer/>
    </div>
  )
}

export default Home