export default function BotaoAgendament({ children }) {

    return (
        <>
            <div className=''>
				<button className="mx-8 flex justify-center items-center gap-2 md:gap-7 text-xl md:text-2xl w-auto md:w-96 h-24 px-4 md:px-8 py-2 md:py-4 bg-[#D3A7D9] rounded-xl">
                    {children}
                </button>
			</div>
        </>
    )
}