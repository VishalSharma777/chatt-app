import { FormControl, VStack,FormLabel , Input, InputRightElement,Button,InputGroup} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useToast } from "@chakra-ui/react";

const SignUp = () => {
    const [show,setshow] = useState(false);
    const [name,setName] = useState();
    const [confirmpassword, setconfirmpassword] = useState();
    const [password,setPassword] = useState();
    const [email,setemail] = useState();
    const [pic,setpic] = useState();
    
    const [loading, setloading] = useState(false);

    const handleClick = () => setshow(!show);

    const toast = useToast();

    const postDetails = (pics) => {
      setloading(true);
      if(pics === undefined){
         toast({
           title: "Please select Image",
            position: "bottom",
           status: "warning",
           duration: 5000,
           isClosable: true,
         });
         return;
      }

      if(pics.type === "image/jpeg" || pics.type === "image/png"){
        const data = new FormData();
        data.append("file",pics);
        data.append("upload_preset","chat-app");
        data.append("cloud_name","surajchatapp");
        fetch("https://api.cloudinary.com/v1_1/surajchatapp/image/upload",{
          method: "post",
          body: data,

        }).then((res)=>res.json())
          .then(data =>{
            setpic(data.url.toString());
            setloading(false);
          })
          .catch((err)=>{
            console.log(err);
            setloading(false);
          });

      }else{
         toast({
           title: "Please select an Image",
            position:"bottom",
           status: "warning",
           duration: 5000,
           isClosable: true,
         });
         return;
      }

    };
    const submitHandler = () => {
      
    };


  return (
    <VStack spacing="5px">
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your name"
          onChange={(e) => setName(e.target.value)}
        ></Input>
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter Your email"
          onChange={(e) => setemail(e.target.value)}
        ></Input>
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            placeholder="Enter Your password"
            type={show ? "Text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
          ></Input>

          <InputRightElement>
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="confirmpassword" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            placeholder="Confirm Password"
            type={show ? "Text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
          ></Input>

          <InputRightElement>
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="pic" isRequired>
        <FormLabel>Upload you pic</FormLabel>
        <Input
          placeholder="Upload you pic"
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        ></Input>
      </FormControl>
      <Button
        colorScheme="blue"
        width={"100%"}
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
      >
        SignUp
      </Button>
    </VStack>
  );
}

export default SignUp