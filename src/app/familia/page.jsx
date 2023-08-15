"use client"
import NavBar from "../pages/Navbar/page";
import Footer from "../pages/Footer/page";

export default function membrosFamilia() {
    return (
        <>
        <NavBar  />
         <div>
             <div className="mt-40">
                 <h2 >Membros da família</h2>
                 <p></p>
                 <div className="flex justify-center items-center">
                     <iframe className=" border-gray-800 rounded-md" src="https://wordwall.net/pt/embed/8265bb4dda764fbdb6882243d8fe2fe3?themeId=2&templateId=22&fontStackId=0" width="900" height="580" frameborder="0" allowfullscreen></iframe>
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