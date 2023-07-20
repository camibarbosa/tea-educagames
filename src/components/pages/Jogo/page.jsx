import Card from "../Card/page";
import Footer from "../Footer/page";
import NavBar from "../Navbar/page";
import Link from "next/link";

export default function Jogo() {
    return (
        <>
       <NavBar />
        <div>
            <div>
                <h2 >Planetas do Sistema Solar</h2>
                <p></p>
                <div className="flex justify-center items-center">
                    <iframe className=" border-gray-800 rounded-md" src="https://wordwall.net/pt/embed/083f3dad999d45d399f774c3f4939a7a?themeId=2&templateId=25&fontStackId=0" width="800" height="580" frameborder="0" allowfullscreen></iframe>
                </div>
                <div className="pt-20 pl-10">
                    <Link className="bg-blue-700 py-3 px-6 rounded-md text-lg text-white hover:bg-blue-600" href="/index.html" class="voltar">&laquo;</Link>
                </div>
            </div>
        </div>
        <Card />
        <Footer />
      
        </>
    )
}