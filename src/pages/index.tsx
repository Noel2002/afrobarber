import Haircuts from "@/components/home/Haircuts";
import Products from "@/components/home/Products";
import Team from "@/components/home/Team";
import Footer from "@/components/system/footer";
import Header from "@/components/system/header";

const Jumbotron = ()=>{
  return (
    <section className="bg-center bg-no-repeat bg-[url('/jumbotron.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="flex flex-col items-center justify-center text-center py-24 lg:py-56">
            <h1 
              className="uppercase mb-4 text-xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
            >
              unleash your best look
            </h1>
            <p 
              className="mb-8 text-sm font-light text-gray-300 lg:text-xl sm:px-16 lg:px-48"
            >
                where precession meets style
            </p>
        </div>
    </section>

  )
}
export default function Home() {
  return (
    <>
      <Header />
      <Jumbotron />
      <Haircuts />
      <Team />
      <Products />
      <Footer />
    </>

  );
}
