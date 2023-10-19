import BotaoCalendario from '@/components/Calendario'
import CardAddInfo from '@/components/CardAddInfo'
import CardConsultaSelecionada from '@/components/CardConsultaSelecionada'
import CardProxCons from '@/components/CardProxCons'
import NavBar from '@/components/NavBar'

export default function Home() {
	return (
		<>
			<NavBar
				children={"Agenda"}
				children1={"Mantenha sua agenda sempre atualizada, podendo acessar o histórico do seu paciente e seus exames anexados!."}
			/>
			<div className='flex justify-center'>
				<CardProxCons
					children={"aaasdas ddasdasdasdsd dasdasd dasdasds asdasdsdsdfd dasdasdas dasdasdsada"}
					children1={"10/10/2023"}
					children2={"12:32"}
					children3={"aaaaaaaaaaaa"}
				/>
			</div>
			<div className='flex flex-col items-center my-12 mx-4'>
				<BotaoCalendario>Agenda semanal</BotaoCalendario>
				<h1 className='text-xl md:text-2xl mt-16 underline'>Informações da consulta selecionada:</h1>
				<CardConsultaSelecionada
					children={"12:32"}
					children1={"10/10/2023"}
					children2={"Joao Faria"}
					children3={"aaaaaaaaaaaa"}
				/>
				<button className='text-xl underline'>Adicionar Informações</button>
				<CardAddInfo/>
			</div>
		</>
	)
}                    
