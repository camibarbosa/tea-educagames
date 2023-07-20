import react from "react";

export default function animais() {
    return (
        <>
        <NavBar id='animais' />
         <div>
             <div>
                 <h2>O que o animal faz?</h2>
                 <p></p>
                 <div className="flex justify-center items-center">
                     <iframe className=" border-gray-800 rounded-md" src="https://wordwall.net/pt/embed/b0439ff1fc4d43d9867d10c43c53ab41?themeId=2&templateId=2&fontStackId=0" width="800" height="580" frameborder="0" allowfullscreen></iframe>
                 </div>
                 <div className="pt-20 pl-10">
                     <Link className="bg-blue-700 py-3 px-6 rounded-md text-lg text-white hover:bg-blue-600" href="/index.html" class="voltar">&laquo;</Link>
                 </div>
             </div>
         </div>
         <Card />
         <Footer />
       
         </>
    );
}