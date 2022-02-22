import { TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Grid,  Button } from '@material-ui/core'
import { Formik, Form,  ErrorMessage } from 'formik'


const style = {
    container: {
        width: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        fontFamily: 'inherit'
    },
    fullWidth: {
        width: '100%',
        fontFamily: 'inherit',
        boxSizing: 'border-box'
    },
    fullLabel: {
        width: '95%',
        boxSizing: 'border-box',
        fontFamily: 'inherit'
    },
    halfLabel: {
        width: '49%',
        boxSizing: 'border-box',
        fontFamily: 'inherit'
    },
    button: {
        width: '100%',
        fontFamily: 'inherit',
        boxSizing: 'border-box'
    }
}
const btnStyle = { marginTop: 30,
    justifyContent: "flex-start"
}


const AutoComplete = ({
    placesKey,
    inputId,
    setAddress,
    required
}) => {
    //input state
    const [input, setInput] = useState('');
    const [addressName, setAddressName] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [postCode, setPostCode] = useState('');
    const [formattedAddress, setFormattedAddress] = useState('');
    
    //functionally clear all state
    const initialValues = {
        input: '',
        addressName: '',
        street: '',
        city: '',
        country:'',
        postCode:'',
        formattedAddress:''
    }

    //on mount, load google auto complete 
    useEffect(() => {
        const renderGoogle = () => {
            window[inputId] = new window.google.maps.places.Autocomplete(
                document.getElementById(inputId),
                {}
            );
            const handlePlaceSelect = () => {
                const place = window[inputId].getPlace();
                
                setFormattedAddress(place.formatted_address);
                for (const component of place.address_components) {
                    const type = component.types[0];
                    switch (type) {
                        case 'street_number':
                            setAddressName(component.long_name)
                            break;
                        case 'premise':
                            addressName === '' ?
                                setAddressName(component.long_name) :
                                setAddressName(component.long_name + ', ' + addressName)
                            break;
                        case 'route':
                            setStreet(component.long_name)
                            break;
                        case 'postal_town':
                            setCity(component.long_name)
                            break;
                        case 'administrative_area_level_2':
                            city === '' &&
                                component.long_name === 'Greater London' ?
                                setCity('London') :
                                setCity(component.long_name)
                            break;
                        case 'neighborhood':
                            if (city === '') setCity(component.long_name)
                            break;
                        case 'country':
                            setCountry(component.long_name)
                            break;
                        case 'postal_code':
                            setPostCode(component.long_name)
                            break;
                        default:
                            console.log('irrelevant component type')
                            break;
                    }
                }
            }

            //listen for place change in input field
            window[inputId].addListener("place_changed", handlePlaceSelect)
        }

        //if places script is already found then listen for load and then renderGoogle
        let found = document.getElementById('placesScript') ? true : false;
        if (!found) {
            const script = document.createElement("script");
            script.id = 'placesScript';
            script.src = "https://maps.googleapis.com/maps/api/js?key=" + placesKey + "&libraries=places";
            script.async = true;
            script.onload = () => renderGoogle();
            document.body.appendChild(script);
        }
        if (found) {
            document.getElementById('placesScript').addEventListener('load', renderGoogle);
        }
    }, [placesKey, inputId, addressName, city])

    //return address object to parent for your use case
    useEffect(() => {
        const addressObject = {
            formattedAddress: formattedAddress,
            addressName: addressName,
            street: street,
            city: city,
            country: country,
            postCode: postCode
        };
        setAddress(addressObject);
    }, [formattedAddress, addressName, street, city, country, postCode, setAddress])

    //listen for mobile screen size
    const [mobile, setMobile] = useState(false);
    useEffect(() => {
        const screenSize = (e) => {
            const w = e.target.innerWidth;
            w < 600 ?
                setMobile(true) :
                setMobile(false)
        }
        window.addEventListener('resize', screenSize);
    }, [])

    const onSubmit = () => {

        window.open("/success","_self")
    }

    return (
        <div>
       <Formik initialValues={initialValues}  onSubmit={onSubmit}>
                    {(props) => (
     <Form>
        <Grid container spacing={6} justifyContent="space-evenly">
            <Grid item xs={12}>
                Адресс обьекта:
                <TextField
                    variant="outlined"
                    size="small"
                    id={inputId}
                    type="text"
                    style={style.fullWidth}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                Номер Здания:
                <TextField
                    variant="outlined"
                    size="small"
                    id="addressName"
                    type="text"
                    style={style.fullWidth}
                    value={addressName || ''}
                    onChange={(e) => setAddressName(e.target.value)}
                    required={required && required}
                    error={props.errors.addressName && props.touched.addressName}
                        
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                Улица:
                <TextField
                    variant="outlined"
                    size="small"
                    id="street"
                    type="text"
                    style={style.fullWidth}
                    value={street || ''}
                    onChange={(e) => setStreet(e.target.value)}
                    error={props.errors.street && props.touched.street}
                    helperText={<ErrorMessage name='street' />} required 
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                Город:
                <TextField
                    variant="outlined"
                    size="small"
                    id="city"
                    type="text"
                    style={style.fullWidth}
                    value={city || ''}
                    onChange={(e) => setCity(e.target.value)}
                    required={required && required}
                    error={props.errors.city && props.touched.city}
                    
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                Страна:
                <TextField
                    variant="outlined"
                    size="small"
                    id="country"
                    type="text"
                    style={style.fullWidth}
                    value={country || ''}
                    onChange={(e) => setCountry(e.target.value)}
                    required={required && required}
                    error={props.errors.country && props.touched.country}
                     
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                Индекс:
                <TextField
                    variant="outlined"
                    size="small"
                    id="postCode"
                    type="text"
                    style={style.fullWidth}
                    value={postCode || ''}
                    onChange={(e) => setPostCode(e.target.value)}
                    required={required && required}
                    error={props.errors.postCode && props.touched.postCode}
                    
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                Кварира:
                <TextField
                    variant="outlined"
                    size="small"
                    id="postCode"
                    type="text"
                    style={style.fullWidth}
                    error={props.errors.formattedAddress && props.touched.formattedAddress}
                    helperText={<ErrorMessage name='formattedAddress' />} required 
                />
            </Grid>
            
          
        </Grid>
        
            <Button
                style={btnStyle}
                type='submit'
                variant='contained'
                color='primary'
            >
                Далее
            </Button>
            </Form>
         )}
         </Formik>
        </div>
       
    )
}

export default AutoComplete