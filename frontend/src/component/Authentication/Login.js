import { FormControl, FormLabel, Input, InputGroup, VStack,Button,InputRightElement } from '@chakra-ui/react';
import React, { useState } from 'react'

const Login = () => {
  
    const [show,setshow] = useState(false);
   
    
    const [password,setPassword] = useState();
    const [email,setemail] = useState();
     

    const handleClick = () => setshow(!show);
   
    const submitHandler = () => {};

  return (
    <VStack spacing="5px">
       
          <FormControl id='email' isRequired >
            <FormLabel>Email</FormLabel>
            <Input placeholder="Enter Your email" onChange={(e)=>setemail(e.target.value)}></Input>
        </FormControl>

          <FormControl id='password' isRequired  >
            <FormLabel>Password</FormLabel>
            <InputGroup>
             <Input placeholder="Enter Your password" type={show ? "Text" :"password"} onChange={(e)=>setPassword(e.target.value)}></Input>

            <InputRightElement>
            <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
            </Button>
            </InputRightElement>
            </InputGroup>

        </FormControl>
        <Button
        colorScheme='blue'
        width={"100%"}
        style={{marginTop: 15}}
        onClick={submitHandler}
        >Login</Button>
        <Button
        variant={"solid"}
        colorScheme='red'
        width={"100%"}
        onClick={()=>{
            setemail("guest@example.com");
            setPassword("123456");
        }}
        
        >Get Guest User Credentials</Button>
         
           
           
    </VStack>
  )
}


export default Login