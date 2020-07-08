module.exports = {
  name: 'carcrud',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/carcrud',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
