import UserMenu from '@/components/UserMenu'
import Link from 'next/link'
//import Image from "next/image"
//import logoimage from "@/images/logo.jpg"

export default function NavBar({children,children1}) {

    return (
        <>
            <nav className='flex items-center justify-between bg-[#B483BB] p-4'>
                <div className='flex items-center'>
                    {//<Image className="" src={logoimage} alt=""/>
                    }
                </div>
                <div className='flex items-center'>
                    <UserMenu></UserMenu>
                </div>
            </nav>
            <div className='flex bg-[#AF75BF] items-center justify-center h-16' >
                <ul className='lg:gap-48 flex textonav gap-10'>
                    <Link href='/Pacientes'><li>Pacientes</li></Link>
                    <Link href='/Agenda'><li>Agenda</li></Link>
                    <Link href='/Agendamentos'><li>Agendamentos</li></Link>
                </ul>
            </div>
            <div className='flex flex-col justify-center items-center mt-10 gap-10'>
                <h1 className='checkcel mont text-black text-4xl'>{children}</h1>
                <p className='mont text-black text-center text-2xl italic w-1/2'>{children1}</p>
                <img src='/images/LineCadastro.svg'></img>
            </div>
        </>
    )
}