import React, { useState } from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AddItem from "./components/AddItem";

function App() {

  const storedTodo = localStorage.getItem('todo');
  const initialItems: any[] = storedTodo ? JSON.parse(storedTodo) : [];

  const [items, setItems] = useState<any[]>(initialItems);

  const[newItem, setNewItem] = useState('');

  const handleCheck = (id:number) => {
    const iterateList = items.map((item)=> item.id === id ? {...item, checked:!item.checked} : item);

    setItems(iterateList);

    localStorage.setItem('todo',JSON.stringify(iterateList));
  };

  const handleDelete = (id:number) => {
    const itemList = items.filter((item)=> item.id !== id);
    setItems(itemList);
    localStorage.setItem('todo',JSON.stringify(itemList));
  };

  const addTask = (todo:string) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const itemList = {id, title:todo, checked:false};
    const allItems = [...items, itemList];
    setItems(allItems);
    localStorage.setItem('todo',JSON.stringify(allItems));
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!newItem) return;
    //add function
    addTask(newItem);
    setNewItem('');
  };

  return (
    <div className="App">
      <Header title = "#Scribe - Todo" listItemLength={items.length}/>
      <AddItem handleSubmit={handleSubmit} newItem={newItem} setNewItem={setNewItem}/>
      <Content items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
      <Footer/>
    </div>
  );
}

export default App;
