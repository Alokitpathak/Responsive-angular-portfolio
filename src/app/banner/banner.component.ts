import { Component, HostBinding, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent implements OnInit {
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
