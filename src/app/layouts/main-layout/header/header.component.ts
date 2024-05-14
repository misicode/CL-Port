import { Component } from "@angular/core";
import { animate, style, trigger, transition } from "@angular/animations";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
  animations: [
    trigger("enter", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateY(20px)" }),
        animate(".5s", style({ opacity: 1, transform: "translateY(0)" })),
      ])
    ])
  ],
})
export class HeaderComponent {}
