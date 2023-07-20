import react from "react";

export default function emocoes() {
    return (
        <>
        <NavBar id='emocoes' />
         <div>
             <div>
                 <h2>Sentidos das emoções</h2>
                 <p></p>
                 <div className="flex justify-center items-center">
                     <iframe className=" border-gray-800 rounded-md" src="https://wordwall.net/pt/embed/87f67c76dd5c4e27a55090e52f2cd698?themeId=43&templateId=5&fontStackId=0" width="800" height="580" frameborder="0" allowfullscreen></iframe>
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