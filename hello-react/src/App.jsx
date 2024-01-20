import { useState } from "react";
import AddForm from "./AddForm";
import CheckList from "./CheckList";
import Header from "./Header";

import { Container } from "@mui/material";

export default function App() {
    const [list, setList] = useState([
        { _id: 1, subject: 'Apple', done: false },
        { _id: 2, subject: 'Orange', done: true },
        { _id: 3, subject: 'Mango', done: false },
    ]);

    const add = subject => {
        if(!subject) return false;

        const _id = list[list.length - 1]._id + 1;
        setList([...list, { _id, subject, done: false }]);
    }

    const remove = _id => {
        setList(
            list.filter(item => item._id !== _id)
        );
    }

    const toggle = _id => {
        setList(
            list.map(item => {
                if(item._id === _id) 
                    item.done = !item.done;
                return item;
            })
        )
    }

    return (
		<div role="main">
			<Header count={list.filter(item => !item.done).length} />
			<Container maxWidth="sm" sx={{ mt: 4 }}>
				<AddForm add={add} />
				<CheckList 
                    list={list.filter(item => !item.done)} 
                    remove={remove} />

                <CheckList 
                    list={list.filter(item => item.done)} 
                    remove={remove} 
                    done={true}
                    />
			</Container>
		</div>
	);
}