import './AppSearch.css'

const AppSearch = (props)=>{
    const {value, onValueChang} = props

    return (
        <div className="app-search">
            <form>
                <input 
                id="search" 
                className="app-search-input" 
                type="text" 
                placeholder="ค้นหา" 
                value={value}
                onChange={(event)=>{onValueChang(event.target.value)}}/>
            </form>
        </div>
    )
}

export default AppSearch;