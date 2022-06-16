import React from 'react'
import {
    Button,
    Flex,
    Heading,
    Box,FormControl, FormLabel,Input
  } from '@chakra-ui/react';
const Form = () => {
  return (
    <div>
<Flex width="full" align="center" justifyContent="center">
      <Box p={2}>
        <Box textAlign="center">
          <Heading>Card Details</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="test@test.com" />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="*******" />
            </FormControl>
            <FormControl>
              <FormLabel>Card Number</FormLabel>
              <Input type="text" placeholder="657696968946" />
            </FormControl>
            <FormControl>
              <FormLabel>CVV</FormLabel>
              <Input type="number" placeholder="7676D" />
            </FormControl>

            <Button width="full" mt={4} type="submit">
              Pay Now
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>


    </div>
  )
}

export default Form
