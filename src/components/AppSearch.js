import './AppSearch.css'

const AppSearch = (props)=>{
    const {value, onValueChang} = props

    return (
        <div className="app-search">
            <form>
                <input 
                id="search" 
                className="app-search-input" 
                type="search" 
                placeholder="ค้นหา" />
            </form>
        </div>
    )
}

export default AppSearch;