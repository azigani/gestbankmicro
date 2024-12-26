import {AfterViewInit, Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appStatusColor]'
})
export class StatusColorDirective implements  AfterViewInit {
    constructor() { }

    @HostBinding('class') class!: string;

    @Input()
    public status!: string;

    ngAfterViewInit(): void {
        this.class = 'p-button-sm p-button-outlined ';
        if (this.status === 'REJETE') {
            this.class = this.class + 'p-button-danger';
        } else if (this.status === 'PROVISOIRE') {
            this.class = this.class + 'p-button-warning';
        } else if (this.status === 'VALIDE') {
            this.class = this.class + 'p-button-success';
        }
    }

}
