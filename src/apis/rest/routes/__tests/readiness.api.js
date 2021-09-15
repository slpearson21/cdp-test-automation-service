const axios = require('axios')
const { BASE_ENDPOINT } = process.env

describe('/readiness', () => {
  let request
  beforeAll(() => {
    request = axios.create({
      baseURL: BASE_ENDPOINT,
    })
  })
  it('should return 200 status code', async () => {
    const { status } = await request.get('/readiness')
    expect(status).toEqual(200)
  })
})
