import {ComponentPortal, DomPortal, Portal, TemplatePortal} from '@angular/cdk/portal';
import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ElementRef
} from '@angular/core';
import { CheckInComponent } from './check-in/check-in.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'airline-website';
}
