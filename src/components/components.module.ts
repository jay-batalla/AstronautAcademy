import { NgModule } from '@angular/core';
import { FlashCardComponent } from './flash-card/flash-card';
import { ProgressBarComponent } from './progress-bar/progress-bar';
@NgModule({
	declarations: [FlashCardComponent,
    ProgressBarComponent],
	imports: [],
	exports: [FlashCardComponent,
    ProgressBarComponent]
})
export class ComponentsModule {}
