import glob from 'glob';
import render from 'react-test-renderer'
import MockDate from 'mockdate';

export default function demoTest(component, options = {}) {
  const files = glob.sync(`components/${component}.jsx`);

  files.forEach((file) => {
    let testMethod = options.skip === true ? test.skip : test;
    if (Array.isArray(options.skip) && options.skip.some(c => file.includes(c))) {
      testMethod = test.skip;
    }
    testMethod(`renders ${file} correctly`, () => {
      MockDate.set(new Date('2017-01-11').getTime() + (new Date().getTimezoneOffset() * 60 * 1000));
      const demo = require(`../.${file}`); // eslint-disable-line global-require, import/no-dynamic-require
      const wrapper = render(demo);
      expect(wrapper.toJSON()).toMatchSnapshot();
      MockDate.reset();
    });
  });
}
