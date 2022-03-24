import {
  WorkItem,
  WorkItemType,
  WorkItemIcon,
  WorkItemRelation,
} from 'azure-devops-extension-api/WorkItemTracking';


export default interface WorkItemWithTrackingInfo extends WorkItemInfo {
  IsTracking: boolean;
  Notes: string[];
  ActionItems: string[];
}
