import * as Yup from 'yup';
const loginSchema = () => {
  return Yup.object().shape({
    username: Yup.string().required('Zorunlu Alan'),
    password: Yup.string().required('Zorunlu Alan'),
  });
};
export {loginSchema};
