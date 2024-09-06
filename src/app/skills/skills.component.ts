import { Component, HostBinding, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
// import {skills} from '..?/../models/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  SkillsList = [
    { Type: 'Programming Languages : ', Name: '  C/C++, ', specific: ' DSA , CP' },
    { Type: 'Web Technologies', Name: ' Html , css , javascript ', specific: '' },
    { Type: 'Frameworks', Name: ' Angular.js , React.js ', specific: '' },
    { Type: 'Databases', Name: ' MySQL ', specific: '' },
  
  

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
