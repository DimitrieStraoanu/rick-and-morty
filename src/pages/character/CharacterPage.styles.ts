import styled from 'styled-components'
import { Gender } from 'features/characterPage.interface'

export const Container = styled.div`
  max-width: 1000px;
  margin: 30px auto 0;
  color: #fff;
  font-size: 14px;
  text-align: center;
  line-height: 1.5;

  span {
    display: block;
    text-transform: capitalize;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    margin: 0 auto;
  }

  & > span:first-of-type {
    font-size: 38px;
    font-weight: 700;
    margin: 15px 0;
  }
`

export const Episodes = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > span:first-of-type {
    font-size: 24px;
    font-weight: 700;
  }
`
export const GenderBadge = styled.b`
  display: inline-block;
  padding: 0 8px;
  border-radius: 50px;
  margin-left: 5px;

  &.${Gender.FEMALE} {
    background: #ff4e47;
  }

  &.${Gender.MALE} {
    background: #475dff;
  }

  &.${Gender.UNKNOWN} {
    background: #8a8a8a;
  }

  &.${Gender.GENDERLESS} {
    background: #dc2eff;
  }
`
