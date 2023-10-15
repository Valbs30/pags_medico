import Link from 'next/link'

export default function DadosPaci({ children, children1, children2 }) {

    return (
        <>
            <ul className='flex flex-col p-4 w-80 hover:bg-[#D3A7D9] rounded-2xl cursor-pointer'>
                <li className='line-clamp-2'>Nome Completo: {children}</li>
                <li>CPF: {children1}</li>
                <li>Data de nascimento: {children2}</li>
            </ul>
        </>
    )
}