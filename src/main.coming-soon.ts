import { bootstrapApplication } from '@angular/platform-browser';
import { ComingSoonPage } from './app/pages/coming-soon';

// Production has a separate entry point, so unreleased routes are not shipped.
bootstrapApplication(ComingSoonPage).catch(console.error);
