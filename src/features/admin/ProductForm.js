import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
  Option,
  Select,
} from "@material-tailwind/react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router";
import { useAddProductMutation } from "../shared/productApi";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const ProductForm = () => {

  const [addProduct, { isLoading }] = useAddProductMutation();
  const { user } = useSelector((state) => state.userSlice);
  const nav = useNavigate();
  const productSchema = Yup.object({
    product_name: Yup.string().required(),
    product_detail: Yup.string().required(),
    product_price: Yup.number().required(),
    countInStock: Yup.number().required(),
    brand: Yup.string().required(),
    category: Yup.string().required(),
    product_image: Yup.mixed().required().test('fileType', 'invalid image', (e) => {
      return ['image/jpg', 'image/png', 'image/jpeg'].includes(e.type);
    })
  });

  const { values, handleChange,
    handleSubmit, errors, setFieldValue, touched } = useFormik({

      initialValues: {
        product_name: '',
        product_detail: '',
        product_price: '',
        countInStock: '',
        brand: '',
        category: '',
        product_image: null,
        imageReview: ''

      },

      onSubmit: async (val, { resetForm }) => {
        const formData = new FormData();

        formData.append('product_name', val.product_name);
        formData.append('product_detail', val.product_detail);
        formData.append('product_price', Number(val.product_price));
        formData.append('countInStock', Number(val.countInStock));
        formData.append('category', val.category);
        formData.append('brand', val.brand);
        formData.append('product_image', val.product_image);

        try {

          await addProduct({
            body: formData,
            token: user.token
          }).unwrap();
          toast.success('add success');
          nav(-1);
        } catch (err) {
          console.log(err);
          toast.error(`${err.data?.message}`);
        }
      },
      //validationSchema: productSchema

    });

  return (
    <Card color="transparent" shadow={false} className="max-w-sm  mx-auto mt-4 mb-4">
      <Typography variant="h4" color="blue-gray">
        Add Product
      </Typography>

      <form onSubmit={handleSubmit} className="mt-2">
        <div className="mb-1 flex flex-col gap-3 space-y-2">

          <Input
            size="lg"
            placeholder="product_name"
            label="product_name"
            name="product_name"
            onChange={handleChange}
          />
          {errors.product_name && touched.product_name && <h1 className='text-pink-700'>{errors.product_name}</h1>}

          <Input
            size="lg"
            placeholder="product_price"
            label="product_price"
            name="product_price"
            onChange={handleChange}
          />
          {errors.product_price && touched.product_price && <h1 className='text-pink-700'>{errors.product_price}</h1>}
          <Input
            size="lg"
            placeholder="countInStock"
            label="countInStock"
            onChange={handleChange}
            name="countInStock"
          />
          {errors.countInStock && touched.countInStock && <h1 className='text-pink-700'>{errors.countInStock}</h1>}
          <Select onChange={(e) => setFieldValue('brand', e)} label="Select Brand">
            <Option value="Nike">Nike</Option>
            <Option value="Panasonic">Panasonic</Option>
            <Option value="Samsung">Samsung</Option>
            <Option value="Dolce">Dolce</Option>
            <Option value="Kfc">Kfc</Option>
          </Select>
          <Select onChange={(e) => setFieldValue('category', e)} label="Select Category">
            <Option value="Clothes">Clothes</Option>
            <Option value="Beauty">Beauty</Option>
            <Option value="Tech">Tech</Option>
          </Select>

          <Textarea
            size="lg"
            placeholder="product_detail"
            label="product_detail"
            name="product_detail"
            onChange={handleChange}
          />


          <div className='space-y-2'>
            <h1>Select An Image</h1>

            <Input
              label="Image File"
              onChange={(e) => {
                const file = e.target.files[0];
                setFieldValue('imageReview', URL.createObjectURL(file))
                setFieldValue('product_image', file);
              }}
              type='file'
              name='image'
              multiple
              accept='image/*'
            />
            {errors.product_image && touched.product_image && <h1 className='text-pink-700'>{errors.product_image}</h1>}
            {values.imageReview && <img src={values.imageReview} alt="" />}
          </div>


        </div>

        <Button loading={isLoading} type="submit" className="mt-6" fullWidth>
          Submit
        </Button>

      </form>
    </Card>
  )
}
export default ProductForm