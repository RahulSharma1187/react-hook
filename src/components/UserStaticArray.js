import React, {useState} from "react"

const UserStaticArray = () => {
    const staticList = [
        {
            id:0, name: "Rahul Sharma", age: "30"
        },
        {
            id:1, name: "Lata Sharma", age: "28"
        },
        {
            id:2, name: "Rishita Sharma", age: "2"
        }
    ]

    const [userList, setUserList] = useState(staticList);

    const clearList = () => {
        setUserList([]);
    }

    const removeElem = (id) => {
        const newArray = userList.filter((curnt) => {
            return (
                curnt.id !== id
            )
        });
        setUserList(newArray);
    }

    return (
        <>
            <h6>UseState, map , Filter, Array </h6>
            <div className="staticArray">
                {
                    userList.map((curnt) => {
                        return (
                            <h2 key={curnt.id}>ID: {curnt.id}, Name: {curnt.name}, Age: {curnt.age}
                            <button className="removeBtn" onClick={() => removeElem(curnt.id)} >Remove</button>
                            </h2>
                        )
                    })
                }
            </div>
            <div className="clearBtn" onClick={clearList}>Clear List</div>
        </>
    )
}

export default UserStaticArray;