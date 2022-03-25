import '../wit.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Page } from 'azure-devops-ui/Page';

export default class WorkItemsTab extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page className="flex-grow">
        <div className="page-content">
        <div>
            <br />
            <br />
          </div>
          <div>
            <MyJobCard
              CreatedTime={topo0.CreatedTime}
              MachinesExt={topo0.MachinesExt}
              Name={topo0.Name}
              Owner={topo0.Owner}
              TopologyType={topo0.TopologyType}
              RecoverTime={topo0.RecoverTime}
              TopologyId={topo0.TopologyId}
              TopologyState={topo0.TopologyState}
              WarningTime={topo0.WarningTime}
              WorkgroupId={topo0.WorkgroupId}
            />
          </div>
        </div>
      </Page>
    );
  }
}
