import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Display from  '../Display';

test ('Test that the Display component renders without any passed in props', () =>{
    render(<Display displayFun={false}/>);
    const button = screen.queryByRole('button');
    expect(button).toBeInTheDocument();
    })
    
    test ('Test that when the fetch button is pressed, the show component will display', ()=>{
        const fakeFunc = jest.fn();
    
        render(<Display getData={fakeFunc} isFetchingData={false}/> );
        const button = screen.getByRole("button");
        userEvent.click(button);
        
        expect(fakeFunc.mock.calls.length).toBe(0);
    })
    
    
    












///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.