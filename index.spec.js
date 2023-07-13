const request = require("supertest")
const app = require("./server")
describe('teste meu servidir' , ()=> {
     it('rota get main', async () => {
        const res = await request(app  ).get('/')

        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('message') 
    })
})