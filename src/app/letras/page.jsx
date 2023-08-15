"use client"
import NavBar from "../pages/Navbar/page";
import Card from "../pages/Card/page";
import Footer from "../pages/Footer/page";

export default function letras() {
    return (
        <>
        <NavBar />
         <div>
             <div className="mt-40">
                 <h2>Que letra está faltando?</h2>
                 <p></p>
                 <div className="flex justify-center items-center max-w-full">
                     <iframe className=" border-gray-800 rounded-md" src="https://wordwall.net/pt/embed/b83e089bddff4850bafc1403fabc8a4c?themeId=2&templateId=3&fontStackId=0" width="900" height="580" frameborder="0" allowfullscreen></iframe>
                 </div>
                 
             </div>
         </div>
         <Card />
         <Footer />
       
         </>
    );
}