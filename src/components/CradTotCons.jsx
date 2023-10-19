export default function CardTotCons({ children, children1 }) {

    return (
        <>
            <div className='ml-8 lg:ml-16 flex flex-col text-center'>
                <h1 className="w-60 py-8 text-2xl bg-[#B483BB] rounded-xl">{children}</h1>
                <h1>{children1}</h1>
            </div>
            
        </>
    )
}