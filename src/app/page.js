import Head from "next/head";
import Card from "@/app/pages/Card/page";
import NavBar from "@/app/pages/Navbar/page";
import Slide from "@/app/pages/Slide/page";
import Footer from "@/app/pages/Footer/page";
import Sobre from "@/app/pages/Sobre/page";
import Contato from "@/app/pages/Contato/page";

export default function Home() {
  return (
    <div>
      <Head>
        <title>TEA EducaGames</title>
        <meta name="description" content="Generated by Camila"></meta>
        <link rel="icon" href="/assets/icon.png"/>
      </Head>
      <NavBar/>
      <Slide target='_blank'/>
      <Card target='_blank'/>
      <Sobre target='_blank'/>
      <div className="p-4 max-w-3xl mx-auto">
            <h2>Contato</h2>
            <p className="text-center font-semibold text-gray-800 text-lg">Deixe um comentário</p>
            <p className="mt-8 font-semibold text-gray-600 text-sm">Por favor preencha os campos abaixo</p>
            <Contato target='_blank'/>
        </div>
      <Footer target='_blank' />
    </div>
  )
}
