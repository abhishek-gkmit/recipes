const ROUTES = {
  BottomTabs: {
    DashboardStack: 'DashboardStack',
    Favourites: 'Favourites',
    MealPlanner: 'MealPlanner',
  },

  DashboardStack: {
    Dashboard: 'Dashboard',
    Search: 'Search',
    Filter: 'Filter',
    RecepiDetails: 'RecepiDetails',
  },
} as const;

export default ROUTES;
