const { expect } = require('chai');
const output = require('./output');
const { converter } = require('../converter');

describe('converter', () => {
	it('should convert the yml file to the correct json', () => {
		const result = converter({ directory: './test', name: 'input' });
		expect(result).to.deep.equal(output);
	});
});