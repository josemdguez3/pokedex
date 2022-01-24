import React from 'react';
import {
    Header,
    Image,
    Segment
} from 'semantic-ui-react'

const PokedexHeader =({author,name}) => {
 return (
     <Segment basic inverted padded='very' vertical>
   <Header as='h1'>This is a header for {name} Pokedex!</Header>
   <Image centered src={'pokemon.png'} size={'small'} />
   <Header as='h3'>Author: {author}</Header>
    </Segment>
 ) 
}

export default PokedexHeader;