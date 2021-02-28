// It is your job to implement this. More info in README

import * as React from 'react'
import styled from 'styled-components'

interface IHeroCardProps {
  name: string
  description: string
  imgUrl: string
  // extend this
}

interface HeroInfoProps {
  name: string
  description: string
  // extend this
}

const HeroCardContainer = styled.div`
  width: 15em;
  background: lightgray;
  margin: 0 1em 1em;
  border-radius: 15px;
  box-shadow: 0px 3px 20px 2px rgba(0, 0, 0, 0.2);
`
const HeroImage = styled.img`
  width: 100%;
  border-radius: 15px 15px 0 0;
`

const HeroTextContainer = styled.div`
  padding: 10px;
`

const HeroStatsContainer = styled.div<{ extended: boolean }>`
  ${props => props.extended ? "height: 150px" : "height: 10px"};
  max-height: 500px
  transition: -webkit-transform ease 500ms;
  transition: max-height ease 500ms;
`

const HeroName = styled.p`
  margin: 0 0 10px;
  font-size: 30px;
  font-family: sans-serif;
`

const HeroDesc = styled.p`
  font-size: 15px;
  font-family: sans-serif;
`

const HeroInfo: React.FC<HeroInfoProps> = ({ name, description }) => {

  return (
    <HeroTextContainer>
      <HeroName>{name}</HeroName>
      <HeroDesc>{description}</HeroDesc>
    </HeroTextContainer>
  )
}

export const HeroCard: React.FC<IHeroCardProps> = ({ imgUrl, name, description }) => {

  const [extended, setExtended] = React.useState(false)

  return (
    <HeroCardContainer>
      <HeroImage src={imgUrl} />
      <HeroInfo name={name} description={description} />
      <HeroStatsContainer extended={extended}>Stats
        <button onClick={() => setExtended(!extended)}>Extend</button>
      </HeroStatsContainer>
    </HeroCardContainer>
  )
}
