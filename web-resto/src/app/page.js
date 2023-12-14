import Image from 'next/image'
import Heroes from '@/components/Heroes'
import CatNav from '@/components/CatNav'
import Footer from '@/components/Footer'
import AboutUs from '@/components/AboutUs'
import FAQContainer from '@/components/FaqContainer'
export default function Home() {
  return (
    <div>
      <Heroes />
      <CatNav />
      <FAQContainer />
      <AboutUs />
      <Footer />
    </div>
  )
}
