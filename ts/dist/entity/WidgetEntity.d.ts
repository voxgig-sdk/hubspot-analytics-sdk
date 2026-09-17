import { HubspotAnalyticsEntityBase } from '../HubspotAnalyticsEntityBase';
import type { HubspotAnalyticsSDK } from '../HubspotAnalyticsSDK';
import type { Control } from '../types';
import type { Widget, WidgetCreateData, WidgetUpdateData, WidgetRemoveMatch } from '../HubspotAnalyticsTypes';
declare class WidgetEntity extends HubspotAnalyticsEntityBase<Widget> {
    constructor(client: HubspotAnalyticsSDK, entopts: any);
    make(this: WidgetEntity): WidgetEntity;
    create(this: any, reqdata?: WidgetCreateData, ctrl?: Control): Promise<WidgetEntity>;
    update(this: any, reqdata?: WidgetUpdateData, ctrl?: Control): Promise<WidgetEntity>;
    remove(this: any, reqmatch?: WidgetRemoveMatch, ctrl?: Control): Promise<WidgetEntity>;
}
export { WidgetEntity };
