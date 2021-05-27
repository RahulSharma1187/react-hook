import React, { useEffect, useState } from 'react'
import { FaPlusCircle , FaTrash, FaRegEdit } from "react-icons/fa";


// get local storage

const getStorage = () => {
    let newList = localStorage.getItem('lists');

    if(newList){
        return JSON.parse(localStorage.getItem('lists'));
    } else{
        return [];
    }
}

const TodoList = () => {

    const [inputData, setInputData] = useState();
    const [item, setItem] = useState(getStorage());
    const [togleSubmit, SetTogleSubmit] = useState(true);
    const [isEditItem, SetIsEditItem] = useState(null);

    const addItem = () => {
        if(!inputData){
            alert('Please fill the input');
        } else if(inputData && !togleSubmit){
            setItem(
                item.map((elem) => {
                    if(elem.id === isEditItem){
                        return{ ...elem, name:inputData }
                    }
                    return elem;
                })
            )
            SetTogleSubmit(true);
            setInputData('');
            SetIsEditItem(null);
        } else{
            const allInputData = {id: new Date().getTime().toString() , name: inputData}
            setItem([...item , allInputData]);
            setInputData(" ");
        }
    }

    // Set local storage
    useEffect(() =>{
        localStorage.setItem('lists', JSON.stringify(item));
    }, [item])

    const deleteItem = (index) => {
        const newItem = item.filter((elem) => {
            return(
                index !== elem.id
            )
        })
        setItem(newItem)
    }

    const editItem = (id) => {
        let newEditItem = item.find((elem) => {
            return  elem.id === id
        });
        SetTogleSubmit(false);
        setInputData(newEditItem.name);
        SetIsEditItem(id);
    }

    const clearAll = () => {
        setItem([]);
    }

    return(
        <>
            <h6>Todo List using React Icon, local storage, useState, map and filter method</h6>
            <div className="maintodolist">
                <div className="todolist">
                    <div className="addTodo">
                        <input type="text" placeholder="Add To Do list"
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)}
                        ></input>
                        {
                            togleSubmit ? <FaPlusCircle title="Add Item" onClick={addItem} /> : <FaRegEdit title="Updated Item" onClick={addItem} />
                        }
                        
                    </div>
                    <div className="listBox">
                        {
                            item.map((elem) => {
                                return(
                                    <h2 key={elem.id}>{elem.name}  
                                    <span> 
                                        <FaRegEdit title="Edit Item" onClick={() => editItem(elem.id)} /> 
                                        <FaTrash  title="Delete Item" onClick={() => deleteItem(elem.id)}/> 
                                    </span>

                                    </h2>
                                )
                            })
                        }
                        
                    </div>
                    <div className="showBtn">
                        <button className="clearBtn" onClick={clearAll}>Clear All</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoList