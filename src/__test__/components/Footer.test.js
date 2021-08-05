import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';
import { describe } from 'yargs';
import { expect } from '@jest/globals';

describe('Test <Footer />', () => {
    test('Render del componente Footer', () => {
        const footer = mount(<Footer />);
        expect(footer.length).toEqual(1);
    });
});