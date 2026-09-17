import { CloneEntity } from './entity/CloneEntity';
import { DashboardEntity } from './entity/DashboardEntity';
import { ReportEntity } from './entity/ReportEntity';
import { ReportingBatchResponsePublicDashboardEntity } from './entity/ReportingBatchResponsePublicDashboardEntity';
import { ReportingBatchResponsePublicReportEntity } from './entity/ReportingBatchResponsePublicReportEntity';
import { ReportingCollectionResponseWithTotalPublicDashboardEntity } from './entity/ReportingCollectionResponseWithTotalPublicDashboardEntity';
import { WidgetEntity } from './entity/WidgetEntity';
export type * from './HubspotAnalyticsTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { HubspotAnalyticsEntityBase } from './HubspotAnalyticsEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class HubspotAnalyticsSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Clone(entopts?: Record<string, any>): CloneEntity;
    Dashboard(entopts?: Record<string, any>): DashboardEntity;
    Report(entopts?: Record<string, any>): ReportEntity;
    ReportingBatchResponsePublicDashboard(entopts?: Record<string, any>): ReportingBatchResponsePublicDashboardEntity;
    ReportingBatchResponsePublicReport(entopts?: Record<string, any>): ReportingBatchResponsePublicReportEntity;
    ReportingCollectionResponseWithTotalPublicDashboard(entopts?: Record<string, any>): ReportingCollectionResponseWithTotalPublicDashboardEntity;
    Widget(entopts?: Record<string, any>): WidgetEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): HubspotAnalyticsSDK;
    tester(testopts?: any, sdkopts?: any): HubspotAnalyticsSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof HubspotAnalyticsSDK;
export { stdutil, config, BaseFeature, HubspotAnalyticsEntityBase, HubspotAnalyticsSDK, SDK, };
