
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { HubspotAnalyticsSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = HubspotAnalyticsSDK.test()
    equal(testsdk instanceof HubspotAnalyticsSDK, true,
      'HubspotAnalyticsSDK.test() must return a client synchronously')
  })

})
