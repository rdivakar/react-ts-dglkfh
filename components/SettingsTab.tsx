import '../wit.scss';

import * as React from 'react';
import * as SDK from 'azure-devops-extension-sdk';
import {
  CommonServiceIds,
  IExtensionDataManager,
  IExtensionDataService,
} from 'azure-devops-extension-api';

import { Button } from 'azure-devops-ui/Button';
import { TextField } from 'azure-devops-ui/TextField';
import { ObservableValue } from 'azure-devops-ui/Core/Observable';
import { FormItem } from 'azure-devops-ui/FormItem';
import * as Helper from '../common/TokenHelper';

import { ObjectiveTagPicker } from './ObjectiveTagPicker';

export interface IExtensionDataState {
  dataText?: string;
  persistedText?: string;
  ready?: boolean;
}

export default class SettingsTab extends React.Component<
  {},
  IExtensionDataState
> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  public componentDidMount() {
    this.initializeState();
  }

  private async initializeState(): Promise<void> {}

  public render(): JSX.Element {
    const { dataText, ready, persistedText } = this.state;

    return (
      <div className="page-content page-content-top flex-row rhythm-horizontal-16">
        <ObjectiveTagPicker />
      </div>
    );
  }

  private onTextValueChanged = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    value: string
  ): void => {
    this.setState({ dataText: value });
  };

  private onSaveData = (): void => {};
}
