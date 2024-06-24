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
import { useNavigate } from 'react-router';
import * as Yup from 'yup';
import { useSelector } from "react-redux";
import { imageUrl } from "../../../constants/constants";


const ProductEditForm = ({ data }) => {

  const { user } = useSelector((state) => state.userSlice);
  const nav = useNavigate();

  const productSchema = Yup.object({
    product_name: Yup.string().required(),
    product_detail: Yup.string().required(),
    product_price: Yup.number().required(),
    countInStock: Yup.number().required(),
    brand: Yup.string().required(),
    category: Yup.string().required(),
    // product_image: Yup.mixed().required().test('fileType', 'invalid image', (e) => {
    //   return ['image/jpg', 'image/png', 'image/jpeg'].includes(e.type);
    // })
  });

  const { values, handleChange,
    handleSubmit, errors, setFieldValue, touched } = useFormik({

      initialValues: {
        product_name: data.product_name,
        product_detail: data.product_detail,
        product_price: data.product_price,
        countInStock: data.countInStock,
        brand: data.brand,
        category: data.category,
        product_image: null,
        imageReview: data.product_image

      },

      onSubmit: async (val, { resetForm }) => {


      },
      validationSchema: productSchema

    });

  console.log(data);
  return (
    <Card color="transparent" shadow={false} className="max-w-sm  mx-auto mt-4 mb-4">
      <Typography variant="h4" color="blue-gray">
        Edit Product
      </Typography>

      <form onSubmit={handleSubmit} className="mt-2">
        <div className="mb-1 flex flex-col gap-3 space-y-2">

          <Input
            size="lg"
            placeholder="product_name"
            label="product_name"
            name="product_name"
            value={values.product_name}
            onChange={handleChange}
          />
          {errors.product_name && touched.product_name && <h1 className='text-pink-700'>{errors.product_name}</h1>}

          <Input
            size="lg"
            placeholder="product_price"
            label="product_price"
            name="product_price"
            value={values.product_price}
            onChange={handleChange}
          />
          {errors.product_price && touched.product_price && <h1 className='text-pink-700'>{errors.product_price}</h1>}
          <Input
            size="lg"
            placeholder="countInStock"
            label="countInStock"
            value={values.countInStock}
            onChange={handleChange}
            name="countInStock"
          />
          {errors.countInStock && touched.countInStock && <h1 className='text-pink-700'>{errors.countInStock}</h1>}
          <Select value={values.brand} onChange={(e) => setFieldValue('brand', e)} label="Select Brand">
            <Option value="Nike">Nike</Option>
            <Option value="Panasonic">Panasonic</Option>
            <Option value="Samsung">Samsung</Option>
            <Option value="Dolce">Dolce</Option>
            <Option value="Kfc">Kfc</Option>
          </Select>
          <Select value={values.category} onChange={(e) => setFieldValue('category', e)} label="Select Category">
            <Option value="clothes">Clothes</Option>
            <Option value="beauty">Beauty</Option>
            <Option value="tech">Tech</Option>
          </Select>

          <Textarea
            size="lg"
            placeholder="product_detail"
            label="product_detail"
            name="product_detail"
            value={values.product_detail}
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

            {values.imageReview && <img src={values.product_image === null ? `${imageUrl}${values.imageReview}` : values.imageReview} alt="" />}
          </div>


        </div>

        <Button type="submit" className="mt-6" fullWidth>
          Submit
        </Button>

      </form>
    </Card>
  )
}
export default ProductEditForm