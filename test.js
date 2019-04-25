import test from 'ava';
import revisionHash from '.';

console.log(revisionHash('Lorem ipsum dolor sit amet'));

const fixture = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.';
const fixtureBuffer = Buffer.from(fixture);

test('main', t => {
	t.is(revisionHash(fixture), 'bb9d8fe615');
	t.is(revisionHash(fixtureBuffer), 'bb9d8fe615');
});
