import React,{useState} from 'react';
import './ContactList.css';
import Contact from '../Contact/Contact';

export default function ContactList(props){
	const [searchValue, setSearchValue] = useState("");
	const [users, setUsers] = useState(props.users);
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("")
	const deleteUser = (id) =>{
		let newUsers = [...users];
		for(let i = 0;i<newUsers.length;i++){
			if (newUsers[i].id === id){
				newUsers.splice(i,1);
			}
		}
		setUsers(newUsers);
	}
	const addUser = (user) =>{
		let newUsers = [...users];
		user.id = newUsers[newUsers.length-1].id+1;
		newUsers.push(user);
		setUsers(newUsers);
		setName("");
		setPhone("");
	}
	return (
		<div className="contact-list">
			<div className="search-form">
				<input type="text" placeholder="Search contacts" onChange={e => setSearchValue(e.target.value.toLowerCase())}/>
			</div>
			<div className="add-form">
				<input type="text" placeholder="Name" onChange={e => setName(e.target.value)}/>
				<input type="text" placeholder="Phone" onChange={e => setPhone(e.target.value)}/>
				<button onClick={(e) => {
					name&&phone&&addUser({name:name,phone:phone})}
					}
				>
					Add user
				</button>
			</div>
			<div className="contacts">
				<ul>
					{
						users.map((user)=>user.name.toLowerCase().startsWith(searchValue) && <li key={user.id}><Contact name={user.name} phone={user.phone} id={user.id} deleteUser={()=>deleteUser(user.id)}/></li>)
					}
				</ul>
			</div>
		</div>
	);
}