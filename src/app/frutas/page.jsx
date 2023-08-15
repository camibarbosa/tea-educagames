"use client"
import NavBar from "../pages/Navbar/page";
import Card from "../pages/Card/page";
import Footer from "../pages/Footer/page";

export default function frutas() {
    return (
        <>
        <NavBar />
         <div>
             <div className="mt-40">
                 <h2>Frutas e suas cores</h2>
                 <p></p>
                 <div className="flex justify-center items-center">
                     <iframe className=" border-gray-800 rounded-md" src="https://wordwall.net/pt/embed/4e7a6d27731d4aaa8d04abd078d5d985?themeId=1&templateId=3&fontStackId=0" width="900" height="580" frameborder="0" allowfullscreen></iframe>
                 </div>
                 
             </div>
         </div>
         <Card />
         <Footer />
       
         </>
    );
}