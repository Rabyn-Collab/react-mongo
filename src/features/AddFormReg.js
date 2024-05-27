import React, { useState } from 'react'
import { Card, Input, Typography, Button } from '@material-tailwind/react';
import { useFormik } from 'formik'

import axios from 'axios'

const AddFormReg = () => {

  const [manda, setManda] = useState([
    {
      doc: '',
      path: null
    }
  ]);

  const addForm = () => {
    setManda([...manda, { doc: '', path: null }]);
    setFieldValue('manda', [...values.manda, { doc: '', path: null }]);
  };
  const handleMandaChange = (index, field, value) => {
    const newManda = values.manda.map((item, i) => (
      i === index ? { ...item, [field]: value } : item
    ));
    setFieldValue('manda', newManda);
  };

  const handleFileChange = (index, file) => {
    const newManda = values.manda.map((item, i) => (
      i === index ? { ...item, path: file } : item
    ));
    setFieldValue('manda', newManda);
  };




  const { handleChange, handleSubmit, values, setFieldValue } = useFormik({

    initialValues: {
      BRANCH: '',
      manda: [{ doc: '', path: null }],
      SOL_ID: '',
      STUDENT_ID: '',
      PURPOSE: '',
      STUDENT_NAME: '',
      GUARDIAN_NAME: '',
      RELATION: '',
      ACCOUNT_NUMBER: '',
      ACCOUNT_HOLDER_NAME: '',
      ADDRESS: '',
      CITIZEN_NO: '',
      PASSPORT_NO: '',
      REFUND_TRANID: '',
      FEE_REFUND_DATE: '',
      FEE_REFUND_AMOUNT_FCY: '',
      FEE_REFUND_CURRENCY: '',
      REFUND_EXCHANGE_RATE: '',
      FEE_REFUND_AMOUNT_LCY: '',
      TRANID_REMITTED: '',
      FEE_REMITTED_DATE: '',
      FEE_REMITTED_AMOUNT_FCY: '',
      FEE_REMITTED_CURRENCY: '',
      REMITTED_EXCHANGE_RATE: '',
      FEE_REMITTED_AMOUNT_LCY: '',
      REMARKS: '',

      STATUS: '',
      LOT: '',
    },
    onSubmit: async (val) => {
      const formData = new FormData();
      //formData.append('ii', 90);
      formData.append('BRANCH', val.BRANCH);
      formData.append('SOL_ID', val.SOL_ID);
      formData.append('STUDENT_ID', val.STUDENT_ID);
      formData.append('PURPOSE', val.PURPOSE);
      formData.append('STUDENT_NAME', val.STUDENT_ID);
      formData.append('GUARDIAN_NAME', val.GUARDIAN_NAME);
      formData.append('RELATION', val.RELATION);
      formData.append('ACCOUNT_NUMBER', val.ACCOUNT_NUMBER);
      formData.append('ACCOUNT_HOLDER_NAME', val.ACCOUNT_HOLDER_NAME);
      formData.append('ADDRESS', val.ADDRESS);
      formData.append('NUMBER_DOCUMENTS', val.NUMBER_DOCUMENTS);
      formData.append('NUMBER', val.NUMBER);
      formData.append('REFUND_TRANID', val.REFUND_TRANID);
      formData.append('FEE_REFUND_DATE', val.FEE_REFUND_DATE);
      formData.append('FEE_REFUND_AMOUNT_FCY', val.FEE_REFUND_AMOUNT_FCY);

      formData.append('FEE_REFUND_CURRENCY', val.FEE_REFUND_CURRENCY);
      formData.append('REFUND_EXCHANGE_RATE', val.REFUND_EXCHANGE_RATE);

      formData.append('FEE_REFUND_AMOUNT_LCY', val.FEE_REFUND_AMOUNT_LCY);
      formData.append('TRANID_REMITTED', val.TRANID_REMITTED);
      formData.append('FEE_REMITTED_DATE', val.FEE_REMITTED_DATE);
      formData.append('FEE_REMITTED_AMOUNT_FCY', val.FEE_REMITTED_AMOUNT_FCY);
      formData.append('FEE_REMITTED_CURRENCY', val.FEE_REMITTED_CURRENCY);
      formData.append('REMITTED_EXCHANGE_RATE', val.REMITTED_EXCHANGE_RATE);
      formData.append('FEE_REMITTED_AMOUNT_LCY', val.FEE_REMITTED_AMOUNT_LCY);

      formData.append('STATUS', val.STATUS);
      formData.append('DOCUMENTS', val.manda.map((v) => v.doc))
      val.manda.forEach((mad, i) => {
        formData.append(`files${i}`, mad.path);

      });
      formData.append('LOT', val.LOT);
      console.log(formData);
      console.log(val)

      //   try {
      //     const response = await axios.post(
      //       'http://localhost:8080/api/forminformation/addforminformation',
      //       formData
      //     );
      //     console.log('Response:', response.data);
      //      console.log(formData)

      //   } catch (error) {
      //     console.log('Error making POST request:', error);
      //   }


    }


  });






  return (
    <>

      <Card color="transparent" shadow={false}>



        <Typography variant="h4" color="blue-gray">
          FORM
        </Typography>
        <Typography color="gray" className="mt-1 font-normal"></Typography>

        <div className="card">
          <div className="card-header">
            <strong>Create Education Tax Refund Request</strong>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <button type='button' onClick={addForm}>Add Some</button>
              {values.manda.map((man, i) => (
                <div key={i}>

                  <select onChange={(e) => handleMandaChange(i, 'doc', e.target.value)} name="doc" id="">
                    {showValues.map((show, i) => {
                      return <option key={i} value={show}>{show}</option>
                    })}


                  </select>
                  {/* <input
              value={man.doc}
              onChange={(e) => handleMandaChange(i, 'doc', e.target.value)}
              type="text"
              className='border-2 border-black'
            /> */}
                  <br />
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(i, e.target.files[0])}
                  />
                  <br />
                  <br />
                </div>
              ))}



              <div className="row">
                <div className="col-md-4">
                  <label>BRANCH</label>
                  <Input
                    name="BRANCH"
                    placeholder="BRANCH NAME"
                    value={values.BRANCH}
                    onChange={handleChange}
                    className="form-control branch_name_style"
                    labelProps={{
                      className: 'before:content-none after:content-none',
                    }}
                  />
                </div>
                <div className="col-md-4">
                  <label>SOL ID</label>
                  <Input
                    name="SOL_ID"
                    value={values.SOL_ID}
                    onChange={handleChange}
                    placeholder="SOL ID"
                    className="form-control"
                    labelProps={{
                      className: 'before:content-none after:content-none',
                    }}
                  />
                </div>
                <div className="col-md-4">
                  <label>STUDENT_ID</label>
                  <Input
                    name="STUDENT_ID"
                    placeholder="STUDENT_ID"
                    value={values.STUDENT_ID}
                    onChange={handleChange}
                    className="form-control"
                    labelProps={{
                      className: 'before:content-none after:content-none',
                    }}
                  />
                </div>
                <div className="col-md-4">
                  <label>PURPOSE</label>

                  <Input
                    name="PURPOSE"
                    placeholder="purpose"
                    value={values.PURPOSE}
                    onChange={handleChange}
                    className="form-control"
                    labelProps={{
                      className: 'before:content-none after:content-none',
                    }}
                  />
                </div>
                <div className="col-md-4">
                  <label>STUDENT_NAME</label>
                  <Input
                    name="STUDENT_NAME"
                    placeholder="STUDENT NAME"
                    value={values.STUDENT_NAME}
                    onChange={handleChange}
                    className="form-control"
                    labelProps={{
                      className: 'before:content-none after:content-none',
                    }}
                  />
                </div>


                <div className="col-md-4">
                  <label>GUARDIAN_NAME</label>
                  <Input

                    name="GUARDIAN_NAME"
                    placeholder="GUARDIAN_NAME"
                    value={values.GUARDIAN_NAME}
                    onChange={handleChange}
                    className="form-control"
                    labelProps={{
                      className: 'before:content-none after:content-none',
                    }}
                  />
                </div>
                <div className="col-md-4">
                  <label >RELATION</label>

                  <select
                    value={values.RELATION}
                    onChange={handleChange}
                    name="RELATION"
                    className="px-4 py-2 border rounded-md focus:outline-none focus:border-gray-900"
                  >
                    <option value="">Select Relation</option>
                    <option value="FATHER">FATHER</option>
                    <option value="MOTHER">MOTHER</option>
                    <option value="UNCLE">UNCLE</option>
                    <option value="AUNT">AUNT</option>
                    <option value="HUSBAND">HUSBAND</option>
                    <option value="WIFE">WIFE</option>
                    <option value="BROTHER">BROTHER</option>
                    <option value="SISTER">SISTER</option>
                    <option value="GRANDFATHER">GRANDFATHER</option>
                    <option value="GRANDMOTHER">GRANDMOTHER</option>
                    <option value="OTHERS">OTHERS</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label>ACCOUNT NUMBER</label>
                  <Input
                    type="number"
                    name="ACCOUNT_NUMBER"
                    placeholder="ACCOUNT NUMBER"
                    value={values.ACCOUNT_NUMBER}
                    onChange={handleChange}
                    className="form-control"
                    labelProps={{
                      className: 'before:content-none after:content-none',
                    }}
                  />
                </div>



                <div className="col-md-4">
                  <label>ACCOUNT_HOLDER_NAME</label>
                  <Input

                    name="ACCOUNT_HOLDER_NAME"
                    placeholder="NAME"
                    value={values.ACCOUNT_HOLDER_NAME}
                    onChange={handleChange}
                    className="form-control"
                    labelProps={{
                      className: 'before:content-none after:content-none',
                    }}
                  />
                </div>
                <div className="col-md-4">
                  <label >ADDRESS</label>
                  <Input

                    name="ADDRESS"
                    placeholder="ADDRESS"
                    value={values.ADDRESS}
                    onChange={handleChange}
                    className="form-control"
                    labelProps={{
                      className: 'before:content-none after:content-none',
                    }}
                  />
                </div>
                <div className="col-md-4">
                  <label>NUMBER_DOCUMENTS</label>

                  <select
                    value={values.NUMBER_DOCUMENTS}
                    onChange={handleChange}
                    name="NUMBER_DOCUMENTS"
                    className="form-control"
                  >
                    <option value="">Select DOCUMENTS</option>
                    <option value="CITIZENSHIP">CITIZENSHIP</option>
                    <option value="PASSPORT">PASSPORT</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label>NUMBER</label>
                  <Input

                    name="NUMBER"
                    placeholder="NUMBER"
                    value={values.NUMBER}
                    onChange={handleChange}
                    className="form-control"
                    labelProps={{
                      className: 'before:content-none after:content-none',
                    }}
                  />
                </div>
                <div className="col-md-4">
                  <label>REFUND_TRANID</label>
                  <Input
                    name="REFUND_TRANID"
                    placeholder="REFUND_TRANID"
                    value={values.REFUND_TRANID}
                    onChange={handleChange}
                    className="form-control"
                    labelProps={{
                      className: 'before:content-none after:content-none',
                    }}
                  />
                </div>
                <div className='col-md-4'>
                  <label>FEE_REFUND_DATE</label>
                  <Input
                    type='date'
                    name='FEE_REFUND_DATE'
                    placeholder='FEE_REFUND_DATE'
                    value={values.FEE_REFUND_DATE}
                    onChange={handleChange}
                    className="form-control"

                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}

                  />

                </div>
                <div className="col-md-4">
                  <label>FEE_REFUND_AMOUNT_FCY</label>
                  <Input

                    name="FEE_REFUND_AMOUNT_FCY"
                    placeholder="FEE_REFUND_AMOUNT_FCY"
                    value={values.FEE_REFUND_AMOUNT_FCY}
                    onChange={handleChange}
                    className="form-control"
                    labelProps={{
                      className: 'before:content-none after:content-none',
                    }}
                  />
                </div>
                <div className='col-md-12'>
                  <label>FEE_REFUND_CURRENCY</label>
                  <select
                    value={values.FEE_REFUND_CURRENCY}
                    onChange={handleChange}
                    name='FEE_REFUND_CURRENCY'
                    placeholder='FEE_REFUND_CURRENCY'
                    className="px-4 py-2 border rounded-md focus:outline-none focus:border-gray-700"
                  >
                    <option value="">Selected FEE_REFUND_CURRENCY</option>
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="CAD">CAD</option>
                    <option value="JPY">JPY</option>
                    <option value="AUD">AUD</option>
                    <option value="EUR">EUR</option>
                    <option value="QAR">QAR</option>
                    <option value="SAR">SAR</option>
                    <option value="SEK">SEK</option>
                    <option value="SGD">SGD</option>
                    <option value="THB">THB</option>
                    <option value="XAU">XAU</option>


                  </select>

                </div>
                <div className='col-md-6 mt-2'>
                  <label>REFUND_EXCHANGE_RATE</label>
                  <Input

                    onChange={handleChange}
                    name='REFUND_EXCHANGE_RATE'
                    value={values.REFUND_EXCHANGE_RATE}
                    placeholder='REFUND_EXCHANGE_RATE'
                    className='form-control'
                    labelProps={{
                      className: 'before:content-none after:content-none',
                    }}

                  />

                </div>
                <div className='col-md-6 mt-2'>
                  <label>FEE_REFUND_AMOUNT_LCY</label>
                  <Input

                    onChange={handleChange}
                    name='FEE_REFUND_AMOUNT_LCY'
                    value={values.FEE_REFUND_AMOUNT_LCY}
                    placeholder='FEE_REFUND_AMOUNT_LCY'
                    className='form-control'
                    labelProps={{
                      className: 'before:content-none after:content-none',
                    }}

                  />

                </div>
                <div className="col-md-4">
                  <label>TRANID_REMITTED</label>
                  <Input
                    name="TRANID_REMITTED"
                    placeholder="TRANID_REMITTED"
                    value={values.TRANID_REMITTED}
                    onChange={handleChange}
                    className="form-control"
                    labelProps={{
                      className: 'before:content-none after:content-none',
                    }}
                  />
                </div>
                <div className='col-md-4'>
                  <label>FEE_REMITTED_DATE</label>
                  <Input
                    type='date'
                    name='FEE_REMITTED_DATE'
                    placeholder='FEE_REMITTED_DATE'
                    value={values.FEE_REMITTED_DATE}
                    onChange={handleChange}
                    className="form-control"

                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}

                  />

                </div>
                <div className="col-md-4">
                  <label>FEE_REMITTED_AMOUNT_FCY</label>
                  <Input

                    name="FEE_REMITTED_AMOUNT_FCY"
                    placeholder="FEE_REMITTED_AMOUNT_FCY"
                    value={values.FEE_REMITTED_AMOUNT_FCY}
                    onChange={handleChange}
                    className="form-control"
                    labelProps={{
                      className: 'before:content-none after:content-none',
                    }}
                  />
                </div>
                <div className='col-md-12'>
                  <label>FEE_REMITTED_CURRENCY</label>
                  <select
                    value={values.FEE_REMITTED_CURRENCY}
                    onChange={handleChange}
                    name='FEE_REMITTED_CURRENCY'
                    placeholder='FEE_REMITTED_CURRENCY'
                    className="px-4 py-2 border rounded-md focus:outline-none focus:border-gray-700"
                  >
                    <option value="">Selected FEE_REFUND_CURRENCY</option>
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="CAD">CAD</option>
                    <option value="JPY">JPY</option>
                    <option value="AUD">AUD</option>
                    <option value="EUR">EUR</option>
                    <option value="QAR">QAR</option>
                    <option value="SAR">SAR</option>
                    <option value="SEK">SEK</option>
                    <option value="SGD">SGD</option>
                    <option value="THB">THB</option>
                    <option value="XAU">XAU</option>


                  </select>

                </div>
                <div className='col-md-6 mt-2'>
                  <label>REMITTED_EXCHANGE_RATE</label>
                  <Input

                    onChange={handleChange}
                    name='REMITTED_EXCHANGE_RATE'
                    value={values.REMITTED_EXCHANGE_RATE}
                    placeholder='REMITTED_EXCHANGE_RATE'
                    className='form-control'
                    labelProps={{
                      className: 'before:content-none after:content-none',
                    }}

                  />

                </div>
                <div className='col-md-6 mt-2'>
                  <label>FEE_REMITTED_AMOUNT_LCY</label>
                  <Input

                    onChange={handleChange}
                    name='FEE_REMITTED_AMOUNT_LCY'
                    value={values.FEE_REMITTED_AMOUNT_LCY}
                    placeholder='FEE_REMITTED_AMOUNT_LCY'
                    className='form-control'
                    labelProps={{
                      className: 'before:content-none after:content-none',
                    }}

                  />

                </div>
                {/* <div className='col-md-12'>
       <label>Remarks</label>
       <CKEditor
          editor={ClassicEditor}
          data={remarksContent}
          onChange={(event,editor)=>{
            const data = editor.getData()
            setvalues({...values, REMARKS: data})
          }}
       />

      </div> */}

                <div className="col-md-4">
                  <label>LOT</label>
                  <select
                    name="LOT"
                    value={values.LOT}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="">Select LOT</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>


              </div>
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </div>
      </Card>


    </>
  )
}


export default AddFormReg



const showValues = [
  'APPLICATION_LETTER',
  'CITIZENSHIP',
  'PASSPORT',
  'BANK_STATEMENT_FEELODGE',
  'BANK_STATEMENT_FEEREFUND',
  'SWIFT_COPY',
  'COE',
  'OFFER_LETTER',
  'NO_OBJECT_LETTER',
  'AUTHORISED_REJECTION_LETTER',
  'RELATIONSHIP_DOCUMENTS',
]