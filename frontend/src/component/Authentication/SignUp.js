import { FormControl, VStack,FormLabel , Input, InputRightElement,Button,InputGroup} from '@chakra-ui/react'
import React, { useState } from 'react'

const SignUp = () => {
    const [show,setshow] = useState(false);
    const [name,setName] = useState();
    const [confirmpassword, setconfirmpassword] = useState();
    const [password,setPassword] = useState();
    const [email,setemail] = useState();
    const [pic,setpic] = useState();

    const handleClick = () => setshow(!show);
    const postDetails = (pics) => {};
    const submitHandler = () => {};

  return (
    <VStack spacing="5px">
        <FormControl id='first-name' isRequired >
            <FormLabel>Name</FormLabel>
            <Input placeholder="Enter Your name" onChange={(e)=>setName(e.target.value)}></Input>
        </FormControl>
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

        <FormControl id='password' isRequired  >
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup>
             <Input placeholder="Confirm Password" type={show ? "Text" :"password"} onChange={(e)=>setPassword(e.target.value)}></Input>

            <InputRightElement>
            <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
            </Button>
            </InputRightElement>
            </InputGroup>

        </FormControl>

           
          <FormControl id='pic' isRequired >
            <FormLabel>Upload you pic</FormLabel>
            <Input placeholder="Upload you pic" type='file' p={1.5} accept='image/*' onChange={(e)=>postDetails(e.target.files[0])}></Input>
        </FormControl>
        <Button
        colorScheme='blue'
        width={"100%"}
        style={{marginTop: 15}}
        onClick={submitHandler}
        >SignUp</Button>
    </VStack>
  )
}

export default SignUp