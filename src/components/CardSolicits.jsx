export default function CardSolicits({ children, children1, children2,children3 }) {

    return (
        <>
            <div className='flex-col w-96 h-auto pb-4 bg-[#8EBF9F] rounded-xl mx-4'>
                <div className="p-2 bg-[#7AA188] rounded-t-xl">
                    <h1 className="text-2xl text-center">Consulta para {children3}</h1>
                </div>
                <div className="flex flex-col text-2xl px-4 pt-2">
                    <ul className=''>
                        <li>Horário: {children1}</li>
                        <li className='line-clamp-2'>Paciente: {children}</li>
                        <li>Formato: {children2}</li>
                    </ul>
                    <div className="pt-2 flex gap-4 text-lg">
                        <input type="checkbox" name="aceitar" id="aceitar" />Aceitar
                        <input type="checkbox" name="recusar" id="recusar" />Recusar
                    </div>
                    <div className="text-lg hidden">
                        Motivo do cancelamento:<input className="w-full line-clamp-2 rounded mt-2"></input>
                    </div>
                </div>
            </div>
        </>
    )
}