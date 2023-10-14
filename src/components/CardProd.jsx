import Link from 'next/link'

export default function CardProd({ children, children1, children2 }) {

    return (
        <>
            <h1 className='flex justify-center pt-4 pb-2'>Produtos Sanofi</h1>
            <div className='flex-col w-96 h-56 pb-5 bg-orange-800 rounded-xl border border-black'>
                <img src={children2} alt="" className='object-cover h-2/3 w-full rounded-t-xl' />
                <div className='flex justify-center p-1 bg-gray-50'>
                    {children}
                </div>
                <div className='flex text-center text-gray-50 p-1 w-all'>{children1}</div>

            </div>
        </>
    )
}