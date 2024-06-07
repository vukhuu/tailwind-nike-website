import {CustomerReviews, Footer, Hero, PopularProducts, Services, SpecialOffers, Subscribe, SuperQuality } from "./sections"
import Nav from "./components/Nav"

const App = () => (
  <main className="relative">
    <Nav />

    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>

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
      <SpecialOffers />
    </section>

    <section className="padding bg-pale-blue">
      <CustomerReviews />
    </section>

    <section className="w-full py-16 padding-x sm-py-32">
      <Subscribe />
    </section>

    <section className="bg-black pb-8 padding-x padding-t">
      <Footer />
    </section>
  </main>
)

export default App