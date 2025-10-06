class Loja {
  description: string
  image: string
  infos: string[]
  title: string
  estrela: string
  id: number

  constructor(
    id: number,
    description: string,
    image: string,
    infos: string[],
    title: string,
    estrela: string
  ) {
    this.id = id
    this.description = description
    this.image = image
    this.infos = infos
    this.title = title
    this.estrela = estrela
  }
}

export default Loja
