import { VoterService } from './voter.service';
import { ISession } from '../shared/event.model';
import { of } from 'rxjs';


describe('VoterService', () => {
    let voterService: VoterService, mockHttp;

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
        voterService = new VoterService(mockHttp);
    });

    describe('deleteVoter', () => {
        it('should remove the voter from the list of voters', () => {
            const session = { voters: ['pippo', 'pluto'] };

            mockHttp.delete.and.returnValue(of(false));
            voterService.deleteVoter(3, <ISession>session, 'pippo');
            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe('pluto');
        });

        it('should call http.delete with the right URL', () => {
            const session = { id: 6, voters: ['pippo', 'pluto'] };
            mockHttp.delete.and.returnValue(of(false));

            voterService.deleteVoter(3, <ISession>session, 'pippo');
            expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/pippo');
        });
    });

    describe('addVoter', () => {
        it('should call http.post with the right URL', () => {
            const session = { id: 6, voters: ['pippo'] };
            mockHttp.post.and.returnValue(of(false));

            voterService.addVoter(3, <ISession>session, 'pluto');
            expect(mockHttp.post).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/pluto', {}, jasmine.any(Object));
        });
    });
});
