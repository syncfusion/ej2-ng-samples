import { extend } from '@syncfusion/ej2-base';
import {
    ScheduleComponent, EventSettingsModel, GroupModel,
    DayService, WeekService, MonthService, DragAndDropService, View
} from '@syncfusion/ej2-angular-schedule';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { resourceData, timelineResourceData } from './data';

/**
 * Sample for adaptive grouping
 */

@Component({
    selector: 'control-content',
    templateUrl: 'adaptive-grouping.html',
    styles: [`
    @media (min-width: 481px) {
        .schedule-wrapper {
            margin: 0 25%;
        }
    }`],
    providers: [DayService, WeekService, MonthService, DragAndDropService],
    encapsulation: ViewEncapsulation.None
})
export class AdaptiveGroupingComponent {
    @ViewChild('scheduleObj')
    public scheduleObj: ScheduleComponent;
    public selectedDate: Date = new Date(2018, 3, 4);
    public currentView: View = 'Month';
    public group: GroupModel = {
        resources: ['Projects', 'Categories']
    };
    public projectDataSource: Object[] = [
        { text: 'PROJECT 1', id: 1, color: '#cb6bb2' },
        { text: 'PROJECT 2', id: 2, color: '#56ca85' },
        { text: 'PROJECT 3', id: 3, color: '#df5286' }
    ];
    public categoryDataSource: Object[] = [
        { text: 'Nancy', id: 1, groupId: 1, color: '#df5286' },
        { text: 'Steven', id: 2, groupId: 1, color: '#7fa900' },
        { text: 'Robert', id: 3, groupId: 2, color: '#ea7a57' },
        { text: 'Smith', id: 4, groupId: 2, color: '#5978ee' },
        { text: 'Michael', id: 5, groupId: 3, color: '#df5286' },
        { text: 'Root', id: 6, groupId: 3, color: '#00bdae' }
    ];
    public allowMultiple: Boolean = true;
    public eventSettings: EventSettingsModel = {
        dataSource: <Object[]>extend([], resourceData.concat(timelineResourceData), null, true)
    };
}