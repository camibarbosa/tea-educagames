import react from "react";

export default function palavras() {
    return (
        <>
        <NavBar id='palavras' />
         <div>
             <div>
                 <h2>Que palavra começa com a letra...</h2>
                 <p></p>
                 <div className="flex justify-center items-center">
                     <iframe className=" border-gray-800 rounded-md" src="https://wordwall.net/pt/embed/5703dcfcafe94617b645075cd3cf604e?themeId=46&templateId=5&fontStackId=0" width="800" height="580" frameborder="0" allowfullscreen></iframe>
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