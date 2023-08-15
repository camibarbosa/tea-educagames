"use client"
import NavBar from "../pages/Navbar/page";
import Card from "../pages/Card/page";
import Footer from "../pages/Footer/page";

export default function animais() {
    return (
        <>
        <NavBar  />
         <div>
             <div className="mt-40">
                 <h2>O que o animal faz?</h2>
                 <p></p>
                 <div className="flex justify-center items-center">
                     <iframe className=" border-gray-800 rounded-md" src="https://wordwall.net/pt/embed/b0439ff1fc4d43d9867d10c43c53ab41?themeId=2&templateId=2&fontStackId=0" width="900" height="580" frameborder="0" allowfullscreen></iframe>
                 </div>
                
             </div>
         </div>
         <Card />
         <Footer />
       
         </>
    );
}