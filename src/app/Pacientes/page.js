import NavBar from '@/components/NavBar'
import CardProd from '@/components/CardProd'
import DadosPaci from '@/components/DadosPaci'

export default function Home() {
	return (
		<>
			<NavBar
				children={"Pacientes"}
				children1={"Tenha acesso aos melhores produtos da Sanofi e suas próximas consultas."}
			/>
			<h1 className='flex justify-center pt-4 pb-2'>Produtos Sanofi</h1>
			<div className='flex gap-4 mx-8 mb-16'>
				<CardProd 
					children={"Loratadina Sanofi"}
					children1={"Antialérgico para alívio rápido dos sintomas alérgicos."}
					children2={"images/remedios.jpg"}
				/>
				<CardProd 
					children={"Loratadina Sanofi"}
					children1={"Antialérgico para alívio rápido dos sintomas alérgicos."}
					children2={"images/remedios.jpg"}
				/>
				<CardProd 
					children={"Loratadina Sanofi"}
					children1={"Antialérgico para alívio rápido dos sintomas alérgicos."}
					children2={"images/remedios.jpg"}
				/>
				<CardProd 
					children={"Loratadina Sanofi"}
					children1={"Antialérgico para alívio rápido dos sintomas alérgicos."}
					children2={"images/remedios.jpg"}
				/>
			</div>
			<div className='mx-8 px-8 pb-4 bg-[#E7C7EE] rounded-2xl mb-16'>
				<div className='flex-col text-center py-4'>
					<h1 className='text-2xl pb-2'>Lista de pacientes</h1>
					<h1 className='underline'>Separados pelos registrados no último ano</h1>
				</div>
				<div className='flex flex-wrap gap-x-8'>
					<DadosPaci
						children={"João Faria"}
						children1={"123.456.789/01"}
						children2={"01/01/2000"}
					/>
				</div>
			</div>
			<div className='mx-20 px-8 py-4 bg-[#E7C7EE] rounded-2xl mb-16'>
				<h1 className='text-center text-2xl pb-2 underline'>Ficha Médica</h1>
			</div>
			<div className='mx-40 px-12 py-4 bg-[#D3A7D9] rounded-2xl mb-16'>
				<h1 className='text-center text-2xl pb-4'>Suporte Exclusivo para Médicos</h1>
				<p>Nosso serviço de suporte exclusivo para médicos está disponível 24 horas por dia, 
					7 dias por semana. Para obter assistência imediata, entre em contato conosco pelo 
					WhatsApp no número (11) 93715-2301 ou envie um e-mail para medico@sanofi.com.br. 
					Estamos prontos para atender às suas necessidades.
				</p>
			</div>
		</>
	)
}
