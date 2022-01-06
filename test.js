import randomBoolean from './index.js';
import test from 'ava';

test('randomBoolean return type to be boolean', t => {
	t.is(typeof randomBoolean(), 'boolean');
});