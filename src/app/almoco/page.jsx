"use client";
import NavBar from "../pages/Navbar/page";
import Card from "../pages/Card/page";
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
         <Card />
         <Footer />
         </>
    );
}