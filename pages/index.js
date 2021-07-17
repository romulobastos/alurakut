import { MainGrid } from '../src/components/MainGrid'
import { Box } from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

function ProfileSidebar(props) {	
	return (
		<Box>
			<img src={`https://github.com/${props.photo}.png`} style={{ borderRadius: '8px' }} />
		</Box>
	)
}

export default function Home() {
	const githubUser = 'romulobastos';
	const pessoasFavoritas = ['itbruno', 'juunegreiros', 'omariosouto', 'peas', 'diego3g', 'felipefialho']

	return (
		<>
			<AlurakutMenu />
			<MainGrid>
				<div className="profileArea" style={{ gridArea:"profileArea" }}>
					<ProfileSidebar photo={githubUser} />
				</div>
				<div className="welcomeArea" style={{ gridArea:"welcomeArea" }}>
					<Box>
						<h1 className="title">Bem vindo(a)</h1>
						
						<OrkutNostalgicIconSet/>
					</Box>
				</div>
				<div className="profileRealtionsArea" style={{ gridArea:"profileRealtionsArea" }}>
					<ProfileRelationsBoxWrapper>
						<h2 className="smallTitle">Pessoas da comunidade ({pessoasFavoritas.length})</h2>

						<ul>
						{pessoasFavoritas.map((githubUser)=>{
							return (
								<li>
									<a href={`/users/${githubUser}`} key={githubUser}>
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