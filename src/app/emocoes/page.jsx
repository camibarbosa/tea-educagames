"use client"
import NavBar from "../pages/Navbar/page";
import Card from "../pages/Card/page";
import Footer from "../pages/Footer/page";

export default function emocoes() {
    return (
        <>
        <NavBar/>
         <div>
             <div className="mt-40">
                 <h2>Sentidos das emoções</h2>
                 <p></p>
                 <div className="flex justify-center items-center">
                     <iframe className=" border-gray-800 rounded-md" src="https://wordwall.net/pt/embed/87f67c76dd5c4e27a55090e52f2cd698?themeId=43&templateId=5&fontStackId=0" width="900" height="580" frameborder="0" allowfullscreen></iframe>
                 </div>
                 
             </div>
         </div>
         <Card />
         <Footer />
       
         </>
    );
}