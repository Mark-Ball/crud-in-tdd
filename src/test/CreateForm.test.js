import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import createForm from './../components/createForm';

Enzyme.configure({ adapter: new EnzymeAdapter() });

// beforeAll(() => {
//     const wrapper = shallow(<createForm />);
// })

describe('CreateForm tests', () => {
    it('component renders', () => {
        const wrapper = shallow(<createForm />);
    });

    it('component has input fields for name and age', () => {
        const wrapper = shallow(<createForm />);
        expect(wrapper.find('input')).to.have.lengthOf(2);
    });

    it('when name is entered, it appears in state', () => {
        const wrapper = shallow(<createForm />);
        const componentInstance = wrapper.Instance();
        // put input into the name field
        const nameInput = wrapper.find('input');
        input.simulate('change', { target: { value: 'Mark' }});
        // check the state field
        expect(componentInstance.state('name')).toBe('Mark');
    });

    it('when age is entered, it appears in state', () => {

    });

    it('when submit is pressed, the create function is called', () => {

    });
})
