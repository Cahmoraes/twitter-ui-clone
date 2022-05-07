import React from 'react'
import StyckBox from 'react-sticky-box'
import FollowSuggestion from '../FollowSuggestion'
import List from '../List'
import News from '../News'

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body
} from './styles'

const Sidebar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StyckBox>
        <Body>
          <List
            title='Talvez você curta'
            elements={[
              <FollowSuggestion
                name='Caique Moraes'
                nickname='@cahmoraes'
              />,
              <FollowSuggestion
                name='Thomas Moraes'
                nickname='@thomoraes'
              />,
            ]}
          />
          <List
            title='Talvez você curta'
            elements={[
              <News />,
              <News />,
              <News />
            ]}
          />
          <List
            title='Talvez você curta'
            elements={[
              <News />,
              <News />,
              <News />
            ]}
          />
          <List
            title='Talvez você curta'
            elements={[
              <News />,
              <News />,
              <News />
            ]}
          />
          <List
            title='Talvez você curta'
            elements={[
              <News />,
              <News />,
              <News />
            ]}
          />
        </Body>
      </StyckBox>
    </Container>
  )
}

export default Sidebar;