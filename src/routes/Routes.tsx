import React from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';

import routes from './index';

const Routes: React.FC = () => (
  <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
);

export default Routes;
