import HomePageWriteUps from './components/homePageWriteUps'
import CardComponent from './components/cardCompo'
import HomeHero from './components/homeHeroCompo'
export default function Home() {
  return (
    <div>
      <HomeHero/>
     <HomePageWriteUps/>
     <CardComponent/>
    </div>
    )
  }