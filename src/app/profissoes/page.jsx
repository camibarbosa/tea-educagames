"use client"
import NavBar from "../pages/Navbar/page";
import Card from "../pages/Card/page";
import Footer from "../pages/Footer/page";

export default function profissoes() {
    return (
        <>
        <NavBar />
         <div>
             <div className="mt-40">
                 <h2>Profissões</h2>
                 <p></p>
                 <div className="flex justify-center items-center">
                 <iframe className="border-gray-800 rounded-md" src="https://wordwall.net/pt/embed/5e4fbebfd04745a2a85d50a60a0a9bf0?themeId=1&templateId=5&fontStackId=0" width="900" height="580" frameborder="0" allowfullscreen></iframe>
                 </div>   
             </div>
         </div>
         <Card />
         <Footer />
         </>
    );
}