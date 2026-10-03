export const platforms = {
  "macos": "macOS",
  "windows": "Windows",
  "linux": "Linux",
  "web": "Web",
  "ios": "iOS",
  "android": "Android",
  "cli": "CLI",
  "browser": "Browser",
  "ide": "IDE",
  "self-hosted": "Self-hosted"
};

export const platformBadge = key => {
 if (!Object.hasOwn(platforms, key)) throw new Error(`Unknown platform: ${key}`);
 return `![${platforms[key]}](assets/badges/${key}.svg)`;
};
