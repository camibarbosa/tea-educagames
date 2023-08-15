"use client"
import NavBar from "../pages/Navbar/page";
import Card from "../pages/Card/page";
import Footer from "../pages/Footer/page";

export default function palavras() {
    return (
        <>
        <NavBar />
         <div>
             <div className="mt-40">
                 <h2>Que palavra começa com a letra...</h2>
                 <p></p>
                 <div className="flex justify-center items-center">
                     <iframe className=" border-gray-800 rounded-md" src="https://wordwall.net/pt/embed/5703dcfcafe94617b645075cd3cf604e?themeId=46&templateId=5&fontStackId=0" width="900" height="580" frameborder="0" allowfullscreen></iframe>
                 </div>
                 
             </div>
         </div>
         <Card />
         <Footer />
       
         </>
    );
}