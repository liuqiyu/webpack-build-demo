module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [        // element官方教程
    [
      'component',
      {
        'libraryName': 'asp-s-l',
        style: false,
        // 'styleLibraryName': 'theme-chalk'
      }
    ]
  ]
}
