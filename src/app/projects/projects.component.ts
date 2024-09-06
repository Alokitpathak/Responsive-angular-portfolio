import { Component, HostBinding, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  ProjectList = [
    {
      Name: 'E-commerce site',
      Description:
        'The Shopping Site Project is an e-commerce platform built to provide users with a seamless online shopping experience. It includes a range of functionalities, from browsing products to managing a shopping cart.',
      Technologyused: 'Tech Stack used: Angular.js , javascript',
    },
    { Name: 'Calculator Project', Description: 'The Calculator Project is a simple yet powerful web-based calculator designed to handle basic arithmetic operations such as addition, subtraction, multiplication, and division. The project was developed using React framework to provide a user-friendly interface.', Technologyused: 'Tech stack used: React.js' },
    { Name: 'Simple Sudoku Solver', Description: 'The Simple Sudoku Solver is an algorithm-based application designed to solve Sudoku puzzles efficiently. It leverages backtracking algorithms to fill in the missing numbers and find a solution to even the most complex puzzles.', Technologyused: 'Tech stack used: Html, css, javascript, Recursion , Backtracking' },
  
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
