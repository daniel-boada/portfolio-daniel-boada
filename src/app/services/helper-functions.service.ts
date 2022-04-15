import { Injectable } from '@angular/core';
import { AppConstants } from '../constants/constants';

@Injectable({
    providedIn: 'root',
})
export class HelperFunctionsService {
  
    blankPage = '_blank';
  
    constructor(
      private constants: AppConstants,
    ) {}

    public redirectToGithub() {
        window.open(this.constants.personalGithubUrl, this.blankPage);
    }

    public redirectToLinkedIn() {
        window.open(this.constants.personalLinkedInUrl, this.blankPage);
    }
}
