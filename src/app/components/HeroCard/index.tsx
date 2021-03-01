// It is your job to implement this. More info in README

import * as React from 'react'
import styled from 'styled-components'

interface IHeroCardProps {
  id: string
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

const HeroCardSection = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 30em;
  margin: 0 0em 3rem;
  background: #ECECEC;

  border-radius: 15px;
  box-shadow: -1rem 3px 20px 2px rgba(0, 0, 0, 0.2);
  transition: .2s;

  &:hover {
    transform: translateY(-1rem);
    transform: scale(1.1);
  }

  &:hover~& {
    transform: translateX(160px);
  }

  &:not(:first-child) {
    margin-left: -150px;
  }
`
const HeroImage = styled.img`
  width: 100%;
  border-radius: 15px 15px 0 0;
`

const HeroTextContainer = styled.div`
  padding: 15px 25px 15px 20px;
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

export const HeroCard: React.FC<IHeroCardProps> = ({ imgUrl, name, description, id }) => {

  return (
    <HeroCardSection>
      <HeroImage src={imgUrl} />
      <HeroInfo name={name} description={description} />
    </HeroCardSection>
  )
}
