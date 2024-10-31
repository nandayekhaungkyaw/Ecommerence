import React from 'react'
import Container from '../components/Container'
import Breadcrumb from './Breadcrumb'
import CardSection from '../components/CardSection'

const MyCart = () => {
  return (
   <Container>
    <Breadcrumb currentPage='My-Cart' />
    <CardSection/>
   </Container>
  )
}

export default MyCart
