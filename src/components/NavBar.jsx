import UserMenu from '@/components/UserMenu'
import Link from 'next/link'
import Image from "next/image"

export default function NavBar({children,children1}) {

    return (
        <>
            <nav className='flex items-center justify-between bg-[#B483BB] p-2'>
                <div className='flex items-center'>
                    {<Image className="w-auto h-10" src="/images/logo_medicos.svg" alt="" width={100} height={100}/>}
                </div>
                <div className='flex items-center'>
                    <UserMenu></UserMenu>
                </div>
            </nav>
            <div className='flex bg-[#AF75BF] items-center justify-center h-16 text-2xl' >
                <ul className='lg:gap-48 flex textonav gap-16 text-white'>
                    <Link href='/Pacientes'><li>Pacientes</li></Link>
                    <Link href='/Agenda'><li>Agenda</li></Link>
                    <Link href='/Agendamentos'><li>Agendamentos</li></Link>
                </ul>
            </div>
            <div className='flex flex-col justify-center items-center mt-10 mb-8 gap-10'>
                <h1 className='checkcel mont text-black text-4xl'>{children}</h1>
                <p className='mont text-black text-center text-2xl italic w-1/2'>{children1}</p>
                <img className='mx-8' src='/images/LineCadastro.svg'></img>
            </div>
        </>
    )
}