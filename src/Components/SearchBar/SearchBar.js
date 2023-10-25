import React, { useState } from 'react'
import './SearchBar.css'

function SearchBar(props) {

    const [inputValue, setInputValue] = useState('')
    const [isShow, setIsShow] = useState(false)
    const [selected, setSelected] = useState(null)

    const select = (e) => {
        setInputValue(e.target.textContent)
        setIsShow(false)
    }

    const change = (e) => {
        setSelected(null)
        if (e.target.value === '') {
            setIsShow(false)
        }
        else {
            setIsShow(true)
        }
        setInputValue(e.target.value)
        props.change(e)
    }

    const enter = (e) => {
        switch (e.key) {
            case 'Enter':
                let value
                if (selected) {
                    value = { target: { value: props.list[selected] } }
                }
                else if (props.list[0]) {
                    value = { target: { value: props.list[0] } }
                }
                else {
                    value = { target: { value: '' } }
                }
                change(value)
                setIsShow(false)
                break

            case 'ArrowDown':
                if (selected !== null) {
                    if (selected + 1 >= props.list.length) {
                        setSelected(0)
                    }
                    else {
                        setSelected(selected + 1)
                    }
                }
                else {
                    setSelected(0)
                }
                break

            case 'ArrowUp':
                if (selected !== null) {
                    if (selected <= 0) {
                        setSelected(props.list.length - 1)
                    }
                    else {
                        setSelected(selected - 1)
                    }
                }
                else {
                    setSelected(props.list.length - 1)
                }
                break

            default:
                break
        }
    }

    const IsShowList = () => {
        // console.log(props.list ,isShow && props.list !== undefined && props.list !== null)
        return isShow && props.list !== undefined && props.list !== null
    }

    const content = () => {
        if (props.element) {
            return IsShowList() && <div className='results_list'>
                {
                    props.list.map((element, index) => {
                        // console.log(element[props.element])
                        return <div className={selected === index ? 'result selected' : 'result'} key={index} onClick={select}>{element[props.element]}</div>
                    })
                }
            </div>
        } else {
            return IsShowList() && <div className='results_list'>
                {
                    props.list.map((element, index) => {
                        return <div className={selected === index ? 'result selected' : 'result'} key={index} onClick={select}>{element}</div>
                    })
                }
            </div>
        }
    }

    return (
        <div className='search_bar'>
            <input
                // className=''
                list="city"
                type="text"
                id="city"
                placeholder={props.placeholder}
                onChange={change}
                autoComplete='off'
                value={inputValue}
                onKeyDown={enter}
            />
            {content()}
        </div>
    )
}

export default SearchBar