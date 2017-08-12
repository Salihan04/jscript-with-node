let cscript = require('path').join(process.env.SystemRoot, 'system32', 'cscript.exe')
let childProc = require('child_process')
childProc.spawn(cscript, ['/nologo', './sample.js'], {
  shell: true
})
