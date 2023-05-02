import React from 'react';
import Card from '../UI/Card/Card';
import Search from '../UI/Search';

const List = (props) => {
  const searchFilter = props.data.filter(item => {
    return item.name.includes(props.searchInput)
  })

  return (
    <main >
      <h2>{props.title} {props.data.length}</h2>
      <Search searchHandler={props.searchHandler} />
      <div>
        {searchFilter.map((item) =>
          <Card
            key={item.name}
            name={item.name}
            likes={item.likes}
            removeCard={() => props.removeHandler(item.name)}
            addLikes={() => props.likesHandler(item.name, 'add', props.title)}
            removeLikes={() => props.likesHandler(item.name, 'remove', props.title)} />)}
      </div></main>
  );
};

export default List;