import app from '../../src/app'
import supertest from 'supertest'

describe('User route test suite', () => {  
	it('GET /users', async (done) => {
		const res = await supertest(app).get('/users')

		expect(res.status).toBe(200)

		done()
	})

	it('GET /users/:id', async (done) => {
		const res = await supertest(app).get('/users/123')

		expect(res.status).toBe(200)

		done()
	})

	it('POST /users', async (done) => {
		const res = await supertest(app).post('/users')

		expect(res.status).toBe(200)

		done()
	})

	it('PUT /users', async (done) => {
		const res = await supertest(app).put('/users')

		expect(res.status).toBe(200)

		done()
	})

	it('DELETE /users', async (done) => {
		const res = await supertest(app).delete('/users')

		expect(res.status).toBe(200)

		done()
	})
})

