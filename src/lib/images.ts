const modules = import.meta.glob<string>('../Images/*', {
  eager: true,
  import: 'default',
});

export const images: Record<string, string> = Object.fromEntries(
  Object.entries(modules).map(([path, url]) => [path.split('/').pop()!, url])
);
