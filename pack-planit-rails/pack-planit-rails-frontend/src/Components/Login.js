// import React, {useState} from 'react'

// export default function Login(props) {
//     const [username, setUsername] = useState("")
//     const [error, setError] = useState("")

//     const handleChange = (event) => {
//         setUsername(event.target.value)
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         props.login(username)
//         .then((res) => {
//             if (res.id) {
//                 props.history.push("/home");
//             } else {
//             setError(res.error)
//             }   
//         });
//     };

//     return (
//         <div className="login">
//             <p>Please Log In</p>
//             <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 name="username"
//                 value={username}
//                 onChange={handleChange}
//             />
//             <input type="submit" />
//             </form>
//             {error ? <p>{error}</p> : null}
//         </div>
//     );
// }
