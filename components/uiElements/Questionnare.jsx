"use client"

import React from 'react';
import { useForm } from 'react-hook-form';

const Questionnaire = ({ questions }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // state to store score
    const [score, setScore] = React.useState(0);
    const checkForm = (data) => {
        console.log("data", data)
    // data is object, so we can use Object.keys to get the keys of the object
    Object.keys(data).map((key) => {
        // if the value of the key is equal to the correct answer, increment the score
        console.log("data[key]", data[key])
        console.log("questions.obj[key].Answer", questions?.obj[key].Answer)
        if (data[key] === questions.obj[key].Answer) {
            setScore(score + 1);
        }
    })
    }

    return (
        <div className="pt-32 px-24">
            <h1 className={"text-3xl font-bold underline underline-offset-2"}>Questionnaire</h1>
            {
                questions && (
                    <form onSubmit={handleSubmit(checkForm)} >
                        {questions?.obj?.map((question, index) => (
                            <div className={"my-5"} key={index}>
                                <label className={"text-xl my-12 font-bold"}>{index+1}.{question?.Question}</label>
                                <div>
                                    {question?.Options?.map((option, i) => (
                                        <div className={"flex gap-3"} key={question.id}>
                                            {/*register the question id and answer selected*/}
                                            <input
                                                className="p-2"
                                                type="radio"
                                                value={option}
                                                name={question?.id}
                                                {...register(question?.id, { required: true })}
                                            />
                                            <label className={"text-xl"} >{option}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                        {score && <h1 className={"text-2xl font-bold"}>Your score is {score}</h1>}
                        <button className="bg-gray-500 text-white p-2 m-2">Submit</button>
                    </form>
                )
            }
        </div>
    );
}

export default Questionnaire;