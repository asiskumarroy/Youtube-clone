import Head from './components/Header/Head';
import Body from './components/Body/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/Body/MainContainer/MainContainer';
import WatchPage from './components/WatchPage/WatchPage';

function App() {

  const appRouter=createBrowserRouter([{
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>,
      },
      {
        path:"/watch",
        element:<WatchPage/>,
      }
    ]
  }])



  return (
    <Provider store={store}>
    <div>
      <Head></Head>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
