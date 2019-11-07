const { Buffer } = require('buffer');
const { expect } = require('chai');
const output = require('./output');

describe('converter', () => {
	it('should return a buffer', () => {
		const result = converter({ directory: './', name: 'input' });
		expect(result).to.be.a(Buffer);
	});

	it('should convert the yml file to the correct json', () => {
		const result = converter({ directory: './', name: 'input' });
		const str = result.toString();
		const json = JSON.parse(str);
		expect(json).to.deep.equal(output);
	});
});