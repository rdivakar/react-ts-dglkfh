import * as React from 'react';
import { Card } from 'azure-devops-ui/Card';
import MyJobCard from './KeyResultCard';
import { ArrayItemProvider } from 'azure-devops-ui/Utilities/Provider';
import WorkItemInfo from '../models/WorkItemInfo';

export interface IMyKeyResultProps {
  items: WorkItemInfo[];
}

export default class MyKeyResults extends React.Component<
  IMyKeyResultProps,
  {}
> {
  constructor(props: IMyKeyResultProps) {
    super(props);
  }

  public render(): JSX.Element {
    const listItems = this.props.items.map((item) => (
      <div>
        <div>
          <KeyResultCard
            WorkItem={item.WorkItem}
            Icon={item.Icon}
            Reason={item.Reason}
            Title={item.Title}
            Type={item.Type}
            AreaPath={item.AreaPath}
            Relations={item.Relations}
            State={item.State}
            Tags={item.Tags}
            ParentId={item.ParentId}
          />
        </div>
        <div>
          <br />
        </div>
      </div>
    ));
    return <div>{listItems}</div>;
  }
}
