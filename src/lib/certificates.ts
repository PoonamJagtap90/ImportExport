const modules = import.meta.glob<string>('../app/pages/Certificates/*.pdf', {
  eager: true,
  query: '?url',
  import: 'default',
});

export const certificates: Record<string, string> = Object.fromEntries(
  Object.entries(modules).map(([path, url]) => [path.split('/').pop()!, url])
);
