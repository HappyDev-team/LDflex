import * as ldflex from '../../src/index';

describe('The LDflex module', () => {
  const exports = [
    'DataHandler',
    'ExecuteQueryHandler',
    'JSONLDResolver',
    'PathExpressionHandler',
    'PathProxy',
    'PathFactory',
    'SparqlHandler',
    'SubjectHandler',
    'StringToLDflexHandler',
    'defaultHandlers',
    'getFirstItem',
    'getThen',
    'iteratorFor',
    'toIterablePromise',
  ];

  exports.forEach(name => {
    it(`exports ${name}`, () => {
      expect(ldflex[name]).toBeInstanceOf(Object);
    });
  });
});
