"use client";
import NavBar from "../pages/Navbar/page";
import Footer from "../pages/Footer/page";

export default function almoco() {
    return (
        <>
        <NavBar  />
         <div>
             <div className="mt-40">
                 <h2>Hora do almoço!</h2>
                 <p></p>
                 <div className="flex justify-center items-center">
                     <iframe className=" border-gray-800 rounded-md" src="https://wordwall.net/pt/embed/14b826b8e9c242acb0d020949da415c1?themeId=21&templateId=30&fontStackId=0" width="900" height="580" frameborder="0" allowfullscreen></iframe>
                 </div>      
             </div>
         </div>
         <div className="w-full">
            <div className=" mt-40 ml-8 w-72 p-4 bg-gray-200 rounded-lg shadow-md">
                <span className="font-bold text-gray-800">Como jogar?</span>
                <p className="text-gray-700">Toque na tela ou clique no mouse para escolher a opção desejada.</p>
            </div>
        </div>
         <Footer />
         </>
    );
}