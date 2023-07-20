import Image from "next/image";
import sobre from '../../assets/sobre.png'

export default function Sobre(){
    return <section id="sobre" className="w-full md:h-screen p-2 flex items-center py-16">
                <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="w-full h-auto m-auto flex items-center justify-center">
                        <Image className="" src={sobre} alt="sobre"></Image>
                    </div>
                    <div className="col-span-2">
                        <h2 className=" ">About</h2>
                        <p className="py-2 ">Este site de jogos infantis foi criado para contribuir no processo pedagógico e na aprendizagem de crianças com Transtorno De Espectro Autista (TEA). São jogos interativos e educativos para crianças em idades pré-jardim de infância, jardim de infância e pré-escolar. Jogos que podem ser facilmente utilizado por professores e pais no ensino de algumas tarefas como matemática, alfabetização ou qualquer outra atividade que tenha o objetivo de ensino.</p>
                    </div>
                    
                </div>
            </section>
        
}
