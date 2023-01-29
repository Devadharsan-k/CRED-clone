import React from 'react';
import FeelSpecial from '../components/FeelSpecial/index';
import HeroSection from '../components/HeroSection';
import WindowPeek from '../components/WindowPeek';
import AppRating from './../components/AppRateing/index';
import BrandsLove from './../components/BrandsLove/index';
import Footer from './../components/common/Footer/index';
import Header from './../components/common/Header/index';
import CredExperience from './../components/CredExperience/index';
import CredSecurity from './../components/CredSecurity/index';
import CredStory from './../components/CredStory/index';
import MobileScroll from './../components/MobileScroll/index';
import ProductShowcase from './../components/ProductShowcase/index';

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProductShowcase />
      <FeelSpecial />
      <BrandsLove />
      <CredExperience />
      <MobileScroll />
      <div className='non-mobile'>
      <WindowPeek />
      </div>
      <CredSecurity />
      <CredStory />
      <AppRating />
      <Footer />
    </div>
  )
}

export default HomePage