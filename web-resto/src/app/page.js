import Image from 'next/image'
import Heroes from '@/components/Heroes'
import CatNav from '@/components/CatNav'
import Footer from '@/components/Footer'
export default function Home() {
  return (
    <div>
      <Heroes />
      <CatNav />
      <Footer />
      
    </div>
  )
}
