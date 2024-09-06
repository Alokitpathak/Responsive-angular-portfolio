import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BannerComponent,
    ContactComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    PersonalInformationComponent,
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular-Portfolio';
}
