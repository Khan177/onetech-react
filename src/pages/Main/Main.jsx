import React,{useState,useEffect,useRef} from 'react';

import "./Main.css";
import {ENDPOINT} from "../../service/api";
import Note from '../components/Note/Note'

export default function Main(props){
	const [posts, setPosts] = useState([]);
	const [searchInput,setSearchInput] = useState();
	const newPost = useRef(null);

	useEffect(() => {
		async function fetchData() {
			let response = await fetch(ENDPOINT);
			setPosts(await response.json());
		}
		fetchData()
	},[])

	const addNote = () => {
		fetch('https://jsonplaceholder.typicode.com/posts', {
		    method: 'POST',
		    body: JSON.stringify({
		      title: 'foo',
		      body: newPost.current.focus(),
		      userId: 1
		    }),
		    headers: {
		      "Content-type": "application/json; charset=UTF-8"
		    }
		  })
		  .then(response => response.json())
		  .then(json => console.log(json))
	}

	return(
		<div className="main">
			<input type="text" placeholder="Search..." onChange={(e) => setSearchInput(e.target.value)}/>
			<div className="add-note">
				<textarea name="" id="" cols="30" rows="10" placeholder="Enter your note here..." ref={newPost}></textarea>
				<button onClick={addNote}>Добавить</button>
			</div>
			<div className="notes">
				{
					posts.map((post) => <Note key={post.id} text={post.body}/>)
				}
			</div>
		</div>
	);
}