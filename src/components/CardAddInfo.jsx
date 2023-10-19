export default function CardAddInfo({ children, children1, children2 }) {

    return (
        <>
            <div className="flex flex-col bg-[#E7C7EE] my-8 w-[90%] md:w-[60%] lg:w-[30%] rounded-2xl p-4 gap-4 md:gap-8 text-center text-lg md:text-2xl">
                <button className="">Adicionar observação</button>
                <button className="">Mudar horário</button>
                <button className="">Adicionar exame</button>
            </div>
        </>
    )
}