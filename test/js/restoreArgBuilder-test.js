let assert = require('assert');
let builder = require('../../lib/builders/restoreArgBuilder');
describe('Restore Argument Builder', () => {
    it('should return an empty array if nothing is passed in', () => {
      assert.deepEqual(builder(), []);
    });
    it('should return an empty array if an empty object is passed in', () => {
      assert.deepEqual(builder({}), []);
    });
    it('should return an empty array if an array is passed in', () => {
      assert.deepEqual(builder([]), []);
    });
    it('should have source if source is passed', () => {
      assert.deepEqual(builder({source: 'yo'}), ['--source', 'yo']);
    });
    it('should have runtime if runtime is passed', () => {
      assert.deepEqual(builder({runtime: 'yo'}), ['--runtime', 'yo']);
    });
    it('should have packages if packages is passed', () => {
      assert.deepEqual(builder({packages: 'yo'}), ['--packages', 'yo']);
    });
    it('should have configfile if configfile is passed', () => {
      assert.deepEqual(builder({configfile: 'yo'}), ['--configfile', 'yo']);
    });
    it('should have disableParallel if disableParallel is passed', () => {
      assert.deepEqual(builder({disableParallel: true}), ['--disable-parallel']);
    });
    it('should have noIncremental if noIncremental is passed', () => {
      assert.deepEqual(builder({noIncremental: true}), ['--no-incremental']);
    });
    it('should have noDepenencies if noDepenencies is passed', () => {
      assert.deepEqual(builder({noDepenencies: true}), ['--no-dependencies']);
    });
    it('should have msbuild args if msbuildargs are passed and are always last', () => {
      assert.deepEqual(builder({msbuildArgs: ['/p:awesome=1.0.0', '/t:Build']}), ['/p:awesome=1.0.0', '/t:Build']);
    });
});