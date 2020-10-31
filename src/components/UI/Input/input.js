 import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const input = (props)=>{
	let inputElement = null;

	let Classes = [];
    Classes.push('form-control');
    let validationerror = null;
    if(!props.isvalid&&props.touched){
    	Classes.push('bg-danger');
    	validationerror = (<p>Please Enter a valid value!!!</p>);
    }

	switch(props.inputType)
	{
		case ('input'):
		  inputElement = <input className={Classes.join(' ')} {...props.elementconfig} value={props.value} onChange={props.changed} />;
		  break;

		case('textarea'):
		inputElement = <input className={Classes.join(' ')} {...props.elementconfig} value={props.value} onChange={props.changed} />;
		break;
		case('select'):
		inputElement = (
			<select className={Classes.join(' ')}>
			{
				props.elementconfig.options.map((values)=>(
                <option key = {values.value}value={values.value} onChange={props.changed}>{values.deliverymode}  </option>
					))
                
			}

			</select>



			)
		break;

		default:
		inputElement = <input className={Classes.join(' ')} {...props.elementconfig} value={props.value} />;
	}


	return (

          <div className='form-group'>
            <label> {props.label} </label>
            {
            	inputElement}{
            	validationerror
            }

          </div>
		);
}


export default input;




