import Link from 'next/link'

export default function CardProd({ children, children1, children2 }) {

    return (
        <>
            <div className='flex-col w-96 h-32 lg:h-56 lg:pb-5 bg-orange-800 rounded-xl border border-black hover:opacity-75 cursor-pointer'>
                <img src={children2} alt="" className='object-cover h-3/4 lg:h-2/3 w-full rounded-t-xl' />
                <div className='flex justify-center p-1 h-1/4 lg:h-auto bg-gray-50 rounded-b-xl lg:rounded-none line-clamp-2'>
                    {children}
                </div>
                <div className='hidden lg:flex text-center text-gray-50 w-all lg:mx-1'>{children1}</div>

            </div>
        </>
    )
}