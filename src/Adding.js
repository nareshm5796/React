import { useState } from "react";

function Addining(){
    const [list,setlist]=useState([]);
    const [text,settext]=useState({
        name:"",
        id:""
    });
    function changetext(e){
        settext({
            ...text,
            name:e.target.value,
            
        });
    }

function Submit(e){
    e.preventDefault();
    let obj = {
        name:text.name,
        id : new Date().getTime().toString()
    };
    setlist([...list,obj])
    console.log(obj);
    settext({
        ...text,
        name:"",
        id:""
    });
}

function deleteb(id){
    let new_obj = list.filter((eachitem)=>{
        return eachitem.id !== id;
    })
    setlist(new_obj);
}
const [edit,setedit]=useState({
    id :"",
    edititem:false
})

function editState(id){
    setedit({
        ...edit,
        id:id,
        edititem:true}
    )
    let editableitem = list.find((eachitem)=> eachitem.id === id)
    settext({
        ...text,
        name:editableitem.name,
        id: editableitem.id
    })
    console.log("hi"+editableitem.name);
    
}
function Submitedit(e){
    e.preventDefault();
    console.log(edit); 
    let new_obj1= list.map((eachitem)=> {
        if (eachitem.id ===edit.id){
            return {
                ...text,
                name:text.name,
                id:edit.id
            }
        }
        else{
            return eachitem
        }
    })
    console.log("old",list)
    console.log("new object is:",new_obj1)
    setlist(new_obj1);
    settext({
        name:"",
        id:""
    })

    setedit({
        id:"",
        edititem:false}
    )
 }

    return <div>
            <hr/>
            <div className="add-List"><input onChange={changetext} placeholder="Enter List Name" value={text.name}></input>{edit.edititem ?(<button onClick={Submitedit} >edit</button>):(<button onClick={Submit} >add</button>)}</div>
            <hr/>
            
            <ul className="add-List1">
                <h3> {list.length===0? "Please Add Item...." : ""}</h3>
                {
            list.map((eachitem)=> {
                console.log(eachitem.name)
                const {name,id}=eachitem;
                return <li key={id} >
                        <div className="add-List"><input value={name} ></input><button onClick={()=>editState(id)}>Edit</button><button onClick={()=>deleteb(id)}>Delete</button></div>
                </li>
            })
            }
            </ul>
            
        </div>
};
export default Addining;
