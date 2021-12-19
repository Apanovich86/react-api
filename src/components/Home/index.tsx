import { useDispatch } from "react-redux";
import { AuthActionTypes } from "../auth/Login/types";

const HomePage = () => {
  const dispatch = useDispatch(); //хук який відповідає за роботу в redux, використовуємо для логінації
  return (
    <>
      <h1>Головна сторінка</h1>

      <button
        className="btn btn-success"
        onClick={() => {
          dispatch({ //приймає тип action і навантаження
            type: AuthActionTypes.LOGIN,
            payload: {
              email: "kombat@gmail.com",
            },
          });
          console.log("login");
        }}
      >
        Залогінити
      </button>

      <button
        className="btn btn-danger"
        onClick={() => {
          dispatch({
            type: AuthActionTypes.LOGOUT, //приймає тип action, для logout ,без навантаження
          });
          
        }}
      >
        Вийти
      </button>
    </>
  );
};

export default HomePage;
