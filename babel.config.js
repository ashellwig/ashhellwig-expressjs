module.exports = function (api) {
  api.cache(true)
  // Presets
  const presets = [
    '@babel/preset-env',
    '@babel/preset-flow'
  ]

  // Plugins
  const plugins = []

  return {
    presets,
    plugins
  }
}