function buildConfig(env) {
  if(!env){
    env = 'dev'
  }
  return require('./' + env + '.js')({ env: env })
}

module.exports = buildConfig