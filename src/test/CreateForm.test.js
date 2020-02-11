import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import CreateForm from './../components/CreateForm';

Enzyme.configure({ adapter: new EnzymeAdapter() });

// beforeAll(() => {
//     const wrapper = shallow(<createForm />);
// })

describe('CreateForm tests', () => {
    it('component renders', () => {
        const wrapper = shallow(<CreateForm />);
    });

    it.only('component has a form with input fields for name and age', () => {
        const wrapper = shallow(<CreateForm />);
        expect(wrapper.find('form').exists()).toBe(true);
        expect(wrapper.find("input[name='name']").exists()).toBe(true);
        expect(wrapper.find("input[name='age']").exists()).toBe(true);
    });

    it('when name is entered, it appears in state', () => {
        const wrapper = shallow(<CreateForm />);
        const nameInput = wrapper.find("input[type='name']");
        nameInput.simulate('change', { target: { value: 'Mark' }});

        expect(componentInstance.state('name')).toEqual('Mark');
    });

    it('when age is entered, it appears in state', () => {
        const wrapper = shallow(<CreateForm />);
        const ageInput = wrapper.find("input[type='age']");
        ageInput.simulate('change', { target: { value: 30 }});

        expect(wrapper.state('age')).toEqual(30);
    });

    it('when submit is pressed, the create function is called', () => {
        const wrapper = shallow(<CreateForm />);
        wrapper.find('.form-login').simulate('submit');
    });
})
