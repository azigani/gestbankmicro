import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from "primeng/button";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RippleModule} from "primeng/ripple";
import {ConfirmationService, MessageService, SharedModule} from "primeng/api";
import {TableModule} from "primeng/table";
import {ToastModule} from "primeng/toast";
import {TooltipModule} from "primeng/tooltip";
import {InputTextareaModule} from "primeng/inputtextarea";
import {DropdownModule} from "primeng/dropdown";
import {AutoCompleteModule} from "primeng/autocomplete";
import {MultiSelectModule} from "primeng/multiselect";
import {DialogModule} from "primeng/dialog";
import {CardModule} from "primeng/card";
import {ChipsModule} from "primeng/chips";
import {ProgressBarModule} from "primeng/progressbar";
import {PaginatorModule} from "primeng/paginator";
import {DialogService} from "primeng/dynamicdialog";
import {CalendarModule} from "primeng/calendar";
import {FileUploadModule} from "primeng/fileupload";
import {ToolbarModule} from "primeng/toolbar";
import { StatusColorDirective } from './directives/status-color.directive';



@NgModule({
    declarations: [
        StatusColorDirective
    ],
    imports: [
        CommonModule,
        ButtonModule,
        ConfirmDialogModule,
        InputTextModule,
        ReactiveFormsModule,
        RippleModule,
        SharedModule,
        TableModule,
        ToastModule,
        TooltipModule,
        InputTextareaModule,
        DropdownModule,
        AutoCompleteModule,
        MultiSelectModule,
        DialogModule,
        CardModule,
        ChipsModule,
        FormsModule,
        ProgressBarModule,
        PaginatorModule,
        CalendarModule,
        FileUploadModule,
        ToolbarModule,
    ],
    exports: [
        CommonModule,
        ButtonModule,
        ConfirmDialogModule,
        InputTextModule,
        ReactiveFormsModule,
        RippleModule,
        SharedModule,
        TableModule,
        ToastModule,
        TooltipModule,
        InputTextareaModule,
        DropdownModule,
        AutoCompleteModule,
        MultiSelectModule,
        DialogModule,
        CardModule,
        ChipsModule,
        FormsModule,
        ProgressBarModule,
        PaginatorModule,
        CalendarModule,
        FileUploadModule,
        ToolbarModule,
        StatusColorDirective,
    ],
    providers: [
        ConfirmationService,
        MessageService,
        DialogService,
    ],
})
export class SharedUtilsModule { }
