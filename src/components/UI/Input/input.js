import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const input = (props)=>{
	let inputElement = null;

	switch(props.inputType)
	{
		case ('input'):
		  inputElement = <input className='form-control' {...props.elementconfig} value={props.value} onChange={props.changed} />;
		  break;

		case('textarea'):
		inputElement = <input className='form-control' {...props.elementconfig} value={props.value} onChange={props.changed} />;
		break;
		case('select'):
		inputElement = (
			<select className='form-control'>
			{
				props.elementconfig.options.map((values)=>(
                <option key = {values.value}value={values.value} onChange={props.changed}>{values.deliverymode}  </option>
					))
                
			}

			</select>



			)
		break;

		default:
		inputElement = <input className='form-control' {...props.elementconfig} value={props.value} />;
	}


	return (

          <div className='form-group'>
            <label> {props.label} </label>
            {
            	inputElement
            }

          </div>
		);
}


export default input;




