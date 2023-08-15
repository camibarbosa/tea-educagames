"use client"
import NavBar from "../pages/Navbar/page";
import Footer from "../pages/Footer/page";

export default function palavras() {
    return (
        <>
        <NavBar />
         <div>
             <div className="mt-40">
                 <h2>Bichos da fauna brasileira</h2>
                 <p></p>
                 <div className="flex justify-center items-center">
                     <iframe className="flex justify-center items-center" src="https://wordwall.net/pt/embed/094341dd752041848a5b42c8e0b80720?themeId=52&templateId=25&fontStackId=0" width="900" height="580" frameborder="0" allowfullscreen></iframe> 
                 </div>

                 <div className="w-full">
                     <div className=" mt-40 ml-8 w-72 p-4 bg-gray-200 rounded-lg shadow-md">
                        <span className="font-bold text-gray-800">Como jogar?</span>
                        <p className="text-gray-700">Toque na tela ou clique no mouse para escolher a opção desejada.</p>
                     </div>
                 </div>   
             </div>
         </div>
         <Footer />
         </>
    );
}
