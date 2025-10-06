import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'
import Loja from '../../models/Loja'
import hioki from '../../assets/images/hioki.png'
import morango from '../../assets/images/morango_do_amor.jpg'
import feijoada from '../../assets/images/feijoada.jpg'
import estrogonofe from '../../assets/images/estrogonofe_de_carne.jpg'
import lasanha from '../../assets/images/lasanha.jpg'
import macarrao from '../../assets/images/macarrao.png'
import { Rodape } from '../../components/Rodape'

// https://ebac-fake-api.vercel.app/api/efood/restaurantes

const promocoes: Loja[] = [
  {
    id: 1,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa'],
    image: hioki,
    title: 'Hioki Sushi',
    estrela: ''
  },
  {
    id: 2,
    description:
      'Aquela feijoada caprichada, com tudo que você tem direito. Sabor de reunião em família, entregue quentinha pra você!',
    infos: ['Destaque da semana', '🍛 Feijoada'],
    image: feijoada,
    title: 'Feijoada',
    estrela: ''
  },
  {
    id: 3,
    description:
      'Morangos fresquinhos mergulhados no chocolate mais cremoso. Um carinho em forma de sobremesa — peça e se apaixone!',
    infos: ['Destaque da semana', '🍓 Morango do Amor'],
    image: morango,
    title: 'Morango do amor',
    estrela: ''
  },
  {
    id: 4,
    description:
      'Camadas generosas de molho, queijo derretido e muito sabor. Perfeita para quem quer matar a fome com estilo!',
    infos: ['Destaque da semana', '🍝 Lasanha'],
    image: lasanha,
    title: 'Lasanha',
    estrela: ''
  },
  {
    id: 5,
    description:
      'Molho especial da casa, massa no ponto e aquele toque caseiro. Simples, delicioso e impossível de resistir!',
    infos: ['Destaque da semana', '🍜 Macarrão'],
    image: macarrao,
    title: 'La Dolce Vita Trattoria',
    estrela: ''
  },
  {
    id: 6,
    description:
      'Cremoso, bem temperadinho e acompanhado daquele arroz soltinho. O prato ideal para quem ama comer bem!',
    infos: ['Destaque da semana', '🥘 Estrogonofe'],
    image: estrogonofe,
    title: 'Estrogonofe de Carne',
    estrela: ''
  }
]

const Home = () => (
  <>
    <Header />
    <ProductsList lojas={promocoes} />
    <Rodape />
  </>
)

export default Home
