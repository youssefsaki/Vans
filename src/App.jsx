import {
  Vans,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer
} from './sections';

import NavBar from './components/NavBar';


const App = () => {
  return (
    <main className="relative">
      <NavBar />
      <section className=''>
        <Vans />
        <section className="padding">
          <PopularProducts />
        </section>
        <section className="padding">
          <SuperQuality />
        </section>
        <section className="py-10 padding-x">
          <Services />
        </section>
        <section className="padding">
          <SpecialOffer />
        </section>
        <section className="padding bg-pale-blue">
          <CustomerReviews />
        </section>
        <section className="w-full py-16 padding-x sm:py-32">
          <Subscribe /> 
        </section>
        <section className="pb-8 bg-black padding-x padding-t">
          <Footer />
        </section>
      </section>
    </main>
  )
}

export default App
