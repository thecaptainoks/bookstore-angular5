import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';


export const MATERIAL_MODULES = [
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule
];

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [],
    exports: [
        CommonModule,
        ...MATERIAL_MODULES,
        ReactiveFormsModule
    ]
})
export class SharedModule {
}
