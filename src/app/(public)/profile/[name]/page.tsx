interface Iprops{
    params :{
name:string
    }
}

function Profiles({params:{name}}:Iprops) {
    
    return <div>
        <h1>Profile:{name.toUpperCase()}</h1>
    </div>
    
}
export default Profiles