export default function CardConsultaSelecionada({ children, children1, children2, children3 }) {
	return (
		<>
			<div className="flex flex-col bg-[#D3A7D9] my-4 md:w-[70%] lg:w-[50%] xl:w-[40%] rounded-xl">
				<div className="self-center w-[70%] md:w-80 bg-[#AF75BF] rounded-lg mt-3">
					<h1 className="text-center text-xl md:text-2xl p-4">Consulta {children} h </h1>
				</div>
				<div className="grid mx-8 my-4 gap-y-3 text-xl md:text-2xl">
					<p>Data: {children1}</p>
					<p className='line-clamp-2'>Paciente: {children2}</p>
					<p>Local: {children3}</p>
					<p>Exames anexados: <button className="text-lg md:mx-4 underline">Link dos Exames</button></p>
				</div>
			</div>
		</>
	)
}
