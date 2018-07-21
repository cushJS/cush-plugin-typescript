module.exports = function() {
  const exts = this.get('exts');
  exts.push('.ts');
  this.merge('sucrase.exts', {
    '.ts': ['typescript']
  });
  this.hook('config', () => {
    if (exts.includes('.jsx')) {
      exts.push('.tsx');
      this.merge('sucrase.exts', {
        '.tsx': ['jsx', 'typescript']
      });
    }
  });
};
