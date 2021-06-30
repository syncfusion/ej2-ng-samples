import { Component, ViewEncapsulation, Inject, OnInit, ViewChild } from '@angular/core';
import { MaskedDateTimeService } from '@syncfusion/ej2-angular-calendars';
/**

 * Default TimePicker component
 */
@Component({
    selector: 'control-content',
    styleUrls: ['default-style.css'],
    templateUrl: 'input-mask.html',
    providers: [MaskedDateTimeService],
    encapsulation: ViewEncapsulation.None
})
export class MaskSupportTimePickerComponent {
    public format: string = "h:mm a";
    public enableMaskSupport: boolean = true;
}