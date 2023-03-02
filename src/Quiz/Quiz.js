import React, { useEffect, useState } from 'react'
import './quiz.scss'
export default function Quiz({ quiz, handleChangeQuiz }) {
    const [checkedState, setCheckedState] = useState(new Array(quiz.ans.length).fill(false))
    const [correct, setCorrect] = useState(new Array(quiz.ans.length).fill(0))
    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
    }
    const handleSubmit = () => {
        const newCorrect = checkedState.map((item, idx) => {

            if (quiz.key.includes(quiz.ans[idx])) {
                return 1;
            }
            if (item && !quiz.key.includes(quiz.ans[idx])) {
                return -1;
            }
            return 0;
        })
        setCorrect(newCorrect)
    }
    useEffect(() => {
        setCorrect(new Array(quiz.ans.length).fill(0));
        setCheckedState(new Array(quiz.ans.length).fill(false));
    }, [quiz])
    const handleNext = () => {
        handleChangeQuiz()
    }
    return (
        <div className='quiz '>
            <h2 className='title' >{quiz.question}</h2>
            {quiz?.link ? <image src={quiz.link} /> : ""}
            <div className='list '>
                {quiz.ans.map((item, id) => {
                    return <div className={correct[id] === 1 ? "correct " : correct[id] === -1 ? "wrong " : ""} key={id}>
                        <label className='container' htmlFor={id}> {item}
                            <input type="checkbox" id={id} name={item} value={item} onChange={() => handleOnChange(id)} checked={checkedState[id]} />
                            <span class="checkmark"></span>
                        </label>
                    </div>
                })}
            </div >

            {
                correct.every(item => item === 0) ? <button className='button' onClick={handleSubmit}>Nộp</button> : <button className='button' onClick={handleNext}>Next</button>
            }
        </div>
    )
}
