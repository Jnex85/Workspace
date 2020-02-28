import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { SessionListComponent } from './session-list.component';
import { AuthService } from '../../user/auth.service';
import { ISession } from '../shared/event.model';
import { By } from '@angular/platform-browser';
import { VoterService } from './voter.service';
// import { UpvoteComponent } from './upvote.component';
import { DurationPipe } from '../shared';
// import { CollapsibleWellComponent } from 'src/app/common';

describe('SessionListComponent', () => {
    let fixture: ComponentFixture<SessionListComponent>,
        component: SessionListComponent,
        element: HTMLElement,
        debubEl: DebugElement;

    beforeEach(async () => {
        const mockAuthService = {
            isAuthenticated: () => true,
            currentUser: { userName: 'pippo' }
        };
        const mockVoterService = {
            userHasVoted: () => true
        };

        TestBed.configureTestingModule({
            imports: [],
            declarations: [SessionListComponent,
                // UpvoteComponent,
                DurationPipe,
                // CollapsibleWellComponent
            ],
            providers: [{ provide: AuthService, useValue: mockAuthService },
            { provide: VoterService, useValue: mockVoterService }],
            schemas: [
                NO_ERRORS_SCHEMA
            ]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        debubEl = fixture.debugElement;
        element = fixture.nativeElement;
    });

    describe('initial display', () => {
        it('should have the correct session title', () => {
            component.sessions = <ISession[]>[{
                id: 3, name: 'Session 1', presenter: 'pippo',
                duration: 1, level: 'beginner', abstract: 'abstract',
                voters: ['pluto', 'paperino']
            }];
            component.sortBy = 'name';
            component.filterBy = 'all';
            component.eventId = 4;

            component.ngOnChanges();
            fixture.detectChanges();
            expect(element.querySelector('[well-title]').textContent).toContain('Session 1');
            expect(debubEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1');
        });
    });


});
