require('@babel/register');
const fs = require('fs');
const [,, filename] = process.argv;
const { myFileReader } = require('../src/jsx/file-reader').default;

  const theFile = myFileReader(filename);
  console.log("CONTENT_TYPE: ", typeof theFile);
  console.log("FILE_FULL: ", theFile);
  process.exit(0);
