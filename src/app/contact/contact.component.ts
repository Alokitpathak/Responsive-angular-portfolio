
import { Component, HostBinding, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {







  @HostBinding('class.pc') pcMode = false;
  constructor(private breakpointObserver: BreakpointObserver) {}
  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape])
      .subscribe({
        next: (result: any) => {
          for (let breakpoint of Object.keys(result.breakpoints)) {
            if (result.breakpoints[breakpoint]) {
              if (breakpoint === Breakpoints.HandsetPortrait) {
                this.pcMode = false;
              }

              if (breakpoint === Breakpoints.WebLandscape) {
                this.pcMode = true;
              }
            }
          }
        },
      });
  }





}
