import { criarApp } from '../server/app.js'

const app = criarApp({ servirFrontend: false })

export default app