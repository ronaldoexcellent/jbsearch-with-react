import Store from './Store';
import AdminHome from 'guests/admin/Home';
import EmployerHome from 'guests/employer/Home';
import UserHome from 'guests/user/Home';

function Connector({ guest }) {
    if (guest === "admin") {
        <Provider store={Store}>
            <AdminHome />
        </Provider>
    } else if (guest === "employer") {
        <Provider store={Store}>
            <EmployerHome />
        </Provider>
    } 
    return (
        <Provider store={Store}>
            <UserHome />
        </Provider>
    )
}

export default Connector;

// import { createStore, applyMiddleware, compose } from 'redux';
// import { offline } from 'redux-offline';
// import offlineConfig from 'redux-offline/lib/defaults';
// import rootReducer from './reducers';

// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(/* your middlewares */),
//     offline(offlineConfig)
//   )
// );

// const followUser = (userId) => ({
//     type: 'FOLLOW_USER_REQUEST',
//     payload: { userId },
//     meta: {
//       offline: {
//         // Network action to execute
//         effect: { url: '/api/follow', method: 'POST', body: { userId } },
//         // Action to dispatch when effect succeeds
//         commit: { type: 'FOLLOW_USER_COMMIT', meta: { userId } },
//         // Action to dispatch if network action fails
//         rollback: { type: 'FOLLOW_USER_ROLLBACK', meta: { userId } },
//       },
//     },
//   });
  
