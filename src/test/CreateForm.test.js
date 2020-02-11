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
        const nameInput = wrapper.find("input[type='name']");
        nameInput.simulate('change', { target: { value: 'Mark' }});

        expect(componentInstance.state('name')).toEqual('Mark');
    });

    it('when age is entered, it appears in state', () => {
        const wrapper = shallow(<createForm />);
        const ageInput = wrapper.find("input[type='age']");
        ageInput.simulate('change', { target: { value: 30 }});

        expect(wrapper.state('age')).toEqual(30);
    });

    it('when submit is pressed, the create function is called', () => {
        const wrapper = shallow(<createForm />);
        wrapper.find('.form-login').simulate('submit');
    });
})
