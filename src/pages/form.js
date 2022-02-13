import React from 'react'
import { Grid,  Button, Typography, Container, FormControl, Box } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import GoogleMaps from './suggestion'

const RegistrationForm = () => {
    
    const btnStyle = { marginTop: 10 }

    const initialValues = {
        punkt: '',
        house: '',
        street: '',
        index: '',
        number: '',
        corpus:''
    }
    const validationSchema = Yup.object().shape({
        punkt: Yup.string().min(3, "It's too short").required("Required"),
        house: Yup.string().min(3, "It's too short").required("Required"),
        street: Yup.string().required("Required"),
        number: Yup.number().typeError("Enter valid  number").required("Required"),
        index:Yup.string().typeError("Enter valid Phone number").required("Required"),
        corpus: Yup.number().typeError("Enter valid  number").required("Required"),
    })
    const onSubmit = (values, props) => {

        alert(JSON.stringify(values), null, 2)
        props.resetForm()
    }
    return (
        <Box>
            <Container  component="main" maxWidth="xs">
                
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form>
                          <Grid container spacing={2} >
                            {/* <TextField label='Name' name="name" fullWidth value={props.values.name}
                    onChange={props.handleChange} /> */}
                    <Grid>
                           <GoogleMaps/>
                           </Grid>
                             {/* <Grid>
                            <Field as={TextField} name='name' label='Name' variant="outlined"
                                error={props.errors.name && props.touched.name}
                                helperText={<ErrorMessage name='name' />} required />
                                </Grid> */}

                            {/* <TextField label='Email' name='email' type='Email' fullWidth 
                    {...props.getFieldProps('email')}/> */}
                              <Grid item xs={12} sm={6}>
                            <Field as={TextField} name='house' label='Дом' variant="outlined" type='house'
                                error={props.errors.house && props.touched.house}
                                helperText={<ErrorMessage name='house' />} required />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                            <Field as={TextField} name="index" label='Индекс' type='index' variant="outlined"
                                error={props.errors.index && props.touched.index}
                                helperText={<ErrorMessage name='index' />} required />
                                   </Grid>
                                   <Grid item xs={12} sm={6}>
                            <Field as={TextField} name='punkt' label='Населенный пункт' type='punkt' variant="outlined"
                                error={props.errors.punkt && props.touched.punkt}
                                helperText={<ErrorMessage name='punkt' />} required />
                                
                                </Grid>
                                   <Grid item xs={12} sm={6}>
                            <Field as={TextField} name='street' label='Улица' type='street' variant="outlined" 
                                error={props.errors.street && props.touched.street}
                                helperText={<ErrorMessage name='street' />} required />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                            <Field as={TextField} name='corpus' label='Корпус строения' type='corpus' variant="outlined"
                                error={props.errors.corpus && props.touched.corpus}
                                helperText={<ErrorMessage name='corpus' />} required />
                                
                                </Grid>
                                <Grid item xs={12} sm={6}>
                            <Field as={TextField} name='number' label='Кварира' type='number' variant="outlined"
                                error={props.errors.number && props.touched.number}
                                helperText={<ErrorMessage name='number' />} required />
                                </Grid>
                                <Grid item xs={12} sm={6}>

                            <Button type='submit' style={btnStyle} variant='contained'
                                color='primary'>Register</Button>
                                </Grid>
                                </Grid>
                        </Form>
                    )}
                </Formik>
            </Container>
        </Box>
    )
}

export default RegistrationForm;