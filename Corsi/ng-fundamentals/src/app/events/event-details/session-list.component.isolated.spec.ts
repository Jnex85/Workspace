import { SessionListComponent } from './session-list.component';
import { ISession } from '../shared/event.model';

describe('SessionListComponent', () => {
    let component: SessionListComponent;
    let mockAuthService, mockVoterService;

    beforeEach(() => {
        component = new SessionListComponent(mockAuthService, mockVoterService);
    });

    describe('onOnChanges', () => {
        it('should filter the sessions correctly', () => {
            component.sessions = <ISession[]>[{ name: 'session 1', level: 'intermediate' },
            { name: 'session 2', level: 'intermediate' },
            { name: 'session 3', level: 'beginner' }];

            component.filterBy = 'intermediate';
            component.sortBy = 'name';
            component.eventId = 3;
            component.ngOnChanges();
            expect(component.visibleSessions.length).toBe(2);
            expect(component.visibleSessions[1].name).toBe('session 2');
        });

        it('should sort the sessions correctly', () => {
            component.sessions = <ISession[]>[{ name: 'session 1', level: 'intermediate' },
            { name: 'session 2', level: 'intermediate' },
            { name: 'session 3', level: 'beginner' }];

            component.filterBy = 'all';
            component.sortBy = 'name';
            component.eventId = 3;
            component.ngOnChanges();
            expect(component.visibleSessions[1].name).toBe('session 2');
        });

    });

});
