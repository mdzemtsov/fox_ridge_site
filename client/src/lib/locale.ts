export function isChinesePath(path: string) {
  return path === "/zh" || path.startsWith("/zh/");
}

export function toChinesePath(path: string) {
  if (path === "/") return "/zh";
  return `/zh${path}`;
}

export function toEnglishPath(path: string) {
  if (path === "/zh") return "/";
  if (path.startsWith("/zh/")) return path.slice(3);
  return path;
}

export function toLocalizedPath(path: string, chinese: boolean) {
  return chinese ? toChinesePath(path) : path;
}

export function toAlternatePath(path: string) {
  return isChinesePath(path) ? toEnglishPath(path) : toChinesePath(path);
}
