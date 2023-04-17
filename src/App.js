import "./App.css";
import { SignUp } from "./features/users/SignUp/SignUp";
import { SignIn } from "./features/users/SignIn/SignIn";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TicketPlan } from "./features/booking/TicketPlan/TicketPlan";
import { SeatPlan } from "./features/booking/SeatPlan/SeatPlan";
import { store } from "./store/store";
import { Home } from "./features/Movie/Home";
import { Navbar } from "./features/shared/NavBar/NavBar";
import { MovieDetail } from "./features/Movie/MovieDetail";

function App() {
  return (
    <div className="App">
      {/* Providing redux store to entire application */}
      {/* without this, components can't access reducer & actions */}
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/movie/:id/" element={<MovieDetail />}>
              {/* <Route path='ticketPlan' element={
                <TicketPlan />
                }>
              </Route>
              <Route path='checkout' element={
                <Navbar />
                }>
              </Route> */}
            </Route>
            <Route
              path="/movie/:id/ticketPlan"
              element={<TicketPlan />}
            ></Route>
            <Route
              path="/movie/seatPlan/:cinemaID"
              element={<SeatPlan />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
      <Navbar />
      <SignUp />
      <SignIn />
    </div>
  );
}

export default App;
