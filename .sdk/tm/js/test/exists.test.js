
const { test, describe } = require('node:test')
const { equal } = require('node:assert')


const { HubspotAnalyticsSDK } = require('..')


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await HubspotAnalyticsSDK.test()
    equal(null !== testsdk, true)
  })

})
