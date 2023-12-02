const list_helper = require('./utils/list_helper.js')

describe("Jest configuration check", () => {
	test("dummy returns one", () => {
	 expect(list_helper.dummy([])).toBe(1);
	});
})
