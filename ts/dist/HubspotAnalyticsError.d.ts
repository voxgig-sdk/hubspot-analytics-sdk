import { Context } from './Context';
declare class HubspotAnalyticsError extends Error {
    isHubspotAnalyticsError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { HubspotAnalyticsError };
