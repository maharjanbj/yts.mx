import './Nav.css'

export const Nav = () => {
    return <nav className='flex-center'>
        <div className="nav-logo">
            <img src="https://repository-images.githubusercontent.com/580417416/68b872ed-fb38-4fa9-bb3a-2e8c3450d3a8" alt="logo" />
        </div>
        <div className="nav-list flex align-center">
            <div className="nav-icons flex">
                <span class="material-icons blur">search</span>
                <input type="text" placeholder='Quick Search'/>
            </div>
            <div className='blur mg-small'>Home</div>
            <div className='blur mg-small'>4K</div>
            <div className='blur mg-small'>Tranding</div>
            <div className='blur mg-small'>Browse Movies</div>
            <div className='mg-small'>Login</div>
            <div className='mg-small'>Register</div>
        </div>
    </nav>
}