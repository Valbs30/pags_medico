import NavBar from '@/components/NavBar'
import CardProd from '@/components/CardProd'

export default function Home() {
	return (
		<>
			<NavBar
				children={"Pacientes"}
				children1={"Tenha acesso aos melhores produtos da Sanofi e suas próximas consultas."}
			/>
			<CardProd 
				children={"Loratadina Sanofi"}
				children1={"Antialérgico para alívio rápido dos sintomas alérgicos."}
				children2={"images/remedios.jpg"}
			/>
		</>
	)
}
