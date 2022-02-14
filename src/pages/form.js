import React from 'react'
import { Grid,  Button,    Box, CardContent } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import GoogleMaps from './suggestion'



const RegistrationForm = () => {
    
    const btnStyle = { marginTop: 30 }

    const initialValues = {
        punkt: '',
        house: '',
        street: '',
        index: '',
        number: '',
        corpus:''
    }

  
    const onSubmit = (values, props) => {

        alert(JSON.stringify(values), null, 2)
        props.resetForm()
    }
    return (
        <Box>
            <CardContent   >
                
                <Formik initialValues={initialValues}  onSubmit={onSubmit}>
                    {(props) => (
                        <Form>
                          <Grid container spacing={6} justifyContent="space-evenly"   >
                         <Grid item xs={12}>
                          <GoogleMaps/>
                          </Grid>
                              <Grid item xs={12} sm={6}   >
                            <Field as={TextField} name='house' label='Дом' variant="outlined" type='house' size="small" InputLabelProps={{ shrink: true }}
                                error={props.errors.house && props.touched.house}
                                helperText={<ErrorMessage name='house' />} required />
                                </Grid>
                                <Grid item xs={12} sm={6}  >
                            <Field as={TextField} name="index" label='Индекс' type='index' variant="outlined" size="small" InputLabelProps={{ shrink: true }}
                                error={props.errors.index && props.touched.index}
                                helperText={<ErrorMessage name='index' />} required />
                                   </Grid>
                                   <Grid item xs={12} sm={6} md={6}>
                            <Field as={TextField} name='punkt' label='Населенный пункт' type='punkt' variant="outlined" size="small" InputLabelProps={{ shrink: true }}
                                error={props.errors.punkt && props.touched.punkt}
                                helperText={<ErrorMessage name='punkt' />} required />
                                
                                </Grid>
                                   <Grid item xs={12} sm={6} md={6}>
                            <Field as={TextField} name='street' label='Улица' type='street' variant="outlined" size="small" InputLabelProps={{ shrink: true }}
                                error={props.errors.street && props.touched.street}
                                helperText={<ErrorMessage name='street' />} required />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}>
                            <Field as={TextField} name='corpus' label='Корпус, Строения' type='corpus' variant="outlined" size="small" InputLabelProps={{ shrink: true }}
                                error={props.errors.corpus && props.touched.corpus}
                                helperText={<ErrorMessage name='corpus' />} required />
                                
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}>
                            <Field as={TextField} name='number' label='Кварира' type='number' variant="outlined" size="small" InputLabelProps={{ shrink: true }}
                                error={props.errors.number && props.touched.number}
                                helperText={<ErrorMessage name='number' />} required />
                                </Grid>
                             

                            
                               
                                </Grid>
                                <Grid>
                                <Button type='submit' style={btnStyle} variant='contained'
                                color='primary'>Далее</Button>
                                </Grid>
                        </Form>
                    )}
                </Formik>
            </CardContent>
        </Box>
    )
}

export default RegistrationForm;