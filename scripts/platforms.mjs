export const platforms = {
  macos: "macOS",
  windows: "Windows",
  linux: "Linux"
};

export const platformBadge = key => {
 if (!Object.hasOwn(platforms, key)) throw new Error(`Unknown platform: ${key}`);
 return `<img src="assets/badges/${key}.svg" alt="${platforms[key]}">`;
};
