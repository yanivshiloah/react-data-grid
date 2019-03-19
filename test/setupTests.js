import '@babel/polyfill';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Immutable from 'immutable';

enzyme.configure({ adapter: new Adapter() });
window.Immutable = Immutable;
