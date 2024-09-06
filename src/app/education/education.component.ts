import { Component, HostBinding, OnInit } from '@angular/core';
import { Education } from '../../models/models';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: 'AJAY KUMAR GARG ENGINEERING COLLEGE',
      course: `B.Tech`,
      duration: `2021-2025`,
      score: `7.6 CGPA`,
    },

    {
      institute: 'MJP Rohilkhand university',
      course: `B.Sc.`,
      duration: `2018-2021`,
      score: `60.54%`,
    },

    {
      institute: 'BRB MODEL SCHOOL',
      course: `HSC`,
      duration: `2017-2018`,
      score: `89%`,
    },

    {
      institute: 'BRB MODEL SCHOOL',
      course: `SSC`,
      duration: `2015-2016`,
      score: `95%`,
    },
  ];

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
