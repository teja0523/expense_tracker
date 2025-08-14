import {Link} from 'react-router-dom';
function Home(){
    return(
        <>
        <div class="mx-auto mt-2 p-14 lg:ml-48 xl:ml-80 2xl:ml-96">
            <div className="top text-2xl sm:ml-20 sm:text-4xl text-indigo-500">
                Welcome!
            </div>
            <div className="hero sm:text-xl sm:mt-8 sm:ml-8">
                <h1>Track your expenses effortlessly</h1>
                <h1 >Manage your personal finances, track spending,<br/>
                     and save more with our simple expense tracker.</h1>
            </div>
            <div className="features mt-5 sm:ml-8">
                <h1 className="text-lg sm:text-2xl text-indigo-400 sm:ml-20">Features</h1>
                <ul className="sm:ml-4">
                    <li> Easy tracking of expenses and income.</li>
                    <li>Secure and private data storage.</li>
                    
                </ul>
                <p class="sm:ml-5 mt-5 text-lg text-indigo-400">login to start tracking your expenses</p>
            </div>
            <button className="ml-24 mt-5 bg-indigo-400 rounded p-2"><Link to="/create-expense">Get started</Link></button>
        </div>
        {/* <div className="footer flex">
           <footer className="flex justify-between items-center space-x-12">
               <p>About</p>
               <p>Contact</p>
           </footer>
        </div> */}
        </>
    )
}
export default Home;