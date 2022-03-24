import {
  WorkItem,
  WorkItemType,
  WorkItemIcon,
  WorkItemRelation,
} from 'azure-devops-extension-api/WorkItemTracking';

export default interface WorkItemInfo {
  WorkItem: WorkItem;
  Title: string;
  Type: WorkItemType;
  Icon: WorkItemIcon;
  State: string;
  Reason: string;
  AreaPath: string;
  Tags: string;
  Relations: WorkItemRelation[];
  ParentId?: number;
}
