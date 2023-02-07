import Head from "next/head";
import SmallCard from "../SmallCards.json";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCards from "../components/SmallCards";
import MediumCard from "../MediumCard.json";
import MediumCards from "../components/MediumCards";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

const Home = ({ exploreData, cardsData }: any) => {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/* Pull some data from a server -  API  endpoint*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }: any) => (
              <SmallCards
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere!</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -m-3">
            {cardsData?.map(({ img, title }: any) => (
              <MediumCards key={img} img={img} title={title} />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const exploreData =
    SmallCard ||
    (await fetch("https://links.papareact.com/pyp").then((res) => res.json()));
  const cardsData =
    MediumCard ||
    (await fetch("https://links.papareact.com/zp1").then((res) => res.json()));
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
