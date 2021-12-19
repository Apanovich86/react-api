import { Outlet } from "react-router";
import Header from "./Header";

const DefaultLayout = () => {
    return (
      <>
        <Header />
        <div className="container">
            <Outlet />
            {/*дозволяє компоненту відображати його дочірні маршрути*/}
        </div>
      </>
    );
}
export default DefaultLayout;
