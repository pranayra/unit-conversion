import React, { useState } from 'react';
import { convertUnits  } from "./utils/utils";

function App() {
  const [validated, setValidated] = useState(false);
  const [result, setResult] = useState('');
  const [inputValue, setInputValue] = useState(null);
  const [sourceUnit, setSourceUnit] = useState('Kelvin');
  const [targetUnit, setTargetUnit] = useState('Celsius');
  const [studentResponse, setStudentResponse] = useState(null);

  const inputValues = ["Kelvin", "Celsius", "Fahrenheit", "Rankine", "liters", "tablespoons", "cubic-inches", "cups", "cubic-feet", "gallons", "dog"]
  
  function valuechanges(e) {
    setResult('')
    const validations = {
      inputValue: inputValue,
      sourceUnit: sourceUnit,
      targetUnit: targetUnit,
      studentResponse: studentResponse,
    }
    if (e.target.id === "inputValue") {
      setInputValue(e.target.value);
      validations['inputValue'] = e.target.value;
    }

    if (e.target.id === "sourceUnit") {
      setSourceUnit(e.target.value);
      validations['sourceUnit'] = e.target.value;
    }

    if (e.target.id === "targetUnit") {
      setTargetUnit(e.target.value);
      validations['targetUnit'] = e.target.value;
    }

    if (e.target.id === "studentResponse") {
      setStudentResponse(e.target.value);
      validations['studentResponse'] = e.target.value;
    }

    const isValid = Object.keys(validations).filter(el => validations[el]).length === 4;
    setValidated(isValid);
  }

  function convertValues() {
    let convertedValue = convertUnits(sourceUnit,targetUnit,inputValue)
    if(convertedValue==='invalid') {
setResult('invalid');
    } else {
      const roundedValue = Math.round(10*convertedValue)/10; 
      const roundedStudentResponse = Math.round(10*studentResponse)/10; 
      console.log(convertedValue,roundedValue,roundedStudentResponse)
      if(roundedValue===roundedStudentResponse) {
        setResult('correct');
      } else {
        setResult('incorrect');
      }
    }

  }

  return (
    <div>
                  <div className="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
                <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                    <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                        <div className="w-full flex justify-start text-gray-600 mb-3">
                        </div>
                        <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Enter Conversion details</h1>
                        <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Input Value</label>
                        <div className="flex">
                          <input onChange={(e)=> valuechanges(e)} id="inputValue" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Enter value here" />
                          <select id="sourceUnit" name="Reason" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" value={sourceUnit} onChange={(e) => valuechanges(e)} >
                  {inputValues.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
                        </div>
                        <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Target Unit</label>
                        <div className="flex">
                        <select id="targetUnit" name="Reason" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" value={targetUnit} onChange={(e) => valuechanges(e)} >
                  {inputValues.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                  </select>

                        </div>
                        <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Student's Response</label>
                        <input onChange={(e)=> valuechanges(e)} id="studentResponse" className="mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Student's Response here" />


                        <button onClick={convertValues} disabled={!validated} className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out mt-3 rounded text-white px-8 py-2 text-sm ${!validated ? 'bg-gray-400':'bg-indigo-700 hover:bg-indigo-600'}`}>Submit</button>
                        <div>
                        {result?
                        <>
                        {result==="correct" ?
                        <>
                        <div className="mt-5 py-2 px-2 mb-4 bg-green-100 text-green-900 text-sm rounded-md border border-green-200">
                        {`Your answer is ${result}`}
                        </div>
                        </>
                        :
                        <>
                        <div className="mt-4 py-2 px-2 mb-4 bg-red-100 text-red-900 text-sm rounded-md border border-red-200">
                          {`Your answer is ${result}`}
                        </div>
                        </>}
                        </>
                      :<></>}
                        
                        </div>
                    </div>
                </div>
            </div>
      
    </div>  
);
}

export default App;
