import { CommonModule } from '@angular/common';
import { Component, HostBinding, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-personal-information',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.css',
})
export class PersonalInformationComponent implements OnInit {
  @HostBinding('class.pc') pcMode = false;

  myData: string[][] = [
    ['Name', 'Alokit Pathak'],
    ['DOB', '20/06/2002'],
    ['Education', 'Btech(2021-2025)'],
    ['Interests', 'Cricket'],
  ];

  aboutMe: string[] = [
    'Hi, I am a Btech 3rd year student specialised in computer science and engineering.',
    'Worked on various technologies like react.js , angular.js , bootstrap,',
    'strong programming skills in c++',
  ];
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
