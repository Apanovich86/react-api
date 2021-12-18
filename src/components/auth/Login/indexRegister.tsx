import { Form, FormikProvider, Field, useFormik } from "formik";
import { IRegisterModel } from "./typesRegister";
import { RegisterSchema } from "./validRegister";
import {InputGroup} from '../../common/InputGroup';
import {RegisterUser} from "./actionsRegister";

const RegisterPage = () => {

  const initialValues: IRegisterModel = {
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    photo: ""
  };
  const onHandleSubmit = (values: IRegisterModel) => {
    console.log("Server Send data: ", values);
    RegisterUser(values);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: RegisterSchema,
    onSubmit: onHandleSubmit,
  });

  const { errors, touched, handleChange, handleSubmit } = formik;
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <h1>Реєстрація на сайті</h1>

        <FormikProvider value={formik}>

          <Form onSubmit={handleSubmit}>
            <InputGroup
              field="name"
              label="Імя"
              error={errors.name}
              touched={touched.name}
              onChange={handleChange}
            />
            <InputGroup
                field="email"
                label="Пошта"
                error={errors.email}
                touched={touched.email}
                onChange={handleChange}
            />
            <InputGroup
              field="password"
              label="Пароль"
              type="password"
              touched={touched.password}
              error={errors.password}
              onChange={handleChange}
            />
            <InputGroup
                field="password"
                label="Підтвердити пароль"
                type="password"
                touched={touched.password}
                error={errors.password}
                onChange={handleChange}
            />
            <div className="m10">
              <input
                  type="file"
                  name="photo"
                  onChange={(event) => {
                  formik.setFieldValue("photo", event.currentTarget.files![0])
                  }}
                  // onChange={(event) =>
                  // formProps.setFieldValue("photo", event.target.files![0])
                  // }
              />
              <button type="submit">
                Завантажити</button>
            </div>
            <button type="submit" className="btn btn-success">
              Реєстрація
            </button>
          </Form>

        </FormikProvider>

      </div>
    </div>
  );
};

export default RegisterPage;
