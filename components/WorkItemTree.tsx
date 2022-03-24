import * as React from 'react';
import { Card } from 'azure-devops-ui/Card';
import { Tree, ITree, ITreeRow } from 'azure-devops-ui/TreeEx';
import {
  ITreeItemProvider,
  ITreeItemEx,
} from 'azure-devops-ui/Utilities/TreeItemProvider';

import WorkItemHeaderRow from './WorkItemHeaderRow';
import {IWorkItemTableItem, getItemProvider, treeColumns } from './WorkItemTreeData';

export default class WorkItemTree extends React.Component<{}> {
  private itemProvider: ITreeItemProvider<IWorkItemTableItem>;

  constructor(props: {}) {
    super(props);
    this.itemProvider = getItemProvider();
  }

  public renderRow(): JSX:Element{

    <WorkItemHeaderRow
        WorkItem={this.props.WorkItem}
        Icon={this.props.Icon}
        Reason={this.props.Reason}
        Title={this.props.Title}
        Type={this.props.Type}
        AreaPath={this.props.AreaPath}
        Relations={this.props.Relations}
        State={this.props.State}
        Tags={this.props.Tags}
        ParentId={this.props.ParentId}
      ></WorkItemHeaderRow>
  }

  onSelect: (event:React.SyntheticEvent<HTMLElement>, treeRow:ITreeRow<IWorkItemTableItem>) => void {


  }

  public render(): JSX.Element {
    return (
      <Card
        className="flex-grow bolt-card-no-vertical-padding"
        contentProps={{ contentPadding: false }}
      >
        <Tree<ILocationTableItem>
          ariaLabel="Basic tree"
          itemProvider={this.itemProvider}
          onToggle={(event, treeItem: ITreeItemEx<ILocationTableItem>) => {
            this.itemProvider.toggle(treeItem.underlyingItem);
          }}
          scrollable={true}
        />
      </Card>
    );
  }
}
