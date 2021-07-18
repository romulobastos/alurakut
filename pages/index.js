import React from 'react'
import { MainGrid } from '../src/components/MainGrid'
import { Box } from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

function ProfileSidebar(props) {	
	return (
		<Box>
			<img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }} />
			<hr/>

			<p>
				<a className="boxLink" href={`http://github.com/${props.githubUser}`}>@{props.githubUser}</a>
			</p>
			
			<hr/>

			<AlurakutProfileSidebarMenuDefault />
		</Box>
	)
}

export default function Home() {
	const githubAccount = 'romulobastos';
	const [comunidades, setComunidades] = React.useState([{
		id: '5162311899811172',
		title: 'Eu odeio acordar cedo',
		image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
	}]);
	const pessoasFavoritas = ['itbruno', 'juunegreiros', 'omariosouto', 'peas', 'diego3g', 'felipefialho'];

	return (
		<>
			<AlurakutMenu githubUser={githubAccount}/>
			<MainGrid>
				<div className="profileArea" style={{ gridArea:"profileArea" }}>
					<ProfileSidebar githubUser={githubAccount} />
				</div>
				
				<div className="welcomeArea" style={{ gridArea:"welcomeArea" }}>
					<Box>
						<h1 className="title">Bem vindo(a)</h1>
						
						<OrkutNostalgicIconSet/>
					</Box>
					<Box>
						<h2 className="subTitle">O que você deseja fazer?</h2>
						<form onSubmit={function handleCriarComunidade(e){
							e.preventDefault();
							const dadosForm = new FormData(e.target);
							const comunidade = {
								id: new Date().toISOString(),
								title: dadosForm.get('title'),
								image: dadosForm.get('image')
							}

							const comunidadesAtualizadas = [...comunidades, comunidade];
							setComunidades(comunidadesAtualizadas);
						}}>
							<div>
								<input
									type="text"
									name="title"
									placeholder="Qual vai ser o nome da sua comunidade?"
									aria-label="Qual vai ser o nome da sua comunidade?"
								/>
							</div>
							<div>
								<input
									type=""
									name="image"
									aria-label="Coloque uma URL para usarmos de capa"
									placeholder="Coloque uma URL para usarmos de capa"
								/>
							</div>
							<button>Criar comunidade</button>
						</form>
					</Box>
				</div>

				<div className="profileRealtionsArea" style={{ gridArea:"profileRealtionsArea" }}>
					<ProfileRelationsBoxWrapper>
						<h2 className="smallTitle">Comunidades ({comunidades.length})</h2>
						<ul>
						{comunidades.map((comunidade)=>{
							return (
								<li key={comunidade.id}>
									<a href={`/comunity/${comunidade.title}`}>
										<img src={comunidade.image} />
										<span>{comunidade.title}</span>
									</a>
								</li>
							)
						})}
						</ul>
					</ProfileRelationsBoxWrapper>
					
					<ProfileRelationsBoxWrapper>
						<h2 className="smallTitle">Pessoas da comunidade ({pessoasFavoritas.length})</h2>

						<ul>
						{pessoasFavoritas.map((githubUser)=>{
							return (
								<li key={githubUser}>
									<a href={`/users/${githubUser}`}>
										<img src={`https://github.com/${githubUser}.png`} />
										<span>{githubUser}</span>
									</a>
								</li>
							)
						})}
						</ul>
					</ProfileRelationsBoxWrapper>
				</div>
			</MainGrid>
		</>
	)
}