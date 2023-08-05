const mapping: Record<string, string> = {
  salons: 'salon',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
