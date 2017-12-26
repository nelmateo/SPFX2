import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneCheckbox,
  PropertyPaneDropdown,
  PropertyPaneToggle,
  PropertyPaneLabel,
  PropertyPaneLink,
  PropertyPaneSlider
} from '@microsoft/sp-webpart-base';

import * as strings from 'WpReactWebPartStrings';
import WpReact from './components/WpReact';
import { IWpReactProps } from './components/IWpReactProps';
import styles from './components/WpReact.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';

export interface IWpReactWebPartProps {
  description: string;
  test: string;
  test1: boolean;
  test2: string;
  test3: boolean;
  summary: string;
  more: string;
  moreText: string;
  sliderValue: number;
}

export default class WpReactWebPart extends BaseClientSideWebPart<IWpReactWebPartProps> {

  public render(): void {
    // const element: React.ReactElement<IWpReactProps > = React.createElement(
    //   WpReact,
    //   {
    //     description: this.properties.description
    //   }
    // );

    // ReactDom.render(element, this.domElement);
    this.domElement.innerHTML = `
      <div class="${ styles.wpReact }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
              <span class="${ styles.title }">${escape(strings.WelcomeMessage)}</span>
              <p class="${ styles.subTitle }">${escape(strings.PromotionMessage)}</p>
              <p class="${ styles.description }">${escape(this.properties.description)}</p>
              <p class="${ styles.description }">${escape(this.properties.test)}</p>
              <p class="${ styles.description }">${this.properties.test1}</p>
              <p class="${ styles.description }">${escape(this.properties.test2)}</p>              
              <p class="${ styles.description }">${this.properties.test3}</p>
              <p class="${ styles.labelCustom }">${escape(strings.PropertyPaneSummary)}</p>
              <p class="${ styles.description }">${escape(strings.LoadText)} ${escape(this.context.pageContext.web.title)}</p>
              <a href="${ strings.MoreFieldLink }" class= "${ styles.button }">
                <span class="${styles.label}">${escape(strings.MoreFieldText)}</span>
              </a>
              <a href="https://aka.ms/spfx" class="${ styles.button }">
                <span class="${ styles.label }">Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneTextField('test', {
                  label: strings.MultiText,
                  multiline: true                  
                }),
                PropertyPaneCheckbox('test1', {
                  text: 'Checkbox'
                }),
                PropertyPaneDropdown('test2', {
                  label: 'Dropdown',
                  options: [
                    { key: '1', text: 'One' },
                    { key: '2', text: 'Two' },
                    { key: '3', text: 'Three' },
                    { key: '4', text: 'Four' }
                  ]}),
                PropertyPaneToggle('test3', {
                  label: 'Toggle',
                  onText: 'On',
                  offText: 'Off'
                }),
                PropertyPaneLabel('summary', {
                  text: strings.PropertyPaneSummary
                }),
                PropertyPaneLink('more', {
                  disabled: false,
                  target: "_blank",
                  href: strings.MoreFieldLink,
                  text: strings.MoreFieldText 
                }),
                PropertyPaneSlider('slider', {
                  disabled: false,
                  label: strings.SliderText,
                  max: 20,
                  min: 0,
                  showValue: true,
                  step: 1,
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
