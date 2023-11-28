module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            "~presentation": "./presentation",
          },
        },
      ],
      [
        'module:react-native-dotenv',
        {
          moduleName: "react-native-dotenv",
        },
      ],
    ],
  };
};
