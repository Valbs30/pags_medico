import CardSolicits from '@/components/CardSolicits'
import NavBar from '@/components/NavBar'
import BotaoAgendament from '@/components/BotaoAgendament'
import CardTotCons from '@/components/CradTotCons'

export default function Home() {
	return (
		<>
			<NavBar
				children={"Agendamentos"}
				children1={"Facilite o agendamento de suas consultas através da nossa página de agendamentos."}
			/>
			<h1 className='mx-16 mb-8 text-2xl pb-2 italic'>Solicitações de agendamento:</h1>
			<div className='flex flex-wrap gap-4 mx-8 mb-16'>
				<CardSolicits
					children={"aaasdas ddasdasdasdsd dasdasd dasdasds asdasdsdsdfd dasdasdas dasdasdsada"}
					children1={"aaaaaaaaaa"}
					children2={"aaaaaaaaaaaaaa"}
					children3={"10/10/2023"}
				/>
				<CardSolicits
					children={"aaasdas ddasdasdasdsd dasdasd dasdasds asdasdsdsdfd dasdasdas dasdasdsada"}
					children1={"aaaaaaaaaa"}
					children2={"aaaaaaaaaaaaaa"}
					children3={"10/10/2023"}
				/>
				<CardSolicits
					children={"aaasdas ddasdasdasdsd dasdasd dasdasds asdasdsdsdfd dasdasdas dasdasdsada"}
					children1={"aaaaaaaaaa"}
					children2={"aaaaaaaaaaaaaa"}
					children3={"10/10/2023"}
				/>
				<CardSolicits
					children={"aaasdas ddasdasdasdsd dasdasd dasdasds asdasdsdsdfd dasdasdas dasdasdsada"}
					children1={"aaaaaaaaaa"}
					children2={"aaaaaaaaaaaaaa"}
					children3={"10/10/2023"}
				/>
				<CardSolicits
					children={"aaasdas ddasdasdasdsd dasdasd dasdasds asdasdsdsdfd dasdasdas dasdasdsada"}
					children1={"aaaaaaaaaa"}
					children2={"aaaaaaaaaaaaaa"}
					children3={"10/10/2023"}
				/>
			</div>
			<h1 className='mx-16 mb-12 text-2xl text-center italic'>Adicionar horários disponíveis da semana</h1>
			<div className='flex flex-wrap justify-center gap-12 lg:gap-24'>
				<BotaoAgendament>Selecione a data:<img className='h-12 md:h-auto' src='/images/Calendario.svg'></img></BotaoAgendament>
				<BotaoAgendament>Selecione um horário:<img className='h-8 md:h-auto' src='/images/SetaBaixo.svg'></img></BotaoAgendament>
			</div>
			<div className='my-4 mx-4 text-xl md:text-2xl text-center '>
				<button className='underline'>Adicionar na agenda dos pacientes</button>
			</div>
			<h1 className='mx-16 mt-12 mb-8 text-2xl italic'>Total de consultas:</h1>
			<div className='flex flex-wrap mb-16 gap-4'>
				<CardTotCons
					children={"10"}
					children1={"Agendadas essa semana"}
				/>
				<CardTotCons
					children={"30"}
					children1={"Agendadas nesse mês"}
				/>
				<CardTotCons
					children={"3"}
					children1={"Canceladas nesse mês"}
				/>
			</div>
		</>
	)
}
