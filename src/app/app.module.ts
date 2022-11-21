import {
    CUSTOM_ELEMENTS_SCHEMA,
    NgModule,
    NO_ERRORS_SCHEMA,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ProjectsComponent } from './projects/projects.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        ContactPageComponent,
        NavigationBarComponent,
        SkillsPageComponent,
        ExperiencePageComponent,
        ProjectsComponent,
        AboutMeComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatMenuModule,
        MatButtonModule,
        MatExpansionModule,
        MatTabsModule,
        MatSidenavModule,
        FlexLayoutModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {}
