import react from "react";

export default function almoco() {
    return (
        <>
        <NavBar id='almoco' />
         <div>
             <div>
                 <h2>Hora do almoço!</h2>
                 <p></p>
                 <div className="flex justify-center items-center">
                     <iframe className=" border-gray-800 rounded-md" src="https://wordwall.net/pt/embed/14b826b8e9c242acb0d020949da415c1?themeId=21&templateId=30&fontStackId=0" width="800" height="580" frameborder="0" allowfullscreen></iframe>
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