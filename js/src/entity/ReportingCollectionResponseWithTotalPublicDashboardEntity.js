
const { inspect } = require('node:util')

const { HubspotAnalyticsEntityBase } = require('../HubspotAnalyticsEntityBase')


// TODO: needs Entity superclass
class ReportingCollectionResponseWithTotalPublicDashboardEntity extends HubspotAnalyticsEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'reporting_collection_response_with_total_public_dashboard'
    this.name_ = 'reporting_collection_response_with_total_public_dashboard'
    this.Name = 'ReportingCollectionResponseWithTotalPublicDashboard'
  }


  make() {
    return new ReportingCollectionResponseWithTotalPublicDashboardEntity(this._client, this.entopts())
  }




  /**
   * @param {ReportingCollectionResponseWithTotalPublicDashboardListMatch} [reqmatch]
   * @param {Object} [ctrl]
   * @returns {Promise<ReportingCollectionResponseWithTotalPublicDashboard[]>}
   */
  async list(reqmatch, ctrl) {

    const utility = this._utility

    const {
      makeContext,
      done,
      // The registry name is `makeError`; `error` is the local alias.
      makeError: error,
      featureHook,
      makePoint,
      makeRequest,
      makeResponse,
      makeResult,
      makeSpec,
    } = utility

    let fres = undefined

    let ctx = makeContext({
      opname: 'list',
      ctrl,
      match: this._match,
      data: this._data,
      reqmatch
    }, this._entctx)

    try {

      fres = featureHook(ctx, 'PrePoint')
      if (fres instanceof Promise) { await fres }

      ctx.out.point = makePoint(ctx)
      if (ctx.out.point instanceof Error) {
        return error(ctx, ctx.out.point)
      }



      fres = featureHook(ctx, 'PreSpec')
      if (fres instanceof Promise) { await fres }

      ctx.out.spec = makeSpec(ctx)
      if (ctx.out.spec instanceof Error) {
        return error(ctx, ctx.out.spec)
      }



      fres = featureHook(ctx, 'PreRequest')
      if (fres instanceof Promise) { await fres }

      ctx.out.request = await makeRequest(ctx)
      if (ctx.out.request instanceof Error) {
        return error(ctx, ctx.out.request)
      }



      fres = featureHook(ctx, 'PreResponse')
      if (fres instanceof Promise) { await fres }

      ctx.out.response = await makeResponse(ctx)
      if (ctx.out.response instanceof Error) {
        return error(ctx, ctx.out.response)
      }



      fres = featureHook(ctx, 'PreResult')
      if (fres instanceof Promise) { await fres }

      ctx.out.result = await makeResult(ctx)
      if (ctx.out.result instanceof Error) {
        return error(ctx, ctx.out.result)
      }



      fres = featureHook(ctx, 'PreDone')
      if (fres instanceof Promise) { await fres }

      if (null != ctx.result) {
        if (null != ctx.result.resmatch) {
          this._match = ctx.result.resmatch
        }
      }

      return done(ctx)
    }
    catch (err) {

      fres = featureHook(ctx, 'PreUnexpected')
      if (fres instanceof Promise) { await fres }

      err = this._unexpected(ctx, err)

      if (err) {
        throw err
      }
      else {
        return undefined
      }
    }
  }





}


module.exports = {
  ReportingCollectionResponseWithTotalPublicDashboardEntity
}
