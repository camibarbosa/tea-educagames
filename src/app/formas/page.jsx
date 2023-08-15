"use client"
import NavBar from "../pages/Navbar/page";
import Card from "../pages/Card/page";
import Footer from "../pages/Footer/page";

export default function formas() {
    return (
        <>
        <NavBar  />
         <div>
             <div className="mt-40">
                 <h2>Formas Geometricas</h2>
                 <div className="flex justify-center items-center">
                 <iframe className="border-gray-800 rounded-md" src="https://wordwall.net/pt/embed/ea5820f88e274c20b5850798b10a092a?themeId=1&templateId=46&fontStackId=0" width="900" height="580" frameborder="0" allowfullscreen></iframe>
                 </div>
             </div>
         </div>
         <Card />
         <Footer />
         </>
    );
}