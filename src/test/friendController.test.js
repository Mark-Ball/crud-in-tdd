import { create } from './../../backend/controllers/friendController';
import FriendModel from './../../backend/database/models/friendModel';

beforeAll() {

}

afterAll() {
    
}

it('Tests can be run in friendController.test.js', () => {
    expect(true).toBe(true);
});

describe('Create functionality', () => {
    describe('Unit tests', () => {
        it('Create function with bad request returns 400', () => {
            expect(create({ name: 'Mark' })).toEqual(400);
        });

        it('Create function with good request returns 200', () => {
            expect(create({ name: 'Mark', age: 30 })).toEqual(200);
        });
    });

    describe('Integration tests', () => {
        it('Entry created in db can be retrieved', () => {
            create({ name: 'Tom', age: 25 });
            const user = FriendModel.find().sort({$natural:-1}).limit(1);
            console.log(user);
            expect(user.name).toEqual('Tom');
            expect(user.age).toEqual(25);
        });
    });
});


