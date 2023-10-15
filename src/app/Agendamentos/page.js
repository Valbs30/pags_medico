import CardSolicits from '@/components/CardSolicits'
import NavBar from '@/components/NavBar'

export default function Home() {
	return (
		<>
			<NavBar
				children={"Agendamentos"}
				children1={"Facilite o agendamento de suas consultas através da nossa página de agendamentos."}
			/>
			<h1 className='ml-16 mb-8 text-2xl pb-2 italic'>Solicitações de agendamento:</h1>
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
			<h1 className='ml-16 mb-8 text-2xl pb-4 text-center italic'>Adicionar horários disponíveis da semana</h1>
		</>
	)
}
