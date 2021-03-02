// It is your job to implement this. More info in README

import * as React from 'react'
import styled from 'styled-components'

interface IHeroCardProps {
  id: string
  name: string
  description: string
  imgUrl: string
  attributes: {
    strength: number
    intelligence: number
    stamina: number
    healthpoints: number
    mana: number
    agility: number
    speed: number
    resistance: string
    weakness: string
  }
  // extend this
}

interface HeroInfoProps {
  name: string
  description: string
  attributes: {
    strength: number
    intelligence: number
    stamina: number
    healthpoints: number
    mana: number
    agility: number
    speed: number
    resistance: string
    weakness: string
  }
  // extend this
}

interface HeroStatsProps {
  heroName: string
  statName: string
  value: any
  // extend this
}

const HeroCardSection = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 40vw;
  height: 490px;
  background: #F5F5F5;

  border-radius: 15px;
  box-shadow: -1rem 3px 20px 2px rgba(0, 0, 0, 0.2);

  transition-timing-function: ease-in-out;
  transition: .3s;

  &:hover {
    transform: translateY(-1rem);
    transform: scale(1.1);
    height: 660px;
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
  margin: 15px 25px 15px 20px;
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

const HeroStatName = styled.div`
  font-size: 13px;
  font-family: sans-serif;

  margin: 8px 0 8px;

  display: inline-block;
  position: relative;
  top: 0;
`

const HeroStatsContainer = styled.div`
  position: absolute;
  bottom: 5px;

  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: center;

  margin-right: 30px;

  opacity: 0;
  transition: .2s;

  ${HeroCardSection}:hover & {
    opacity: 1;
    transition: .2s .2s;
  }
`

const Icon = styled.div`
  background: #FFBEA9;
  height: 55px;
  width: 55px;
  margin: auto;

  font-size: 18px;
  font-family: sans-serif;

  text-align: center;
  vertical-align: middle;
  line-height: 55px;

  border-radius: 50%;
`

const StatBox = styled.div`
  width: auto;
  align-content: center;
  text-align: center;
  margin: 0 15px;
`

const HeroStats: React.FC<HeroStatsProps> = ({ heroName, value, statName }) => {

  return (
    <StatBox>
      <Icon>{value}</Icon>
      <HeroStatName>{statName}</HeroStatName>
    </StatBox>
  )
}


const CenteredStats = styled(HeroStats)`
  text-align: center;
  align-content: center;
  vertical-align: middle;
  line-height: 55px;
`

const HeroInfo: React.FC<HeroInfoProps> = ({ name, description, attributes }) => {

  const attributeList = Object.entries(attributes)
  attributeList.pop();

  return (
    <HeroTextContainer>
      <HeroName>{name}</HeroName>
      <HeroDesc>{description}</HeroDesc>
      <HeroStatsContainer>
        {
          attributeList.map(([key, value]) => (
            <CenteredStats key={key} heroName={name} statName={key} value={value} />
          ))}
      </HeroStatsContainer>
    </HeroTextContainer>
  )
}

export const HeroCard: React.FC<IHeroCardProps> = ({ imgUrl, name, description, attributes }) => {

  return (
    <HeroCardSection>
      <HeroImage src={imgUrl} />
      <HeroInfo name={name} description={description} attributes={attributes} />
    </HeroCardSection>
  )
}
