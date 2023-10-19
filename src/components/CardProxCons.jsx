export default function CardProxCons({ children, children1, children2, children3 }) {

    return (
        <>
            <div className='flex-col w-96 h-auto pb-4 bg-[#8EBF9F] rounded-xl mx-4'>
                <div className="p-2 bg-[#7AA188] rounded-t-xl">
                    <h1 className="text-2xl text-center">Sua Próxima consulta é:</h1>
                </div>
                <div className="flex flex-col text-2xl px-4 pt-2">
                    <ul className=''>
                        <div className="text-center">
                            <li>Data: {children1}</li>
                            <li>Horário: {children2} h</li>
                        </div>
                        <li className='line-clamp-2'>Paciente: {children}</li>
                        <li>Local: {children3}</li>
                    </ul>
                </div>
                <div className="flex justify-center">
                    <button className="mt-2 text-center underline">Reagendar consulta</button>
                </div>
                
            </div>
        </>
    )
}