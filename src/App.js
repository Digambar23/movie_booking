import logo from './logo.svg';
import './App.css';
import { NavBar } from './features/shared/NavBar/NavBar';
import { SignUp } from './features/users/SignUp/SignUp';
import { SignIn } from './features/users/SignIn/SignIn';
import { Provider } from 'react-redux';
import { Home } from './features/movie/Home/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { MovieDetail } from './features/movie/MovieDetail/MovieDetail';
import { TicketPlan } from './features/booking/TicketPlan/TicketPlan';
import { SeatPlan } from './features/booking/SeatPlan/SeatPlan';
import { store } from './store/store';

function App() {
  return (
    <div className="App">
      {/* Providing redux store to entire application */}
      {/* without this, components can't access reducer & actions */}
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
             <Home />
          }>
          </Route>
          <Route path='/movie/:id/' element={
             <MovieDetail />
          }>
            {/* <Route path='ticketPlan' element={
                <TicketPlan />
                }>
              </Route>
              <Route path='checkout' element={
                <Navbar />
                }>
              </Route> */}
          </Route>
          <Route path='/movie/:id/ticketPlan' element={
                <TicketPlan />
                }>
          </Route>
          <Route path='/movie/seatPlan/:cinemaID'
            element={
              <SeatPlan />
            }>
              
            </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
      <NavBar />
      <SignUp />
      <SignIn />
     
    </div>
  );
}

export default App;
