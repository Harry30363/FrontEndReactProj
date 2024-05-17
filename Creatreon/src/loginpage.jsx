// import { useState } from 'react'
// import ReactDOM from 'react-dom/client'
// import './App.css'
// import './loginpage.css'

// function Loginpage() {
//   const [count, setCount] = useState(0)

//   return (
//     <div class="wrapper">
//         <form action="">
//             <h1> Login</h1>
//             <div class="input-box">
//                 <input type="text" placeholder="User"
//                 required/>
//             </div>
//             <button type="submit" class="btn">Login</button>
//         </form>
//     </div>
// )
// }

// export default Loginpage;

import { Link } from 'react-router-dom';
import { useState } from 'react';
import './loginpage.css'

function Loginpage() {
  const [count, setCount] = useState(0);

  return (
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="User" required />
        </div>
        {/* Use Link to navigate to the login page */}
        <Link to="/login" className="btn">Login</Link>
      </form>
    </div>
  );
}

export default Loginpage;
