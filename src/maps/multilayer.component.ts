import { Component, ViewEncapsulation } from '@angular/core';
import { MapsTheme, MapsTooltip, DataLabel, Maps, Marker, ILoadEventArgs } from '@syncfusion/ej2-ng-maps';
import { usMap } from './MapData/USA'; 
import { California } from './MapData/California'; 
import { Texas } from './MapData/Texas'; 

Maps.Inject(Marker, MapsTooltip, DataLabel);

/**
 * Multi-layer map sample
 */
@Component({
    selector: 'control-content',
    templateUrl: 'multilayer.html',
    styleUrls: ['maps.style.css'],
    encapsulation: ViewEncapsulation.None
})
export class MapsMultilayerComponent {
    public load = (args: ILoadEventArgs) => {
        let theme: string = location.hash.split('/')[1];
        theme = theme ? theme : 'Material';
        args.maps.theme = <MapsTheme>(theme.charAt(0).toUpperCase() + theme.slice(1));
    }
    public zoomSettings: object = {
        enable: true,        
        pinchZooming: true
    }
    public titleSettings: object = {
        text: 'Samsung Semiconductor office locations in USA',
        textStyle: {
            size: '16px'
        }
    }
    public layers: object[] = [
        {
            shapeData: usMap,
            shapeSettings: {
                fill: '#E5E5E5',
                border: {
                    color: 'black',
                    width: 0.1
                }
            },
            dataLabelSettings: {
                visible: true,
                labelPath: 'iso_3166_2',
                smartLabelMode: 'Hide'
            }
        },
        {
            shapeData: Texas,
            type: 'SubLayer',
            shapeSettings: {
                fill: 'rgba(141, 206, 255, 0.6)',
                border: {
                    color: '#1a9cff',
                    width: 0.25
                }
            },
            markerSettings: [
                {
                    visible: true,
                    width: 20,
                    height: 20,
                    template: '<div id="markercircle"> <svg width="30" height="30"> <circle class="svgcircle" cx="15" cy="15" r="6" stroke="rgba(77, 77, 77, 0.8)" fill="rgba(0, 77, 153, 0.8)"></circle> </svg> </div>',
                    dataSource: [
                        {
                            latitude: 30.267153,
                            longitude: -97.7430608,
                            name: 'Austin'
                        }
                    ],
                    tooltipSettings: {
                        visible: true,
                        valuePath: 'name',
                        format: '<b>${name}</b><br>Manufacturing Center,<br>Research and Development Center'
                    }
                },
                {
                    visible: true,
                    dataSource: [
                        {
                            latitude: 31.80289258670676,
                            longitude: -98.96484375
                        }
                    ],
                    template: '<div>TX</div>'
                }
            ]
        },
        {
            shapeData: California,
            type: 'SubLayer',
            shapeSettings: {
                fill: 'rgba(141, 206, 255, 0.6)',
                border: {
                    color: '#1a9cff',
                    width: 0.25
                }
            },
            markerSettings: [
                {
                    visible: true,
                    width: 20,
                    height: 20,
                    dataSource: [
                        {
                            latitude: 37.3382082,
                            longitude: -121.8863286,
                            name: 'San Jose'
                        }
                    ],
                    tooltipSettings: {
                        visible: true,
                        valuePath: 'name',
                        format: '<b>${name}</b><br>Regional Office,<br>Research and Development Center'
                    },
                    template: '#markercircle'
                },
                {
                    visible: true,
                    dataSource: [
                        {
                            latitude: 37.09023980307208,
                            longitude: -119.35546875000001
                        }
                    ],
                    template: '<div>CA</div>'
                }
            ]
        }
    ];
    constructor() {
        //code
    };
}